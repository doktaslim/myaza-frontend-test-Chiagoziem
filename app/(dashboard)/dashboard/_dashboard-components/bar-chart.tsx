"use client";

import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function BarChart() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center h-full">Loading</div>
    );
  }

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      labels: {
        style: {
          colors: "#A1A5B7",
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value: number) {
          return value / 1000 + "K";
        },
        style: {
          colors: "#A1A5B7",
        },
      },
      min: 0,
      max: 50000,
      tickAmount: 5,
    },
    colors: ["#6359E9", "#CBC8FF"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    legend: {
      show: false,
      position: "top",
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      // theme: "dark", // Set tooltip theme to dark (optional)
      onDatasetHover: {
        highlightDataSeries: true,
      },
      x: {
        show: true,
        format: "MMM", // Format tooltip x-axis label
      },
      y: {
        formatter: function (value: number) {
          return "$" + value.toLocaleString(); // Format tooltip y-axis value
        },
      },
      marker: {
        show: true,
      },
      custom: ({
        series,
        seriesIndex,
        dataPointIndex,
        w,
      }: {
        series: number[][];
        seriesIndex: number;
        dataPointIndex: number;
        w: { globals: { labels: string[] } };
      }) => {
        return `<div style="background: #464687; color: #FFFFFF; padding: 10px; border-radius: 10px;">
                  <span>${w.globals.labels[dataPointIndex]}</span><br/>
                  <span>$${series[seriesIndex][dataPointIndex]}</span>
                </div>`;
      },
    },
  };

  const series = [
    {
      name: "Income",
      data: [40000, 45000, 30000, 35000, 50000, 45000, 56456.9, 40000],
    },
    {
      name: "Outcome",
      data: [30000, 35000, 25000, 30000, 40000, 35000, 30000, 35000],
    },
  ];

  return (
    <div>
      <Chart
        options={options as ApexOptions}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

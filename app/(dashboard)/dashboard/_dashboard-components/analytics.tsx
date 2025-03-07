'use client'

import { Filter } from './filter';
import dynamic from 'next/dynamic'

const BarChart = dynamic(() => import("./bar-chart"), {
  ssr: false,
});

export const Analytics = () => {
  return (
    <div className="flex-1 rounded-lg p-4 bg-[var(--brand-background-light)] flex flex-col gap-4">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-semibold">Analytics</h3>
        <Filter type="year" />
      </div>

      {/* bar-chart */}
      <div className="mb-4">
        <BarChart />
      </div>
    </div>
  );
}

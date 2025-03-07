export function PieChart() {
  const radius = 70;
  const strokeWidth = 25;
  const circumference = Math.PI * radius;

  const hobbyPercentage = 20;
  const dailyPaymentPercentage = 55;
  const totalPercentage = hobbyPercentage + dailyPaymentPercentage;

  const hobbyStroke = (hobbyPercentage / 100) * circumference;
  const dailyPaymentStroke = (dailyPaymentPercentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center bg-transparent">
      <svg
        width="200"
        height="120"
        viewBox="0 0 200 120"
      >
        <path
          d="M 30 100 A 70 70 0 0 1 170 100"
          fill="none"
          stroke="#333847"
          strokeWidth={strokeWidth}
        />
        <path
          d="M 30 100 A 70 70 0 0 1 170 100"
          fill="none"
          stroke="#5957F9"
          strokeWidth={strokeWidth}
          strokeDasharray={`${dailyPaymentStroke} ${circumference}`}
          strokeDashoffset={0}
        />
        <path
          d="M 30 100 A 70 70 0 0 1 170 100"
          fill="none"
          stroke="#57D2FA"
          strokeWidth={strokeWidth}
          strokeDasharray={`${hobbyStroke} ${circumference}`}
          strokeDashoffset={`-${dailyPaymentStroke}`}
        />

        <text
          x="100"
          y="75"
          textAnchor="middle"
          fill="white"
          fontSize="18"
          fontWeight="bold"
        >
          {totalPercentage}%
        </text>
      </svg>

      {/* Legend */}
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[var(--brand-purple)]"></span>
            <p>Daily payment</p>
          </div>
          <p className="text-lg font-semibold">{dailyPaymentPercentage}%</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[var(--brand-chart-teal)]"></span>
            <p>Hobby</p>
          </div>
          <p className="text-lg font-semibold">{hobbyPercentage}%</p>
        </div>
      </div>
    </div>
  );
}

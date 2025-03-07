import { formatBalance } from "@/app/utils";

const data = [
  {
    name: "Total Income",
    amount: Math.floor(Math.random() * 1000000),
    color: "#4ade80",
    summary: "+1.29%",
  },
  {
    name: "Total Expense",
    amount: Math.floor(Math.random() * 100000),
    color: "#f87171",
    summary: "-0.19%",
  },
];

export const BalanceOverview = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 w-full">
      {data.map((item) => (
        <div
          className="w-full flex justify-between items-center gap-2 bg-[var(--brand-background-light)] p-4 rounded-lg"
          key={item.name}
        >
          <div className="flex items-center gap-4">
            <div
              className={`size-10 grid place-items-center rounded-md ${
                item.name.toLowerCase().includes("income")
                  ? "bg-[#64CFF6]"
                  : "bg-[var(--brand-purple)]"
              }`}
            >
              {item.name.toLowerCase().includes("income") ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[var(--brand-purple-light)]">
                {item.name}
              </span>
              <span className="text-xl font-semibold">
                {formatBalance(item.amount)}
              </span>
            </div>
          </div>
          <span
            className={`text-sm self-end justify-center rounded-full px-2 ${
              item.name.toLowerCase().includes("income")
                ? "text-[var(--brand-green)] bg-[var(--brand-green-light)]"
                : "text-[var(--brand-red)] bg-[var(--brand-red-light)]"
            }`}
          >
            {item.summary}
          </span>
        </div>
      ))}
    </div>
  );
};

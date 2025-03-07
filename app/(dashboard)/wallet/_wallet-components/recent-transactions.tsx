import { formatBalance } from "@/app/utils";
import { TransactionsTable } from "./transactions-table";

const data = Array.from({ length: 6 }).map((_, index) => ({
  id: index + 1,
  name: "Transaction " + (index + 1),
  date: "2021-09-01",
  description: "Transaction " + (index + 1),
  amount: formatBalance(Math.floor(Math.random() * 1000)),
  status: "Success",
}));

export function RecentTransactions() {
  return (
    <div className="p-4 rounded-md bg-[var(--brand-background-light)]">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center w-full">
          <h4 className="text-xl font-semibold">Recent transactions</h4>
          <p className="text-[var(--brand-text-secondary)]">See all</p>
        </div>

        {/* table */}
        <TransactionsTable
          data={data}
          tableHeaders={[
            { name: "Name" },
            { date: "Date" },
            { description: "Description" },
            { amount: "Amount" },
            { status: "Status" },
          ]}
        />
      </div>
    </div>
  );
}

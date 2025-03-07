import { Button } from "@/app/components/ui/button";
import { formatBalance } from "@/app/utils";

type BalanceProps = {
  balance: number;
};

export function WalletBalance(props: BalanceProps) {
  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between w-full">
      <div className="flex flex-col">
        <h4 className="text-[var(--brand-text-light)]">
          Your consolidated balance
        </h4>
        <p className="text-3xl font-bold">{formatBalance(props.balance)}</p>
      </div>
      <div className="w-full md:w-auto flex gap-6 items-center self-start md:self-end">
        <Button className="w-full md:w-auto h-10 px-4 flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
          Add new wallet
        </Button>

        <div
          role="button"
          className="size-8 rounded-full border border-white grid place-items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-5"
          >
            <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

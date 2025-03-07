import { formatBalance } from "@/app/utils";

type WalletsProps = {
  balance: number;
};

export function Wallets(props: WalletsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 border border-[var(--brand-border)] p-4 rounded-md"
        >
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full border border-white grid place-items-center">
              <svg
                xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
              </svg>
            </div>
            <p className="text-lg font-bold">Wallet {i + 1}</p>
          </div>
          <p className="text-3xl font-bold">
            {formatBalance(props.balance / 3)}
          </p>
        </div>
      ))}
    </div>
  );
}

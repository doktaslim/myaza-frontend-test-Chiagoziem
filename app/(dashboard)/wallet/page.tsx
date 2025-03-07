import { Header } from "../_components/header";
import { Wallets } from "./_wallet-components/wallets";
import { RecentTransactions } from "./_wallet-components/recent-transactions";
import { WalletBalance } from "./_wallet-components/wallet-balance";

const balance = Math.floor(Math.random() * 10000000);

export default function WalletPage() {
  return (
    <section className="flex flex-col gap-8">
      <Header
        title="My wallet"
        description="Manage all your wallets from here"
      />

      <div className="p-4 rounded-md bg-[var(--brand-background-light)]">
        <div className="flex flex-col gap-10">
          <WalletBalance balance={balance} />

          <Wallets balance={balance} />
        </div>
      </div>

      {/* recent transactions */}
      <RecentTransactions />
    </section>
  );
}

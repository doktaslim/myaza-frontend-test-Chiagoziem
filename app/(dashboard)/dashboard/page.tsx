import { Header } from "../_components/header";
import { RecentTransactions } from "../wallet/_wallet-components/recent-transactions";
import { Activity } from "./_dashboard-components/activity";
import { Analytics } from "./_dashboard-components/analytics";
import { BalanceOverview } from "./_dashboard-components/balance-overview";
import { Cards } from "./_dashboard-components/cards";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <Header
        title="Welcome Back, Ali"
        description="Here’s what’s happening with your store today"
      />

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col flex-3/5 gap-8 w-full">
          <BalanceOverview />
          <Analytics />
          <RecentTransactions />
        </div>
        <div className="flex flex-col flex-2/5">
          <div className="flex flex-col md:flex-row lg:flex-col flex-3/5 gap-8 w-full">
            <Cards />
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
}

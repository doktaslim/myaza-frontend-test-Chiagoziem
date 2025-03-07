import { Button } from "@/app/components/ui/button";
import { PieChart } from "./pie-chart";
import { Filter } from "./filter";

export function Activity() {
  return (
    <div className="flex-1 rounded-lg p-8 pt-6 bg-[var(--brand-background-light)] flex flex-col gap-4">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-semibold">Activity</h3>
        <Filter type='month' />
      </div>

      {/* pie-chart */}
      <div className="mb-4">
        <PieChart />
      </div>

      {/*  */}
      <div className="flex items-center justify-center gap-4">
        <Button className="text-sm w-52 h-10 p-0! bg-transparent border border-[var(--brand-text)] text-[var(--brand-text)]">
          See all activity
        </Button>
      </div>
    </div>
  );
}

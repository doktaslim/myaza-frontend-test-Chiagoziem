import { ReactNode } from "react";
import { Aside } from "./_components/aside";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <main className="flex flex-col lg:flex-row items-center h-dvh">
      <Aside />
      <main className="flex-1 w-full lg:flex-8/12 p-4 lg:p-6 h-dvh overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[var(--brand-text)] [&::-webkit-scrollbar-thumb]:bg-[var(--background)]">
        {props.children}
      </main>
    </main>
  );
}

"use client";
import { Logo } from "@/app/components/logo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  {
    label: "Dashboard",
    icon: <i className="fa-solid fa-chart-line"></i>,
    link: "/dashboard",
  },
  {
    label: "Analytics",
    icon: <i className="fa-solid fa-chart-pie"></i>,
    link: "/analytics",
  },
  {
    label: "My Wallet",
    icon: <i className="fa-solid fa-wallet"></i>,
    link: "/wallet",
  },
  {
    label: "Accounts",
    icon: <i className="fa-solid fa-users"></i>,
    link: "/accounts",
  },
  {
    label: "Settings",
    icon: <i className="fa-solid fa-gear"></i>,
    link: "/settings",
  },
  {
    label: "Help Center",
    icon: <i className="fa-solid fa-circle-question"></i>,
    link: "/help",
  },
  {
    label: "Dark Theme",
    icon: <i className="fa-solid fa-moon"></i>,
    link: "/theme",
  },
] as const;

export function Aside() {
  const pathname = usePathname();
  return (
    <aside className="h-dvh hidden lg:flex flex-1/12 bg-[var(--brand-background-light)] px-4 flex-col justify-between py-6">
      <div className="flex flex-col gap-8">
        <Logo />
        <nav className="flex flex-col gap-2">
          {MENU_ITEMS.map((item) => {
            const isActiveRoute = pathname === item.link;
            return (
              <Link
                key={item.label}
                href={item.link}
                className={`flex items-center gap-3 rounded-lg p-3 transition-all duration-200 ${
                  isActiveRoute
                    ? "bg-[var(--brand-text)] text-[var(--brand-background)]"
                    : "hover:bg-[var(--brand-text)] hover:bg-opacity-10"
                }`}
              >
                <span className="w-5 text-center">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Image
          src={"/user.png"}
          priority
          alt="User Image"
          width={45}
          height={45}
          className="rounded-full h-[45px] w-[45px] object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Ali Riaz</h3>
          <p className="text-sm">Web Developer</p>
        </div>
      </div>
    </aside>
  );
}

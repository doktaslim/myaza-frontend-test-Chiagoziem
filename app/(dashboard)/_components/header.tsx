import { Input } from "@/app/components/ui/input";

type HeaderProps = {
  title: string;
  description: string;
};

export function Header(props: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4">
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold">{props.title}</h3>
        <p className="text-[var(--brand-text-light)]">{props.description}</p>
      </div>

      <Input
        className="bg-[var(--brand-background-light)] py-2.5 px-4 border-0 focus:border placeholder:text-[var(--brand-text-secondary)]"
        containerClassName="w-full md:w-3/8"
        placeholder="Search for anything"
        type="search"
      />
    </header>
  );
}

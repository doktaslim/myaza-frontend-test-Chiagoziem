type FilterProps = {
  type: "month" | "year";
};

export function Filter(props: FilterProps) {
  return (
    <div className="border border-[var(--brand-text-secondary)] rounded p-0.5 px-1 w-20 flex items-center justify-between gap-2">
      <p className="text-xs text-[var(--brand-text-secondary)]">
        {props.type === "month" ? "Month" : "Year"}
      </p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

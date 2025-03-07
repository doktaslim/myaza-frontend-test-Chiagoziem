import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  loading?: boolean;
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <button
      disabled={props.disabled || props.loading}
      {...props}
      className={`cursor-pointer bg-[var(--brand-text)] rounded text-[var(--brand-background-light)] font-semibold p-2 py-3 ${
        props.disabled || props.loading ? "opacity-50 cursor-not-allowed" : ""
      } ${props.className}`}
    >
      {props.children}
    </button>
  );
}

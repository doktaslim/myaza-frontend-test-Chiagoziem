import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  containerClassName?: string;
}

export function Input({ label, error, className = "", containerClassName = "", ...props }: InputProps) {
  const inputId = label?.toLowerCase().replace(/\s+/g, "-") || "";

  return (
    <div className={`flex flex-col gap-0.5 relative ${containerClassName}`}>
      {label ? (
        <label
          htmlFor={inputId}
          className="text-sm"
        >
          {label}
        </label>
      ) : null}
      <div className="relative w-full">
        <input
          id={inputId}
          readOnly={props.readOnly}
          className={`border rounded-md text-sm border-white focus:ring-0 focus:ring-[var(--brand-background-light)] outline-none p-2 py-3 w-full ${className} ${
            label?.toLowerCase()?.includes("password")
              ? "pr-16"
              : props.type === "search"
              ? "pr-8"
              : ""
          } ${error ? "border-red-500" : ""}`}
          {...props}
        />
        {label?.toLowerCase()?.includes("password") ? (
          <span className="absolute right-4 top-3 cursor-pointer text-[var(--brand-text)] font-semibold">
            Show
          </span>
        ) : null}
        {props.type === "search" && (
          <span className="absolute right-4 top-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

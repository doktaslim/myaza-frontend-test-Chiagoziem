import { formatBalance } from "@/app/utils";
import Image from "next/image";

export type CardIssuer = "mastercard" | "visa" | "verve";

type CardProps = {
  expiry: string;
  issuer: CardIssuer;
  balance: number;
  refNo: number;
};

export function Card(props: CardProps) {
  const formattedRefNo: string = props.refNo
    .toString()
    .padStart(12, "0")
    .match(/.{1,4}/g)!
    .join(" ");
  return (
    <div className="h-52 bg-gradient-to-br from-[var(--brand-purple)] to-[var(--brand-text)] rounded-lg w-full p-4 hover:translate-z-12 hover:-skew-y-3 hover:skew-x-3 transition duration-300">
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col">
            <p className="text-[var(--brand-text)] text-sm">Current balance</p>
            <h3 className="font-semibold text-xl text-[var(--brand-yellow)]">
              {formatBalance(props.balance)}
            </h3>
          </div>

          <Image
            alt="card issuer"
            src={`/${props.issuer}.png`}
            width={50}
            height={50}
            className="h-10 w-auto"
          />
        </div>

        <div className="flex justify-between items-start w-full">
          <p>{formattedRefNo}</p>
          <p>{props.expiry}</p>
        </div>
      </div>
    </div>
  );
}

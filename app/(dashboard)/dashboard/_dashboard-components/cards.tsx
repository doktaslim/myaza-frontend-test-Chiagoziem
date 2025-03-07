import { Button } from "@/app/components/ui/button"
import { formatBalance } from "@/app/utils"
import { Card, CardIssuer } from "./card";

const cardData = {
  balance: Math.floor(Math.random() * 10000),
  issuer: "mastercard" as CardIssuer,
  refNo: 323276328372351,
  expiry: "12/26",
};

export const Cards = () => {
  const cardBalance = Math.floor(Math.random() * 10000)
  return (
    <div className="flex-1 rounded-lg p-8 pt-6 bg-[var(--brand-background-light)] flex flex-col gap-4">
      <h3 className="text-2xl font-semibold">My Card</h3>

      <div>
        <p className="text-[var(--brand-purple-light)]">Card Balance</p>
        <h3 className="text-2xl font-semibold">{formatBalance(cardBalance)}</h3>
      </div>

      {/* card */}
      <div className="mb-4">
        <Card {...cardData} />
      </div>

      {/*  */}
      <div className="flex items-center justify-between gap-4">
        <Button className="text-sm flex-1 h-10 p-0! max-h-10">Manage Cards</Button>
        <Button className="text-sm flex-1 h-10 p-0! bg-transparent border border-[var(--brand-text)] text-[var(--brand-text)]">
          Transfer
        </Button>
      </div>
    </div>
  );
}

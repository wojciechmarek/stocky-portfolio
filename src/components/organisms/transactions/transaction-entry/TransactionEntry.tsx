import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { TransparentButton } from "../../../atoms";

export type TransactionType =
  | "buy"
  | "sell"
  | "cashflow"
  | "dividend"
  | "costs";

export type TransactionEntryProps = {
  type: TransactionType;
  amount: number;
  ticker: string;
  price: number;
  date?: string;
};

export const TransactionEntry = (props: TransactionEntryProps) => {
  const { type, amount, ticker, price } = props;
  let borderColor: string;
  let transactionType: string;

  switch (type) {
    case "buy":
      borderColor = "bg-green-600";
      transactionType = "Buy";
      break;

    case "sell":
      borderColor = "bg-red-600";
      transactionType = "Sell";
      break;

    case "cashflow":
      borderColor = "bg-blue-600";
      transactionType = "Cashflow";
      break;

    case "dividend":
      borderColor = "bg-yellow-600";
      transactionType = "Divident";
      break;

    case "costs":
      borderColor = "bg-gray-100";
      transactionType = "Extra cost";
      break;
  }
  return (
    <div className="h-20 bg-secondary-bg-color rounded-2xl flex flex-row items-center">
      <div className={`w-2 h-full rounded-l-2xl ${clsx(borderColor)}`} />
      <div className="flex-grow p-2 flex flex-col">
        <p>{transactionType}</p>
        <p>
          <span className="font-bold text-xl">{amount}</span>
          {" x "}
          <span className="font-bold text-xl">{ticker}</span>
          {" at "}

          <span className="font-bold text-xl">{price}</span>
        </p>
      </div>
      <TransparentButton className="w-8 h-full flex flex-col items-center justify-center">
        <ChevronDown />
      </TransparentButton>
    </div>
  );
};

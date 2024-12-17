import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { TransparentButton } from "../../../atoms";
import { Typography } from "@material-tailwind/react";

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
  date: Date;
};

export const TransactionEntry = (props: TransactionEntryProps) => {
  const { type, amount, ticker, price, date } = props;
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
      transactionType = "Dividend";
      break;

    case "costs":
      borderColor = "bg-gray-100";
      transactionType = "Extra cost";
      break;
  }
  return (
    <div className="h-16 bg-secondary-bg-color rounded-2xl flex flex-row items-center">
      <div className={`w-2 h-full rounded-l-2xl ${clsx(borderColor)}`} />
      <div className="flex-grow p-2 flex flex-col">
        <div className="flex flex-row">
          <Typography variant="small">
            <span className="text-xl ">{amount}</span>
          </Typography>
          <div className="w-[1px] bg-blue-gray-900 m-2" />
          <Typography variant="small">
            <span className="text-xl ">{ticker}</span>
          </Typography>
          <div className="w-[1px] bg-blue-gray-900 m-2" />
          <Typography variant="small">
            <span className="text-xl ">{price}</span> USD
          </Typography>
        </div>
        <div className="flex flex-row items-center text-blue-gray-700 gap-1 text-xs ">
          <span className="">{transactionType}</span>
          <span>•</span>
          <span>{new Date(date).toLocaleString()}</span>
        </div>
      </div>
      <TransparentButton className="w-8 h-full flex flex-col items-center justify-center">
        <ChevronDown />
      </TransparentButton>
    </div>
  );
};

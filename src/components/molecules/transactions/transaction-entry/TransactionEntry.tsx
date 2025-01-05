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
    <div className="h-20 md:h-12 bg-secondary-bg-color rounded-2xl flex flex-row items-center md:grid md:grid-cols-[_1fr,_2fr,_2fr,_2fr,_3fr]">
      <div className={`w-2 h-full rounded-l-2xl ${clsx(borderColor)}`}>
        <Typography variant="small" className="flex md:block ml-3">
          <span className="font-bold  h-full">{transactionType}</span>
        </Typography>
      </div>
      <div className="hidden md:block">
        <Typography variant="small">
          <span className="font-bold">
            {new Date(date).toLocaleDateString("pl-PL")}
          </span>
        </Typography>
      </div>
      <div className="hidden md:block">
        <Typography variant="small">
          <span className="font-bold">{amount}</span>
        </Typography>
      </div>
      <div className="hidden md:block">
        <Typography variant="small">
          <span className="font-bold">{ticker.split(":")[1]}</span>{" "}
          {ticker.split(":")[0]}
        </Typography>
      </div>
      <div className="hidden md:block">
        <Typography variant="small">
          <span className="font-bold">{(amount * price).toFixed(2)}</span> USD
        </Typography>
      </div>

      <div className="flex-grow p-2 flex flex-col justify-center h-full md:hidden">
        <div className="flex flex-row">
          <Typography variant="small">
            <span className="text-xl font-bold">{amount}</span> pcs
          </Typography>
          <div className="w-[1px] bg-blue-gray-900 m-2" />
          <Typography variant="small">
            <span className="text-xl font-bold">{ticker.split(":")[1]}</span>{" "}
            {ticker.split(":")[0]}
          </Typography>
          <div className="w-[1px] bg-blue-gray-900 m-2" />
          <Typography variant="small">
            <span className="text-xl font-bold">
              {(amount * price).toFixed(2)}
            </span>{" "}
            USD
          </Typography>
        </div>
        <div className="flex flex-row items-center text-blue-gray-700 gap-1 text-xs ">
          <span className="">{transactionType}</span>
          <span>•</span>
          <span>{new Date(date).toLocaleString("pl-PL")}</span>
          <span>•</span>
          <span>{price} USD per piece</span>
        </div>
      </div>
      <TransparentButton className="w-8 h-full flex flex-col items-center justify-center md:hidden">
        <ChevronDown />
      </TransparentButton>
    </div>
  );
};

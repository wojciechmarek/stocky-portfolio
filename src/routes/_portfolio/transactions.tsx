import {
  Button,
  SpeedDial,
  SpeedDialAction,
  SpeedDialContent,
  SpeedDialHandler,
  Typography,
} from "@material-tailwind/react";
import {
  FolderCog,
  FolderMinus,
  FolderPlus,
  FolderSync,
  PlusIcon,
} from "lucide-react";
import { useState } from "react";
import {
  NewTransactionDrawer,
  TransactionEntry,
} from "../../components/organisms/transactions";
import { variant } from "@material-tailwind/react/types/components/typography";
import { createFileRoute } from "@tanstack/react-router";

type ProductSearch = {
  newTransaction: boolean;
};

export const Route = createFileRoute("/transactions" as never)({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    // validate and parse the search params into a typed state
    return {
      newTransaction: Boolean(search?.newTransaction ?? false),
    };
  },
});

function RouteComponent() {
  const { newTransaction } = Route.useSearch();

  const [isNewTransactionDrawerOpened, setIsNewTransactionDrawerOpened] =
    useState(newTransaction as boolean);

  const labelProps = {
    variant: "small" as variant,
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal w-32 text-right pr-4 ",
  };

  const handleOnClick = () => {
    setIsNewTransactionDrawerOpened(true);
  };

  const transactions = [
    {
      type: "buy" as never,
      amount: 14,
      ticker: "NYSE:GOOG",
      price: 105.34,
    },
    {
      type: "sell" as never,
      amount: 15,
      ticker: "FRA:USDA",
      price: 105.34,
    },
    {
      type: "cashflow" as never,
      amount: 3432,
      ticker: "WSE:BDX",
      price: 105.34,
    },
    {
      type: "costs" as never,
      amount: 3432,
      ticker: "WSE:BDX",
      price: 105.34,
    },
    {
      type: "dividend" as never,
      amount: 3432,
      ticker: "WSE:BDX",
      price: 105.34,
    },
    {
      type: "buy" as never,
      amount: 334,
      ticker: "NYSE:GOOG",
      price: 105.34,
    },
  ];

  return (
    <div className="flex flex-col h-full mx-3">
      <div className="flex flex-col gap-2">
        {transactions.map((transaction) => (
          <TransactionEntry {...transaction} />
        ))}
      </div>
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <Button className="bg-secondary-bg-color rounded-full h-16 w-16 grid absolute right-6 bottom-6 p-0">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45 place-self-center" />
            </Button>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction
              className="bg-secondary-bg-color border-0 relative"
              onClick={handleOnClick}
            >
              <FolderPlus className="h-5 w-5" />
              <Typography {...labelProps}>Buy asset</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              className="bg-secondary-bg-color border-0 relative"
              onClick={handleOnClick}
            >
              <FolderMinus className="h-5 w-5" />
              <Typography {...labelProps}>Sell asset</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              className="bg-secondary-bg-color border-0 relative"
              onClick={handleOnClick}
            >
              <FolderSync className="h-5 w-5" />
              <Typography {...labelProps}>Add cash flow</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              className="bg-secondary-bg-color border-0 relative"
              onClick={handleOnClick}
            >
              <FolderCog className="h-5 w-5" />
              <Typography {...labelProps}>Add extra costs</Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
      <NewTransactionDrawer
        isOpen={isNewTransactionDrawerOpened}
        onCloseClick={() => setIsNewTransactionDrawerOpened(false)}
      />
    </div>
  );
}

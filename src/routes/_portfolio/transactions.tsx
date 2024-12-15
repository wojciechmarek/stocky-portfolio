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
import { NewTransactionDrawer } from "../../components/organisms/transactions";
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
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal w-20",
  };

  const handleOnClick = () => {
    setIsNewTransactionDrawerOpened(true);
  };

  return (
    <div className="flex flex-col h-full mx-3">
      Hello from Transactions!
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
              <Typography {...labelProps}>Bought asset</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              className="bg-secondary-bg-color border-0 relative"
              onClick={handleOnClick}
            >
              <FolderMinus className="h-5 w-5" />
              <Typography {...labelProps}>Sold asset</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              className="bg-secondary-bg-color border-0 relative"
              onClick={handleOnClick}
            >
              <FolderSync className="h-5 w-5" />
              <Typography {...labelProps}>Cash flow</Typography>
            </SpeedDialAction>
            <SpeedDialAction
              className="bg-secondary-bg-color border-0 relative"
              onClick={handleOnClick}
            >
              <FolderCog className="h-5 w-5" />
              <Typography {...labelProps}>Extra costs</Typography>
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

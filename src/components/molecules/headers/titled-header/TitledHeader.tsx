import { Link, useNavigate } from "@tanstack/react-router";
import { AccountButtonType, HeaderAccountButtons } from "../../../atoms";
import { Button } from "@material-tailwind/react";
import { ChevronLeft } from "lucide-react";

export type TitledHeaderProps = {
  title: string;
};

export const TitledHeader = (props: TitledHeaderProps) => {
  const { title } = props;

  const navigate = useNavigate();

  const handleOnAccountButtonClick = async (type: AccountButtonType) => {
    switch (type) {
      case "search":
        await navigate({ to: "/search" });
        break;

      case "notification":
        await navigate({ to: "/notifications" });
        break;

      case "profile":
        await navigate({ to: "/profile" });
        break;
    }
  };

  return (
    <div className="flex flex-row mx-3 mt-6 mb-3 items-center justify-between">
      <div className="flex flex-row items-center">
        <Link to={"/overview"}>
          <Button className="bg-transparent p-2 flex flex-row items-center">
            <ChevronLeft />
          </Button>
        </Link>
        <h1 className="font-bold text-3xl ml-3">{title}</h1>
      </div>
      <HeaderAccountButtons onButtonClick={handleOnAccountButtonClick} />
    </div>
  );
};

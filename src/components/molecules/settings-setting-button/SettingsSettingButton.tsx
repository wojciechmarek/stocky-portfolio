import { Button } from "@material-tailwind/react";
import { ReactNode } from "react";

export type SettingsSettingButtonProps = {
  icon: ReactNode;
  color: string;
  name: string;
  description: string;
  handleInSettingButtonClick?: () => void;
};

export const SettingsSettingButton = (props: SettingsSettingButtonProps) => {
  const { icon, color, name, description, handleInSettingButtonClick } = props;

  return (
    <Button
      onClick={handleInSettingButtonClick}
      className="bg-secondary-bg-color flex flex-row rounded-2xl px-4 py-1 normal-case items-center"
      key={name}
    >
      <div className="">
        <div
          className={`w-10 h-10 ${color} rounded-full flex justify-center items-center`}
        >
          {icon}
        </div>
      </div>
      <div className="flex flex-col py-2 text-left ml-4">
        <p className="text-lg">{name}</p>
        <p className="text-xs text-dimmed-font-color">{description}</p>
      </div>
    </Button>
  );
};

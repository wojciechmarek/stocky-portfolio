import { ReactNode } from "react";
import { StandardButton } from "../../../atoms";
import { Typography } from "@material-tailwind/react";

export type ButtonType = {
  id: string;
  name: string;
  description: string;
  icon: ReactNode;
  color: string;
};

export type SettingsButtonsSectionProps = {
  title: string;
  buttons: ButtonType[];
  handleInSettingButtonClick?: (type: string) => void;
};

export const SettingsButtonsSection = (props: SettingsButtonsSectionProps) => {
  const { title, buttons, handleInSettingButtonClick } = props;

  return (
    <div className="flex flex-col gap-2 mx-3">
      <Typography variant="paragraph">{title}</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {buttons.map((button) => (
          <StandardButton
            onClick={() => handleInSettingButtonClick?.(button.id)}
            className="flex flex-row rounded-2xl px-4 py-1  items-center"
            key={button.name}
          >
            <div
              className={`w-10 h-10 ${button.color} rounded-full flex justify-center items-center`}
            >
              {button.icon}
            </div>
            <div className="flex flex-col py-2 text-left ml-4">
              <p className="text-lg">{button.name}</p>
              <p className="text-xs text-dimmed-font-color">
                {button.description}
              </p>
            </div>
          </StandardButton>
        ))}
      </div>
    </div>
  );
};

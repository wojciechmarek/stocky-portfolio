import { CreditCard, Languages, Moon } from "lucide-react";
import { StandardButton } from "../../../atoms";
import { Typography } from "@material-tailwind/react";

export type SettingsButtonsSectionProps = {
  title: string;
  handleInSettingButtonClick?: () => void;
};

const settingButtons = [
  {
    icon: <Moon />,
    color: "bg-[#020202]",
    name: "Appearance",
    description: "Change the app theme and language",
  },
  {
    icon: <CreditCard />,
    color: "bg-green-500",
    name: "Subscription",
    description: "Change the app theme",
  },
  {
    icon: <Languages />,
    color: "bg-blue-500",
    name: "Language",
    description: "Change the app theme",
  },
];

export const SettingsButtonsSection = (props: SettingsButtonsSectionProps) => {
  const { title, handleInSettingButtonClick } = props;

  return (
    <div className="flex flex-col gap-2">
      <Typography variant="paragraph">{title}</Typography>
      {settingButtons.map((setting) => (
        <StandardButton
          onClick={handleInSettingButtonClick}
          className="flex flex-row rounded-2xl px-4 py-1  items-center"
          key={setting.name}
        >
          <div
            className={`w-10 h-10 ${setting.color} rounded-full flex justify-center items-center`}
          >
            {setting.icon}
          </div>
          <div className="flex flex-col py-2 text-left ml-4">
            <p className="text-lg">{setting.name}</p>
            <p className="text-xs text-dimmed-font-color">
              {setting.description}
            </p>
          </div>
        </StandardButton>
      ))}
    </div>
  );
};

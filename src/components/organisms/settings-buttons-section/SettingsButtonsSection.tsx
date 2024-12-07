import {
  SettingsSettingButton,
  SettingsSettingButtonProps,
} from "../../molecules";

export type SettingsButtonsSectionProps = {
  name: string;
  buttons: SettingsSettingButtonProps[];
  handleInSettingButtonClick: (button: SettingsSettingButtonProps) => void;
};

export const SettingsButtonsSection = (props: SettingsButtonsSectionProps) => {
  const { name, buttons, handleInSettingButtonClick } = props;

  return (
    <>
      <p className="ml-1 text-dimmed-font-color">{name}</p>
      {buttons.map((button) => (
        <SettingsSettingButton
          key={button.name}
          {...button}
          handleInSettingButtonClick={() => handleInSettingButtonClick(button)}
        />
      ))}
    </>
  );
};

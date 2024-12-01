import { Chip } from "@material-tailwind/react";

export const SettingsUserDetails = () => {
  return (
    <div className="flex flex-row justify-center gap-2 items-center mx-3 mt-6">
      <div className="rounded-full h-20 w-20">
        <img
          src="https://api.dicebear.com/9.x/thumbs/svg?scale=75&seed=Wojtek"
          alt="profile"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col items-start">
        <h5 className="text-2xl font-bold ">stevedoe@outlook.com</h5>
        <div className="flex flex-row gap-1">
          <Chip color="red" value="e-mail unverified" size="sm" />
          <Chip color="blue" value="basic account" size="sm" />
        </div>
      </div>
    </div>
  );
};

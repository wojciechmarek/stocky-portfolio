import {
  Button,
  Drawer,
  Input,
  Select,
  Option,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { DrawerTitle, TransparentButton } from "../../../atoms";
import { X } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

type NewTransactionDrawerProps = {
  isOpen: boolean;
  onCloseClick: () => void;
};

export const NewTransactionDrawer = (props: NewTransactionDrawerProps) => {
  const { isOpen, onCloseClick } = props;
  const [date, setDate] = useState<Date>();
  return (
    <Drawer
      placement="bottom"
      size={550}
      open={isOpen}
      onClose={onCloseClick}
      className="p-4 bg-secondary-bg-color rounded-tl-3xl rounded-tr-3xl flex flex-col"
    >
      <div className="mb-4 flex items-center justify-between">
        <DrawerTitle value="New transaction" />
        <TransparentButton
          className="bg-transparent p-2"
          onClick={onCloseClick}
        >
          <X />
        </TransparentButton>
      </div>
      <form className="flex flex-col gap-y-3">
        <Select label="Type">
          <Option>Asset bought</Option>
          <Option>Asset old</Option>
          <Option>Cashflow</Option>
          <Option>Extra costs</Option>
        </Select>
        <Popover placement="bottom">
          <PopoverHandler>
            <Input
              label="Select a Date"
              onChange={() => null}
              value={date ? format(date, "PPP") : ""}
            />
          </PopoverHandler>
          <PopoverContent>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              showOutsideDays
              className="border-0"
              classNames={{
                caption: "flex justify-center py-2 mb-4 relative items-center",
                caption_label: "text-sm font-medium text-gray-900",
                nav: "flex items-center",
                nav_button:
                  "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                nav_button_previous: "absolute left-1.5",
                nav_button_next: "absolute right-1.5",
                table: "w-full border-collapse",
                head_row: "flex font-medium text-gray-900",
                head_cell: "m-0.5 w-9 font-normal text-sm",
                row: "flex w-full mt-2",
                cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: "h-9 w-9 p-0 font-normal",
                day_range_end: "day-range-end",
                day_selected:
                  "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                day_today: "rounded-md bg-gray-200 text-gray-900",
                day_outside:
                  "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                day_disabled: "text-gray-500 opacity-50",
                day_hidden: "invisible",
              }}
            />
          </PopoverContent>
        </Popover>
        <div className="flex flex-row gap-x-3">
          <Select label="Account">
            <Option>Bossa IKE</Option>
            <Option>Bossa IKZE</Option>
            <Option>Crypto</Option>
            <Option>XTB</Option>
          </Select>
          <Select label="Type">
            <Option>Asset bought</Option>
            <Option>Asset old</Option>
            <Option>Cashflow</Option>
            <Option>Extra costs</Option>
          </Select>
        </div>
        <Input label="Password" color="white" />

        <Button type="submit" className="mt-3 normal-case bg-primary-bg-color">
          Add
        </Button>
      </form>
    </Drawer>
  );
};

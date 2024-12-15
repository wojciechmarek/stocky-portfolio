import {
  Button,
  Drawer,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";
import { DrawerTitle, TransparentButton } from "../../../atoms";
import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";

type NewTransactionDrawerProps = {
  isOpen: boolean;
  onCloseClick: () => void;
};

export const NewTransactionDrawer = (props: NewTransactionDrawerProps) => {
  const { isOpen, onCloseClick } = props;
  return (
    <Drawer
      placement="bottom"
      size={550}
      open={isOpen}
      onClose={onCloseClick}
      className="p-4 bg-secondary-bg-color rounded-tl-3xl rounded-tr-3xl flex flex-col"
    >
      <div className="flex items-center justify-between">
        <DrawerTitle value="New transaction" />
        <TransparentButton
          className="bg-transparent p-2"
          onClick={onCloseClick}
        >
          <X />
        </TransparentButton>
      </div>
      <form className="flex flex-col gap-y-3 mt-3">
        <div>
          <Typography className="">General</Typography>
          <div className="flex flex-row gap-x-3 mt-1">
            <Select
              size="lg"
              label="Transaction type"
              className="text-primary-font-color"
            >
              <Option>Asset bought</Option>
              <Option>Asset sold</Option>
              <Option>Cashflow update</Option>
              <Option>Extra costs</Option>
            </Select>
            <Input size="lg" type="date" label="Date" color="gray" />
          </div>
        </div>
        <div>
          <Typography className="">Account</Typography>
          <div className="flex flex-row gap-x-3 mt-1">
            <div className="w-full">
              <Select
                size="lg"
                label="Account"
                className="text-primary-font-color"
              >
                <Option>Bossa IKE</Option>
                <Option>Bossa IKZE</Option>
                <Option>Crypto</Option>
                <Option>XTB</Option>
              </Select>
              <Link
                to="/register"
                className="text-xs ml-1 underline text-blue-500"
              >
                Create a new account
              </Link>
            </div>
            <div className="w-full">
              <Select
                size="lg"
                label="Asset type"
                className="text-primary-font-color"
              >
                <Option>National stocks</Option>
                <Option>Foreign stocks</Option>
                <Option>National treasuries</Option>
                <Option>Foreign treasuries</Option>
                <Option>Local company treasuries</Option>
                <Option>Foreign company treasuries</Option>
                <Option>Metals</Option>
                <Option>Crypto</Option>
                <Option>Others</Option>
              </Select>
              <Link
                to="/register"
                className="text-xs ml-1 underline text-blue-500"
              >
                Add a new assets type
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Typography className="">Asset</Typography>
          <div className="flex flex-row gap-x-3 mt-1">
            <div className="w-full">
              <Input size="lg" type="text" label="Ticker" color="gray" />
            </div>
            <div className="w-full">
              <Select
                size="lg"
                label="Existing ticker"
                className="text-primary-font-color"
              >
                <Option>NYSE:ARE</Option>
                <Option>NASDAQ:GOOG</Option>
                <Option>NASDAQ:AMZN</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-3">
          <div className="w-full">
            <Input size="lg" type="text" label="Amount" color="gray" />
          </div>
          <div className="w-full">
            <Input size="lg" type="text" label="Price" color="gray" />
          </div>
        </div>
        <div className="flex flex-row gap-x-3">
          <div className="w-full">
            <Input size="lg" type="text" label="Extra provision" color="gray" />
          </div>
          <div className="w-full">
            <Select
              size="lg"
              label="Currency"
              className="text-primary-font-color"
            >
              <Option>USD</Option>
              <Option>EUR</Option>
              <Option>GBP</Option>
              <Option>PLN</Option>
            </Select>
          </div>
        </div>

        <Button type="submit" className="mt-3 normal-case bg-primary-bg-color">
          Add
        </Button>
      </form>
    </Drawer>
  );
};

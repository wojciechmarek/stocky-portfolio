import { ChartCandlestick, House, TableProperties, Wallet } from "lucide-react";
import stockyLogo from "./assets/stocky.png";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 mt-10 flex flex-row items-center justify-center">
        <img src={stockyLogo} className="h-16" alt="Vite logo" />
        <h1 className="text-3xl font-bold ml-3">Stocky</h1>
      </div>

      <div className="bg-[#1b252d] h-20 flex items-center justify-evenly p-2">
        <Button className="bg-[#253642] rounded-full flex items-center normal-case">
          <div className="h-6 w-6 flex">
            <House />
          </div>
          <p className="ml-3">Home</p>
        </Button>
        <Button className="bg-transparent rounded-full">
          <div className="h-6 w-6">
            <TableProperties />
          </div>
        </Button>
        <Button className="bg-transparent rounded-full">
          <div className="h-6 w-6">
            <ChartCandlestick />
          </div>
        </Button>
        <Button className="bg-transparent rounded-full">
          <div className="h-6 w-6">
            <Wallet />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default App;

import stockyLogo from './assets/stocky.png'
import { Button } from "@material-tailwind/react";


function App() {
  return (
    <div className='flex flex-col'>

        <div className='flex-grow'>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
          <img src={stockyLogo} className="logo" alt="Vite logo" />
        </div>

        <div className='bg-[#1b252d] h-10'>
          <p>asdasd</p>
          <Button>asdasdasd</Button>
        </div>
    </div>
  )
}

export default App

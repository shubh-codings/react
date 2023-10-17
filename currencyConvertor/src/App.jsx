import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from "./hooks/useCurrencyInfo"

import './App.css'

function App() {

  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="vw-100 vh-100 d-flex flex-wrap justify-content-center align-items-center"
    >
        <div className="vw-50 d-flex justify-content-center align-items-center">
            <div className="w-100  mx-auto border border-info rounded p-5">
                <form
                className='d-flex flex-column justify-content-center align-items-center'
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-100 m-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="">
                        <button
                            type="button"
                            className=""
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-100 mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-100 bg-info text-light px-4 py-3 rounded">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App

import { useId } from 'react'

// import React from 'react'

export default function InputBox({
    label,
    amount=0,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""}
) {
    const amountId = useId()
  return (
    <div className={`d-flex p-3 rounded bg-light fs-4 ${className} `}>
    <div className="w-50">
        <label className="text-dark mb-2 inline-block" htmlFor={amountId}>
            {label}
        </label>
        <input
            id={amountId}
            className="outline-none w-100 bg-transparent py-2 text-dark"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value))}}
        />
    </div>
    <div className="w-50 d-flex flex-column  justify-content-center align-items-center text-end mx-2 ">
        <p className="">Currency Type</p>
        <select
            className="rounded bg-grey p-1 outline-none pointer mx-2"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}

        >
            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}



        </select>
    </div>
</div>
  )
}



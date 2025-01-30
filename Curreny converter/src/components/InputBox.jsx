import React from "react";

function InputBox({
  label,
  amount = "",
  amountInputId,
  amountDisable = false,
  currencyOptions = [],
  selectCurrency = "usd",
  currencyDisable = false,
  onAmountChange,
  onCurrencyChange,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm d-flex ${className}`}>
      <div className="w-50">
        <label htmlFor={amountInputId} className="text-secondary mb-2 d-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="form-control border-0 bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            onAmountChange && onAmountChange(value === "" ? "" : Number(value));
          }}
        />
      </div>
      <div className="w-50 d-flex flex-wrap justify-content-end text-end">
        <p className="text-secondary mb-2 w-100">Currency Type</p>
        <select
          className="form-select rounded px-1 py-1 bg-light cursor-pointer border-0"
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
  );
}

export default InputBox;

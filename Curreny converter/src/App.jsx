import { useState } from "react";
import InputBox from "./components/InputBox";
import Usecurrencyhook from "./hooks/Usecurrencyhook";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertamount, setconvertamount] = useState(0);
  const currenyinfo = Usecurrencyhook(from);
  const currencyOptions = Object.keys(currenyinfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertamount);
    setconvertamount(amount);
  };
  const convert = () => {
    setconvertamount(amount * currenyinfo[to]);
  };
  return (
    <>
      <div className="w-100">
        <div
          className="w-100 mx-auto border border-secondary rounded-lg p-5 backdrop-blur-sm bg-white bg-opacity-30"
          style={{ maxWidth: "400px" }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-100 mb-1">
              <InputBox
                label="From"
                amount={amount}
                currenyoption={currencyOptions}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency="{from}"
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="position-relative w-100" style={{ height: "2px" }}>
              <button
                type="button"
                className="position-absolute start-50 translate-middle border-2 border-white rounded bg-primary text-white px-2 py-1"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-100 mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertamount}
                currenyoption={currencyOptions}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency="{to}"
              />
            </div>
            <button
              type="submit"
              className="w-100 btn btn-primary py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

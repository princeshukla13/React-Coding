import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [Lenght, setLenght] = useState(8);
  const [NumberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [Password, SetPassword] = useState("");
  // function to genenratepasssword//

  const generatePassword = useCallback(() => {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let sym = "!@#$%^&*()_+";
    let pass = "";
    if (NumberAllowed) char += num;
    if (charAllowed) char += sym;
    for (let i = 1; i < Lenght; i++) {
      let x = Math.floor(Math.random() * char.length);
      pass += char.charAt(x);
    }
    SetPassword(pass);
  }, [Lenght, NumberAllowed, charAllowed, SetPassword]);

  useEffect(() => {
    generatePassword();
  }, [Lenght, NumberAllowed, charAllowed, generatePassword]);

  return (
    <>
      <div className="container">
        <h1 className=" text-center text-success">Password generator</h1>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Password"
            value={Password}
          />
        </div>
        <label for="customRange2" class="form-label">
          Password Lenght : {Lenght}
        </label>
        <input
          type="range"
          class="form-range"
          min={8}
          max={100}
          value={Lenght}
          onChange={(e) => setLenght(e.target.value)}
        ></input>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            checked={NumberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Numbers
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Special Characters
          </label>
          <button
            type="button"
            class="btn btn-primary"
            onClick={generatePassword}
          >
            Copy Text
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

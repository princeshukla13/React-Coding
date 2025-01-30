import React from "react";
import { useEffect, useState } from "react";

function Usecurrencyhook(currency) {
  const [data, setdata] = useState("{}");
  useEffect(() => {
    fetch(
      "`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`"
    )
      .then((res) => res.json())
      .then((data) => setdata(data));
    console.log(data);
  }, [currency]);
  return data;
}

export default Usecurrencyhook;

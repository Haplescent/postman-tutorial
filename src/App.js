import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [deliveryCity, setDeliveryCity] = useState("");
  const [deliveryState, setDeliveryState] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState("");

  useEffect(() => {
    let city, state, price;
  }, [deliveryCity, deliveryState, deliveryPrice]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billvalue, setBillvalue] = useState("");

  const [percent, setPercent] = useState(0);

  function handleReset() {
    setBillvalue("");
    setPercent(0);
  }

  return (
    <div>
      <BillInput billvalue={billvalue} setBillvalue={setBillvalue} />
      <SelectPercentage percent={percent} setPercent={setPercent} />
      <SelectPercentage percent={percent} setPercent={setPercent} />
      <Output />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ billvalue, setBillvalue }) {
  return (
    <div>
      How much was the bill?
      <input
        type="value"
        value={billvalue}
        onChange={(e) => setBillvalue(e.target.value)}
      />
    </div>
  );
}

function SelectPercentage() {}

function Output() {}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

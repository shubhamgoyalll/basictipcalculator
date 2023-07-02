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

  const [percent1, setPercent1] = useState(0);

  const [percent2, setPercent2] = useState(0);

  const tip = billvalue * ((percent1 + percent2) / 2 / 100);

  function handleReset() {
    setBillvalue("");
    setPercent1(0);
    setPercent2(0);
  }

  return (
    <div>
      <BillInput billvalue={billvalue} setBillvalue={setBillvalue} />
      <SelectPercentage percent={percent1} onSelect={setPercent1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percent={percent2} onSelect={setPercent2}>
        How did your friend like the service?
      </SelectPercentage>

      {billvalue > 0 && (
        <>
          <Output billvalue={billvalue} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
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
        placeholder="Enter bill value"
        onChange={(e) => setBillvalue(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percent, onSelect }) {
  return (
    <div>
      {children}
      <select onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ billvalue, tip }) {
  return (
    <div>
      <strong>
        You have to pay ${billvalue + tip} (${billvalue} + ${tip} )
      </strong>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

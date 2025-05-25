// src/components/Calculator.jsx
import React, { useState } from "react";

export default function Calculator() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(null);

  const changeValue = (setter, data1, data2) => setter(data1 + data2);

  const calculate = (op) => {
    let res;
    switch (op) {
      case "+":
        res = value1 + value2;
        break;
      case "-":
        res = value1 - value2;
        break;
      case "*":
        res = value1 * value2;
        break;
      case "%":
        res = value1 % value2;
        break;
      case "/":
        res = value2 !== 0 ? value1 / value2 : "Error: Div by 0";
        break;
      default:
        res = null;
    }
    setResult(res);
  };

  return (
    <div className="max-w-md  mx-auto p-6 bg-white rounded-lg shadow">
      {/* Value 1 */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Value 1</label>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <div className="flex space-x-2 mt-2">
          <button
            onClick={() => changeValue(setValue1, value1, 1)}
            className="flex-1 py-1 bg-green-500 text-white rounded"
          >
            +1
          </button>
          <button
            onClick={() => changeValue(setValue1, value1, -1)}
            className="flex-1 py-1 bg-red-500 text-white rounded"
          >
            -1
          </button>
        </div>
      </div>

      {/* Value 2 */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Value 2</label>
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
        <div className="flex space-x-2 mt-2">
          <button
            onClick={() => changeValue(setValue2, value2, 1)}
            className="flex-1 py-1 bg-green-500 text-white rounded"
          >
            +1
          </button>
          <button
            onClick={() => changeValue(setValue2, value2, -1)}
            className="flex-1 py-1 bg-red-500 text-white rounded"
          >
            -1
          </button>
        </div>
      </div>

      {/* Operation Buttons */}
      <div className="mb-6">
        <div className="flex space-x-2">
          {["+", "-", "*", "%", "/"].map((op) => (
            <button
              key={op}
              onClick={() => calculate(op)}
              className="flex-1 py-2 bg-blue-600 text-white rounded"
            >
              {op}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="text-center text-xl font-semibold">
        Result: {result !== null ? result : "--"}
      </div>
    </div>
  );
}

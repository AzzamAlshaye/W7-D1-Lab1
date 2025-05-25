import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Calculator from "./pages/Calc";
function App() {
  return (
    <>
      <div className="className= min-h-screen bg-gray-100 flex items-center justify-center">
        <main className="flex-grow">
          <Calculator />
        </main>
      </div>
    </>
  );
}

export default App;

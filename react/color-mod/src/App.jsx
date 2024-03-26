import { useState } from "react";
import "./App.css";
import Input from "./Input";
import Square from "./Square";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarktext, setIsDarktext] = useState(true);


  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue} isDarktext={isDarktext} />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        setIsDarktext={setIsDarktext}
      />
    </div>
  );
}

export default App;

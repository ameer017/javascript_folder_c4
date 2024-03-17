import logo from "./logo.svg";
import "./App.css";

function App() {
  // const name = "Zainabuu";
  // let's declare a function to handle random name change

  const handleNameChange = () => {
    const names = ['Hayzed', 'Nafisah', 'Oloye'];
    const int = Math.floor(Math.random() * 3);
    return names[int]
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Hello {name}! */}
          Hello {handleNameChange()}
        </p>
        

        {/* {"Zainab"} */}
        {/* {1} */}
        {/* <p>[1, 2, 3]</p> */}
        {/* <p>{2 === 4}</p> will not render a bool */}
        {/* <p> {name} </p> */}
      </header>
    </div>
  );
}

export default App;

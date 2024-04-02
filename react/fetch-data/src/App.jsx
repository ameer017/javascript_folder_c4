import { useState, useEffect } from "react";
import Table from "./Table";
import Form from "./Form";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"; //reqType/resourceType is gonna serve as our resource endpoint --> /posts /users /comments
  const [reqType, setReqType] = useState("users"); //default reqType is /users
  const [items, setItems] = useState([]); //empty array by default, response.json() will be populated into it

  // useEffect normally render once and that is whenever the app loads, but we need the useEffect logic to depend on the request type so it'll take effect as we load new pages.

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`); //https://jsonplaceholder.typicode.com/posts || https://jsonplaceholder.typicode.com/users || https://jsonplaceholder.typicode.com/comments
        const data = await response.json(); //convert to json format.
        // console.log(data)
        setItems(data); //empty array filled
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems(); //invoke function
  }, [reqType]); // /posts /users /comments

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;

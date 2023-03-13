import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [result, setResult]=useState(null)

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  //this is JS post method learn't in superheroes project
  // const handleSubmit = async () => {
  //   console.log("data at submit is", data);
  //   const dataJSON=JSON.stringify(data)
  //   const response = await fetch("/multiply", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: dataJSON,
  //   })
  //   const responseJSON = await response.json()
  //   setResult(responseJSON)
  // };

  
  const handleSubmit_2 = async () => {
    console.log("data at submit is", data);
    // const dataJSON=JSON.stringify(data)
    const response = await axios.post("/multiply", data)
    const responseData = await response.data
    console.log('response in axios method i s', responseData)
    setResult(responseData)
  };

  


  return (
    <div className="App">
      <form>
        <div>
          <label>start</label>
          <input name="start" onChange={handleData} />
        </div>
        <div>
          <label>end</label>
          <input name="end" onChange={handleData} />
        </div>
      </form>
      <button onClick={handleSubmit_2}>Submit</button>
      <span>result is: {result && result.result}</span>
    </div>
  );
}

export default App;

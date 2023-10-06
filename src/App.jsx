import { useState } from "react";
import '../style.css'
import SetOutput from "../components/SetOutput";

function App() {
  const [set, setSet] = useState("");
  const [powerSet, setPowerSet] = useState([]);

  function inputHandler() {
    const setArray = set.split(",");
    let newPowerSet = [];

    for (let i = 0; i < 2 ** setArray.length; i++) {
      let bin = i.toString(2).padStart(setArray.length, "0").split("");
      let tempArray = [];
      bin.forEach((char, index) => {
        if (char == "1") {
          tempArray.push(setArray[index]);
        }
      });
      newPowerSet.push(tempArray);
    }
    setPowerSet(newPowerSet);
  }

  console.log(powerSet);

  return (
    <div className="container">
      <input 
      className="box"
        placeholder="enter your set"
        onChange={(e) => setSet(e.target.value)}
      ></input>
      <button className="box" onClick={inputHandler} >Calculate the power set</button>
     <div style={{display:'flex',flexWrap:'wrap',gap:'5px'}}>
      {powerSet.map((set, index) => (
        <SetOutput key={index} number={index + 1} set={set} />
      ))}
      </div>
    </div>
  );
}

export default App;

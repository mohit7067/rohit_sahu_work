import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Enquire from "./Enquire";
import Callus from "./Callus";
import Findus from "./Findus";

function App() {
  const [component, setComponent] = useState("enquire");

  return (
    <div className="App">
      <h1>Logo</h1>
      <div className="main_container">
        <div className="buttons_container">
          <button onClick={() => setComponent("callus")}>CALL US</button>
          <button onClick={() => setComponent("enquire")}>
            ENQUIRE ONLINE
          </button>
          <button onClick={() => setComponent("findus")}>FIND US</button>
        </div>
        <div className="content_container">
          {component === "callus" ? (
            <Callus  setComponent={setComponent}/>
          ) : component === "findus" ? (
            <Findus />
          ) : (
            <Enquire />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

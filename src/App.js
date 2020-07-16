import React from "react";
// import MapFun from "./components/mapFun";
import Child from "./components/Child";

import "./App.css";

function App() {
 const cityArray1 = ["karachi", "islamabad", "Lahore", "Peshawar"];
 const cityArray2 = ["Baloli", "swat", "btk", "sami"];

  return (
    <div className="">
      {/* <MapFun name="Najib" /> */}
      <Child cityArray={cityArray1} />
      <Child cityArray={cityArray2} />
      
    </div>
  );
}

export default App;

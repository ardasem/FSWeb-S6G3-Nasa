import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ShowData from "./ShowData";


function App() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5')
    .then(res=>{console.log(res.data);
    setData(res.data)})
  },[])

  return (
    <div className="App">
     <ShowData data={data} />
    </div>
  );
}

export default App;

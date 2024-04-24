import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/data")
      .then((res) => {
        console.log("data", res.data);
        setDatas(res.data);
      })
      .catch((error) => {
        console.log("error :", error);
      });
      
  }, []);
  return (
    <>
      <h1>Contact Details</h1>
      {datas.map((item, index) => {
        return (
          <div key={index}>
            <p>Name:{item.name}</p>
            <p>Email:{item.email}</p>
            <button
              onClick={() => {
                alert("Delete this contact?");
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;

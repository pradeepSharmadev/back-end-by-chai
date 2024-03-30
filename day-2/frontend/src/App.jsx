import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"


function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    // axios.get("http://localhost:3000/api/jokes")
    axios.get("/api/jokes")
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <>
    {/*   here pradeep kumar is updated but not diplayed in diployed web page(backend) */}
    <h1>Hello Pradeep Kumar</h1>  here pradeep us updated but not diplayed in diployed web page(backend)
  <div>jokes : {jokes.length}</div>
  {
    jokes.map((joke,index)=>{
      return (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.joke}</p>
        </div>
      );
    })
  }
  
  </>
  )
}

export default App

import "./App.css"
import { useState } from "react";
import useFetch from "./useFetch";

function App() {
    const {data: joke, loading, error,refetch }=useFetch("https://v2.jokeapi.dev/joke/Any")
   if (loading)return <h1>loading...</h1>

   if (error)console.log(error)
   
    return(
    <div className="App">
        <h1>{joke?.setup} : {joke?.delivery}</h1>
        <button onClick={refetch}>Refresh</button>
    </div>
    
   );  
   }

export default App;
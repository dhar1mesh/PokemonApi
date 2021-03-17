import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const App = () => {
    const [num,setNum]=useState(1);
    const [name,setName]=useState();
    const [move,setMove]=useState();

    useEffect(()=>{
        console.log(1);
        async function getData(){
            
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMove(res.data.moves.length);
        }
        getData();
    });
   return (
   <>
    <h1>i selected <span style ={{color:'red'}}>{num} value </span></h1>
    <h1>my name is  <span style ={{color:'red'}}>  {name} name</span></h1>
    <h1>i have <span style ={{color:'red'}}>{move} moves</span> </h1>
    <select value={num} onChange={(event)=>{
        setNum(event.target.value);
    }}>
    <option value="1">1</option>
    <option value="3">3</option>
    <option value="6">6</option>
    <option value="9">9</option>

    </select>
   </>
        
    );
}
export default App;

// import './App.css'
import styles from "./App.module.css";

import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";


function App() {

  let [calval,setcalVal]=useState("");
  // const[onButtonClick,setonButtonClick]=useState();
const onButtonClick=(buttonText)=>{


  if(buttonText==="c"){
    setcalVal("")
  }

  else if(buttonText==="="){
    const result =eval(calval)
    setcalVal(result)
  }

  else {
    const newDisplayValue= calval +buttonText;
    setcalVal(newDisplayValue);
  }
  
  
  
  }


// function onButtonClick(){
//   return <>
//   {()=>console.log("button hit")}
//   </>

// }



  function onInput(){
    return<>
    
    </>
  }


 

  return (
    <div className={styles.calculator} >
      <Display displayValue={calval}/>
      {/* <input className={styles.display} type="text"/> */}
      {/* <div className={styles.buttonContainer}> */}
      {/* <ButtonsContainer onButtonClick={()=>console.log("button hit")}/> */}

      <ButtonsContainer onButtonClick={onButtonClick}/>

        {/* <button className={styles.button}>c</button>

        <button className={styles.button}>c</button>
        <button className={styles.button}>c</button>
        <button className={styles.button}>c</button>
        <button className={styles.button}>c</button> */}



        

    </div>
  )
}

export default App








 
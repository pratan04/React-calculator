
// import styles from "../App.module.css"


import styles from "./ButtonsContainer.module.css"

const ButtonsContainer=({onButtonClick})=>{

    const buttonNames=["c","1","2","3","4","5","6","7","8","9","+","-","*","%","="];

    

    return <>

<div value ={onButtonClick} className={styles.buttonContainer}>
       { buttonNames.map(buttonName=><button onClick={()=>onButtonClick(buttonName)} className={styles.button}>{buttonName}</button>)}
    

      







    </div>
    
   
    
    </>
}

export default ButtonsContainer;
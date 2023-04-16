import React, { useState } from "react";


const App = () => {

  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor , setTemperatureColor] = useState("cold");
  
  const increaseTemperature = () =>  {
    const newTemperature = temperatureValue + 1 ;
    
     if(newTemperature >= 17) { 
       setTemperatureColor("hot");  
     }
    setTemperatureValue(temperatureValue + 1)
    
  }

  const decreaseTemperature = () => { 
    const newTemperature = temperatureValue + 1 ;
    
    if(newTemperature <= 17) { 
      setTemperatureColor("cold");  
    }
   setTemperatureValue(temperatureValue - 1)
   
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`} >
          {temperatureValue}&deg;C
        </div>
      </div>

      <div className="button-container">
        <button onClick={() =>increaseTemperature() }>+</button>
        <button onClick={() =>decreaseTemperature() }>-</button>
      </div>

    </div>
  )
}



export default App;




import React, { useState } from 'react'
const ConsoleLogger = () => {
  const [log, setLog] = useState('')
  
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setLog(event.target.value)
    console.log(log)
  }
  return (
    <div>
    <label htmlFor="console logger">enter stuff to log to the console</label>
    <input type="text" id='console logger' title= 'console logger' onChange={handleChange} value ={log} />
    </div>
    );
}
 
export default ConsoleLogger;
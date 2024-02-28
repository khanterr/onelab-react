import './App.css';
import { useState, useEffect } from "react";
import Counter from "./Counter";

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1)
  }

  useEffect(() => {
    console.log("count updated:", count)
  }, [count])

  return (
    <div className="App">
      <Counter count={count} handleClick={handleClick}/>
    </div>
  );
}

export default App;

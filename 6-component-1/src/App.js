import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [val, setVal] = useState(0)
  const [val2, setVal2] = useState(0)

  const handleClick = () => {
    setVal(val + 1)
  }

  useEffect(() => {
    setVal2(val*2)  
  }, [val])


  return (
    <div className="App">
      <div>
        value:{val}
      </div>
      <div>
        value2: {val2}
      </div>
      <div>
        <button type="text" onClick={handleClick}>+1</button>
      </div>
    </div>
  );
}

export default App;


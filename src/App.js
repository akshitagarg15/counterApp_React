import React,{useState} from 'react';
import './App.css';

function App(){
  // a method responsible for updating variable
  // multiple values can be provided using object
  const [count,setCount]=useState(0)
  return(
    <div className="App">
      <header>
        <h1>Counter app using State</h1>
      </header>
      <h2>Current Value of count is: {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      {/*// we can run any method inside{} 
      When we use state and there is any change react automatically knows that it has to re render
      that component
    */}
      <button onClick={() => count == 10 ?'': setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => count == 0 ? '' : setCount(count - 1)}>Decrease Counter</button>

    </div>
  )
}

export default App;
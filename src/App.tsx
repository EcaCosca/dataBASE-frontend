import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/reducers/counter';

function App() {
  const {count} = useSelector((state) => state.counter);
  const {preFlightChecklist} = useSelector((state) => state.preFlightChecklist);
  const dispatch = useDispatch();

  console.log(preFlightChecklist);
  return (
    <div className="App">

      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {count}
        </button>
        <button onClick={() => dispatch(decrement())}>
          count is {count}
        </button>
        <p>
        </p>
        <ol>
          {preFlightChecklist.map(item => <li>{item.title}</li>)}
        </ol>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

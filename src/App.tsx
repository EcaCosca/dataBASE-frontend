import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/reducers/counter';
import Counter from './components/Counter';

function App() {
  const {count} = useSelector((state) => state.counter);
  const {preFlightChecklist} = useSelector((state) => state.preFlightChecklist);
  const dispatch = useDispatch();

  console.log(preFlightChecklist);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Project boiler plate by Eca
      </h1>
      <h2>List of technologies used</h2>
        <ul>
          <li>React</li>
          <li>Vite</li>
          <li>Redux Toolkit</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
        </ul>
      <Counter/>
      <div className="card">
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

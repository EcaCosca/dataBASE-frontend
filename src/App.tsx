import './App.css'
import Counter from './components/Counter';
import PreFlightChecklist from './components/PreFlightChecklist';

function App() {

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
      <PreFlightChecklist/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, update, erase } from '../redux/reducers/preFlightChecklist';

const PreFlightChecklist = () => {
    const {preFlightChecklist} = useSelector((state) => state.preFlightChecklist);
    const dispatch = useDispatch();

    console.log(preFlightChecklist)

  return (
    <div>
        <h2>PreFlightChecklist</h2>
        <div className="card">
        <ol>
          {preFlightChecklist.map(item => 
            <li id={item.id}>
                <input onChange={(e) => dispatch(update({id:item.id, title:e.target.value}))}type="text" id="disabled-input" aria-label="disabled input" className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={item.title}></input>
                <button onClick={() => dispatch(erase(item.id))}>Erase</button>
                {/* <button onClick={() => dispatch(erase(item.id))}>Edit</button> */}
            </li>
          )}
        </ol>
        <button onClick={() => dispatch(create(0))}>Add</button>
      </div>
    </div>
  )
}

export default PreFlightChecklist
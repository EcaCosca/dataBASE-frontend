import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, update, erase } from '../redux/reducers/preFlightChecklist';

const PreFlightChecklist = () => {
    const {preFlightChecklist} = useSelector((state) => state.preFlightChecklist);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>PreFlightChecklist</h2>
        <div className="card">
        <ol>
          {preFlightChecklist.map(item => 
            <li id={item.id}>
                {item.title}
                {item.id}
                <button onClick={() => dispatch(erase(item.id))}>Erase</button>
            </li>
          )}
        </ol>
        <button onClick={() => dispatch(create(0))}>Add</button>
      </div>
    </div>
  )
}

export default PreFlightChecklist
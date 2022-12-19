import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, update } from '../redux/reducers/preFlightChecklist';

const PreFlightChecklist = () => {
    const {preFlightChecklist} = useSelector((state) => state.preFlightChecklist);
    const dispatch = useDispatch();

  return (
    <div>
        <h2>PreFlightChecklist</h2>
        <div className="card">
        <ol>
          {preFlightChecklist.map(item => <li>{item.title}</li>)}
        </ol>
        <button onClick={() => dispatch(create(0))}>Add</button>
      </div>
    </div>
  )
}

export default PreFlightChecklist
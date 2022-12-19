import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/reducers/counter';

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={() => dispatch(decrement())}>
          -1
        </button>
        <button onClick={() => dispatch(increment())}>
          +1
        </button>
    </div>
  )
}

export default Counter
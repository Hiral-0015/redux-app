import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slice/CounterSlice';

function CounterComp() {
     const counter= useSelector(state=>state.counter.value);
     const dispatch=useDispatch();
  return (
    <div>
        <h2>Counter:{counter}</h2>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>

    </div>
  )
}

export default CounterComp

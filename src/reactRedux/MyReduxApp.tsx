import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './actions';

export interface IAppProps {
}

export function MyReduxApp (props: IAppProps) {

  const mystate=useSelector((state:any)=>state.changeTheNumber)
  const dispatch = useDispatch()
  return (
   <>
    <div className="py-16">
    <div className="mx-auto w-full max-w-7xl">
       <h1 className='text-white'> welcome to redux</h1>

      <button onClick={()=> dispatch(decNumber())} className='bg-red-700 whitespace-break-spaces'>   -   </button>
      <input type='text' value={mystate}></input>
      <button onClick={()=> dispatch(incNumber())} className='bg-green-700 whitespace-break-spaces'>   +    </button>
    </div>
    </div>
   </>
  );
} 

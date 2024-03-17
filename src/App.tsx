import React, { FC } from 'react';

import './App.css';
import Educator from './Educator';
import PassMethodProps from './PassMethodProps';
import Timer from './Timerdoubt';
import CacUseEffect from './chaiaurcode/CacUseEffect';
import { CacPasswordGenerator } from './chaiaurcode/CacPasswordGenerator';

// function App(): JSX.Element {
//   return (
//     React.createElement('form', {},
//     React.createElement("h1", {}, "Login"),
//     React.createElement('input', {type: 'text',placeholder:'Name', value: '',}),
//     React.createElement('br', {}),React.createElement('br', {}), 
//     React.createElement('input', {type: 'password', placeholder: 'password',
//                          value: '',}), 
//     React.createElement('br', {}), React.createElement('br', {}), 
//     React.createElement('button', {type: 'submit'}, "Login"))
//    )
// } 
const App: FC = () => {
  let count: number = 5;
  return (<React.Fragment><div className='container'>   
   <h1 className="text-3xl font-bold underline text-red-600">
      Simple React Typescript Tailwind Sample
    </h1>
  <div className='row mt-5'>
    <div className='col-sm-4'>First</div>
    <div className='col-sm-4 bg-primary rounded'>
    <form><h2>Login {count*count}</h2>
    <input type="text" className='form-control mb-2' placeholder="Name" /><br/>
    <input type="password" className='form-control mb-2' placeholder="password" /> 
    <br/>
    <input type="submit" className='btn btn-light mb-2' value="login" />                 
    </form>
    </div>
    <div className='col-sm-4'>Third</div>
    </div>
    </div>
    <div>------------------------------------Timer Props------------------------</div>
    <Timer></Timer>
    <div>------------------Passing Method as Props child to parent--------------</div>
    <PassMethodProps></PassMethodProps>
    <div>----------------------------------------------------</div>
    <Educator></Educator>
    <div>----------------------------------------------------</div>
    <CacUseEffect/>
    <div>----------------------------------------------------</div>
    <CacPasswordGenerator/>
  </React.Fragment>);
};
export default App;
 
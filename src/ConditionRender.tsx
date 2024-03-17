import React, { FC, ReactElement } from 'react';
import './App.css';


const ConditionRender : FC = () => {
  let count: number = 5;
  let element : ReactElement | null=null
  let islooogedin :boolean=false;
  islooogedin ? element=<h1>Welcome Admin</h1> : element = <h1>Login Failed</h1>;
  return (
    <React.Fragment>
    {element}
  </React.Fragment>
  );
}
export default ConditionRender;
 
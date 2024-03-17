import * as React from 'react';
import { Login } from './Login';
import { Profile } from './Profile';
import UserContextProvider from './UserContextProvider';

export interface IAppProps {
}

export function MyContextApp (props: IAppProps) {
  return (
    <UserContextProvider>
        <div className=' bg-white'>
        <h1>Context API</h1>
      <Login/>
      <Profile/>
      </div>
    </UserContextProvider>
  );
}

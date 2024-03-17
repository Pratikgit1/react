import * as React from 'react';
import { MyReduxApp } from './MyReduxApp';
import store from './store';
import { Provider } from 'react-redux';

export interface IAppProps {
}

export function Main (props: IAppProps) {

store.subscribe(()=> console.log(store.getState()))
  return (
    <div>
        <Provider store={store}>
       <MyReduxApp/>
       </Provider>
    </div>
  );
}

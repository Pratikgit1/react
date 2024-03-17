import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { CacHeader } from './CacHeader';
import { CacFooter } from './CacFooter';

export interface IAppProps {
}

export function CacLayoutRouter (props: IAppProps) {
  return (
    <div>
        
        <CacHeader/>
        <Outlet/>
        <CacFooter/>
         

      
    </div>
  );
}

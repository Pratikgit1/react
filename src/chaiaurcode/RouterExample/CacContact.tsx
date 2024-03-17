import * as React from 'react';
import { useParams } from 'react-router-dom';

export interface IAppProps {
}

export function CacContact (props: IAppProps) {
    const {id} = useParams()
  return (
    <div className="py-16 bg-white">
        Contact US = {id}
   </div>
  );
} 

import React, { useState } from 'react';
import PassingMethodChildProps from './PassingMethodChildProps';
type UpdateFunction = (value: string) => void;
const PassMethodProps: React.FC = () => {
  const [name, setName] = useState('John');
  const update: UpdateFunction = (value) => {
    setName(value);
  };
  return (
    <React.Fragment>
      <h1 className='bg-green-400 w-20 rounded-xl text-center'>{name}</h1><br /><br />
      <PassingMethodChildProps  names ="pratik" updates={update} />
    </React.Fragment>
  );
};
export default PassMethodProps;

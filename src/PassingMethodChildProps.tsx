import React from 'react';
type Props = {
    names:string  ,
  updates: (newValue: string) => void;
};
const PassingMethodChildProps: React.FC<Props> = (props) => {  
    // in below code direct destructure the data
   // const PassingMethodChildProps: React.FC<Props> = ({names,updates}) => {
  const handleChange = () => {
    let newValue = 'Jack';
    props.updates(newValue);
    //updates(newValue);
  };
  return (
    <React.Fragment>
      <button type="button" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={handleChange}>Change</button>
    </React.Fragment>
  );
};
export default PassingMethodChildProps;

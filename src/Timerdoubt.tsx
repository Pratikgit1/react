import React, { useState, useEffect } from 'react';
type MyProps = {
  new: number;
};
const Timer: React.FC = () => {
  const [counter, setCounter] = useState(0);
  let interval: NodeJS.Timeout | null = null;
  const start = () => {
    setCounter((prevCounter) =>  prevCounter + 1);
  };
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    interval = setInterval(start, 1000);
  };
  useEffect(() => {
    return () => {
      if (interval) {
        clearInterval(interval);// This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }
    };
  }, []);
  return (
    <React.Fragment>
      <br /><br />
    
      <button onClick={handleClick}>Start timer</button><br /><br />
      <Resultant new={counter} />
    </React.Fragment>
  );
};
const Resultant: React.FC<MyProps> = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div>
      <h3> Seconds Elapsed: {props.new} </h3>
    </div>
  );
};
export default Timer;

import { useCallback, useEffect, useState,useRef } from "react";

export interface IAppProps {}

export function CacPasswordGenerator(props: IAppProps) {
  const [length, setLength] = useState<any>(8);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllowed) str += str + "0123456789";

    if (charAllowed) str += str + "!@#$%^&*-_+=[]{}~'";

    for (let i = 1; i <= length; i++) {
      let indexval = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(indexval);
    }

    setPassword(pass);
  }, [length, NumberAllowed, charAllowed, setPassword]);

  const copyPasswordtoCLipBoard =useCallback(()=>{
    let inputElement = passwordRef.current;
    
    //passwordRef.current?.setSelectionRange(0,7)
  window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,NumberAllowed,charAllowed,passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-7">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordtoCLipBoard} className="bg-blue-700 text-white px-3 py-1.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              id="rangeInput"
              onChange={(e) => setLength(e.target.value)}
            ></input>
            <label htmlFor="rangeInput">Length: ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllowed}
              id="checkInput"
              onChange={()=>{setNumberAllowed((prev)=>!prev )}}
            ></input>
            <label htmlFor="checkInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={()=>{setCharAllowed((prev)=>!prev )}}
            ></input>
            <label htmlFor="charInput">Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

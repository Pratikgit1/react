import * as React from "react";
import UserContext from "./UserContext";

export interface IAppProps {}

export function Login(props: IAppProps) {
  const [UserName, setUserName] = React.useState("");
  const [Password, setPassword] = React.useState("");

  const { setUser } = React.useContext(UserContext);
  const handleSubmit = (e:any) => {  
    e.preventDefault();
    setUser({UserName,Password})
  };
  return (
    <div>
      <h1>Login</h1>
      <input type="text" onChange={(e) => setUserName(e.target.value)}></input>                  
      <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

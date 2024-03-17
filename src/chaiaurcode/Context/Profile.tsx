import * as React from 'react';
import UserContext from './UserContext';

export interface IAppProps {
}

export function Profile (props: IAppProps) {

    const {user}=React.useContext(UserContext)

    console.log("pratik="+user)

    if (!user) 
    return  <div>Please Login  </div>
    return <div>  Welcome :{user.UserName}</div>
}

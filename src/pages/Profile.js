import { useHistory } from "react-router";
import React, { useEffect } from 'react';


function Profile({login}) {
    const history = useHistory();

    useEffect(() => {
        if(!login){
            history.push("/");
        }
    }, [login, history]);


    return ( 
        <>
            <h1>Profile Page</h1>
            {/* <ul>
                <li>
                    <Link>View</Link>
                </li>
                <li>
                    <Link>Edit</Link>
                </li>
            </ul> */}
        </>
     );
}

export default Profile;
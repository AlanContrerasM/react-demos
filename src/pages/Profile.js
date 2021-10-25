import { Link, useHistory, Switch, Route, useRouteMatch } from "react-router-dom";
import React, { useEffect } from 'react';
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";


function Profile({login}) {
    const history = useHistory();

    useEffect(() => {
        if(!login){
            history.push("/");
        }
    }, [login, history]);

    // for the nested routes
    const {path, url} = useRouteMatch();

    return ( 
        <>
            <h1>Profile Page</h1>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={`${url}/viewProfile`}>View</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`${url}/editProfile`}>Edit</Link>
                    </li>
                    
                    
                </ul>

                <Switch>
                    <Route path={`${path}/viewProfile`}  component={ViewProfile} exact/>
                    <Route path={`${path}/editProfile`} component={EditProfile}/>
                </Switch>
            </div>
        </>
     );
}

export default Profile;
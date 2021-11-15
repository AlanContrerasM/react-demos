import { Link, useNavigate, Routes, Route} from "react-router-dom";
import React, { useEffect } from 'react';
import ViewProfile from "../components/ViewProfile";
import EditProfile from "../components/EditProfile";


function Profile({login}) {
    const navigate = useNavigate();

    useEffect(() => {
        if(!login){
            navigate("/");//can be -1, 1, etc
            
        }

        //calls api
    }, [login, navigate]);

    

    return ( 
        <>
            <h1>Profile Page</h1>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={`viewProfile`}>View</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`editProfile`}>Edit</Link>
                    </li>
                    
                    
                </ul>

                <Routes>
                    <Route path={`viewProfile`}  element={<ViewProfile/>} exact/>
                    <Route path={`editProfile`} element={<EditProfile/>}/>
                </Routes>
                
            </div>
        </>
     );
}

export default Profile;
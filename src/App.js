import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import { useState } from "react";

function App() {

  const [login, setLogin] = useState(false);

  return (
    // we can set as attribute <BrowserRouter basename="/tutorial"> and it will add it to the beginning of our url 
    //we can add <BrowserRouter forceRefresh>, so it forces a refresh and rerendering.
    //<BrowserRouter getUserConfirmation={(message, callback)=>{callback(window.confirm())}}>

    
      <div className="App">
        <Header />
        <button className="btn btn-outline-success my-2" onClick={()=>{setLogin(!login)}}>{login?"logout":"login"}</button>
        {/* this could be its own component (Ex. Routes.js), so app keeps being clean, and from then we route everything */}
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={About} />
            {/* for login and nested stuff */}
            {/* <Route path='/profile' component={Profile} /> */}
            <Route path='/profile'>
              {/* 
                We ca either do direct like this so it checks login status and redirects if false
                {login?<Profile/>:<Redirect to="/"/>}
                or useHistory, check inside the profile page, I myself would rather use the first option for simple validation.
              */}
              <Profile login={login}/>
            </Route> 


            {/* for params */}
            <Route path='/post/:id' component={Post} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;

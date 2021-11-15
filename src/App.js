import {BrowserRouter, Routes, Route} from "react-router-dom"
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
        <BrowserRouter >
        {/* BrowserRouter could be placed in the index.js so it encompases everything, and loos cleaner in here. */}
          <div className="App">
            <Header />
            <button className="btn btn-outline-success my-2" onClick={()=>{setLogin(!login)}}>{login?"logout":"login"}</button>
           
            <Routes>
              <Route path='/' element={<Home/>} />
                
              <Route path='/about' element={<About name="EventName"/>}/>
              {/* for login and nested stuff */}
              {/* <Route path='/profile' component={Profile} /> */}
              <Route path='/profile/*' element={<Profile login={login}/>}/>


              {/* for params */}
              <Route path='/post/:id' element={<Post/>} />
              
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        </BrowserRouter>
  );
}

export default App;

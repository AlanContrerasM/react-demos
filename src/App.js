import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    // we can set as attribute <BrowserRouter basename="/tutorial"> and it will add it to the beginning of our url 
    //we can add <BrowserRouter forceRefresh>, so it forces a refresh and rerendering.
    //<BrowserRouter getUserConfirmation={(message, callback)=>{callback(window.confirm())}}>

    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

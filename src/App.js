import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import Playlists from './Pages/Playlists';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/playlists" component={Playlists}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

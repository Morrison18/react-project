import './App.css';
import React, { Component } from 'react';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Artists } from './components/artists';
import { Content } from './components/content';
import { Albums } from './components/albums';
import { Songs } from './components/songs';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">MusicApp</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/content">Home</Nav.Link>
              <Nav.Link href="/artists">Artists</Nav.Link>
              <Nav.Link href="/albums">Albums</Nav.Link>
              <Nav.Link href="/songs">Favorite Songs</Nav.Link>
            </Nav>

          </Navbar>


          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/artists' component={Artists} exact />
            <Route path='/albums' component={Albums} exact />
            <Route path='/songs' component={Songs} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;

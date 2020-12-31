import './App.css';
import React, { Component } from 'react';




import { Artists } from './components/artists';
import { Content } from './components/content';

import { Songs } from './components/songs';
import { Add } from './components/add';
import { Show } from './components/show';

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
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/show">show</Nav.Link>
              <Nav.Link href="/add">add</Nav.Link>
           

            </Nav>

          </Navbar>


          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/show' component={Show} exact />
            <Route path='/add' component={Add} exact />
          </Switch>

        </div>
      </Router>
    );
  }
}
export default App;

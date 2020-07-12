import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
import Display from './component/display'
import Detail from './component/detail'

function App() {
  return (
    <Router>
      <div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="white" fixed="top" >
            <Navbar.Brand as={Link} to="/">HIDROPONIKU</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"> 
              <Nav>
                <Nav.Link style={{color: '#415D43'}} as={Link} to="/about">Tentang Kami</Nav.Link>
                <Nav.Link style={{color: '#415D43'}} as={Link} to="/display">Belanja</Nav.Link>
                <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" ></i>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Route path="/" exact component={Home}/>
        <Route path="/detail/:id" component={Detail} />
        <Route path="/about" component={About}/>
        <Route path="/display" component={Display}/>
      </div>
    </Router>
  );
}

export default App;

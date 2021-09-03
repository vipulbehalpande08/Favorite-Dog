import './App.css';
import React from 'react';
import { Container, Row} from 'react-bootstrap';
import TopNav from './components/TopNav';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Favorite from './components/Favorite';
import DogGallery from './components/DogGallery';
export default function App() {

  
      
  return(   
      <Container fluid>
        <TopNav className="nav"></TopNav>
          <Router>
            <Switch>
                <Route exact path="/" component={DogGallery}></Route>
                <Route exact path="/favorites" component={Favorite}></Route>
            </Switch>
          </Router>
          <Row className="footer"></Row>
      </Container>
      
    
  )
}
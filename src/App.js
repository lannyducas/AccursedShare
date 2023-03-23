import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Home from "./Home.js";
import Signup from './Signup';
import Entry from './Entry.js';
import Login from './Login.js';
import LineChart from "./LineChart.js";
import {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function App() {

  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState([])
  const [ageValues, setAgeValues] = useState ([])
  const [earningsArray, setEarningsArray] = useState([])
  const [expendituresArray, setExpendituresArray] = useState([])

  
  function setCurrentUser(currentUser) {
    setUser(currentUser)
    setLoggedIn(true)
  }

  function logOut(){
    setUser({})
    setLoggedIn(false)
    localStorage.token = '';
  }

  // useEffect(() => {

  
  // }, []);

  
  return (
  <div className="App">
    

    
    
              {/* <Link to="/">Home</Link> */}
              <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Accursed Share</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/Entry">Entry</Link></Nav.Link>
            <Nav.Link> <Link to="/Login">Login</Link></Nav.Link>
            <Nav.Link> <Link to="/Home">Home</Link></Nav.Link>
            <Nav.Link><Link to="/LineChart">Chart</Link></Nav.Link>
            <Nav.Link> <Link to="/Signup">Signup</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    {loggedIn ? (
      <span>
        <p>Welcome User!</p>
        <button onClick ={logOut}>LogOut</button>
        <br />
      </span>
    ) : null}
 


  <Routes>
    <Route path='*' element ={<Home />} />
    <Route path='Login' element={<Login setCurrentUser={setCurrentUser}/>} />
    <Route path='Entry' element={<Entry loggedIn={loggedIn} data={data} setData={setData} ageValues={ageValues} setAgeValues={setAgeValues} earningsArray = {earningsArray} setEarningsArray = {setEarningsArray} expendituresArray = {expendituresArray} setExpendituresArray={setExpendituresArray}/>} /> 
    <Route path='Signup' element={<Signup/>} />
    <Route path='LineChart' element={<LineChart data1={data} ageValues={ageValues} earningsArray = {earningsArray} expendituresArray = {expendituresArray}/>} />
  </Routes>
  </div>
  );
}

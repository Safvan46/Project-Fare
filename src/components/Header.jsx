import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar className="bg-success">
        <Container>
          <Navbar.Brand href="#home">
            <i className="fa-solid fa-diagram-project fa-xl text-dark"></i>
            {' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

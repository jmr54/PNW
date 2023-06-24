import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaInstagram,  FaFacebook, FaLinkedin} from 'react-icons/fa';

function NavbarBrand() {
  return (
      <Navbar sticky="top" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" >
        <Container >
        <Navbar.Brand href="#" >Wellness Coaching PNW</Navbar.Brand>
          <Navbar.Text >
          <a href="#"><FaFacebook size={30} style={{ marginRight: '10px' }}/></a>
          <a href="#"><FaLinkedin size={30} style={{ marginRight: '10px' }}/></a>
          <a href="#"><FaInstagram size={30}/></a>
          </Navbar.Text>
        </Container>
      </Navbar>

  )
}

export default NavbarBrand
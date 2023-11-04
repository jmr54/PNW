import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaInstagram,  FaFacebook, } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import {} from 'mdb-react-ui-kit';
import './css/App.css';

function NavbarBrand() {
  return (
      <Navbar sticky="top" bg="dark" data-bs-theme="dark" className="bg-body-tertiary" >
        <Container >
        <Navbar.Brand href="#" style={{color:'#BDC4CB'}}>Wellness Coaching PNW</Navbar.Brand>
          <Navbar.Text >
          <a href="#"><FaFacebook size={30} style={{ marginRight: '10px',color:'#BDC4CB' }}/></a>
          <a href="mailto:wellnesscoachingpnw@gmail.com"><AiOutlineMail size={30} style={{ marginRight: '10px', color:'#BDC4CB' }}/></a>
          <a href="#"><FaInstagram size={30} style={{color:'#BDC4CB'}}/></a>
          </Navbar.Text>
        </Container>
      </Navbar>

  )
}

export default NavbarBrand
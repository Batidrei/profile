import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled(Navbar)`
  backdrop-filter: blur(20px);
`;


export const Navigation = () => (
  <NavBar className='justify-content-between px-3' fixed="top">
    <Link to='/'>
      <img alt="Logo Alex Andrei" src={require("../../../Assets/icons/logo-andrei.svg").default} />
    </Link>
    <Nav>
      <Nav.Link>
        <AnchorLink className='text-dark' href='#home' offset='100'>Home</AnchorLink>
      </Nav.Link>
      <Nav.Link>
        <AnchorLink className='text-dark' href='#design' offset='280'>Design</AnchorLink>
      </Nav.Link>
      <Nav.Link>
        <AnchorLink className='text-dark' href='#favoriteStack'>Stack</AnchorLink>
      </Nav.Link>
    </Nav>
  </NavBar>
)
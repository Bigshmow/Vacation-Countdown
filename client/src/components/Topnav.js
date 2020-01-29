import React from "react";
import {Nav,Navbar,NavbarBrand,NavItem,NavLink} from 'reactstrap';
import "../styles.css";

export const Topnav = () => {
  return (
    <div>
    <Navbar className='shadow' light expand="md">
        <NavbarBrand href="https://bigshmow.github.io/Portfolio/">
          {'< DS >'}
        </NavbarBrand>
        <Nav className="mr-auto">
        </Nav>
            <NavLink href="https://www.linkedin.com/in/stewart-devin/" className="fa fa-3x fa-linkedin"></NavLink>
            <NavLink href="https://github.com/Bigshmow" className="fa fa-3x fa-github"></NavLink>
    </Navbar>
    </div>
  );
}

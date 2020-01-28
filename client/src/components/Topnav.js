import React from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import "../styles.css";

export const Topnav = () => {
  return (
    <Navbar className='shadow' light expand="md">
      <NavbarBrand href="https://bigshmow.github.io/Portfolio/">
        {'< DS >'}
      </NavbarBrand>
    </Navbar>
  );
}

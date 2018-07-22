import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
} from 'reactstrap';

import bootPic from '../images/best-hiking-boots.jpg';
import bootcampPic from '../images/bootcamp.jpg';

import './style.css';

class Bootcamp extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        {' '}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/home">LOGO HERE</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="boldHeader">
                  Training
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/vertimax">Vertimax/Agility</DropdownItem>
                  <DropdownItem href="/strength">Strength</DropdownItem>
                  <DropdownItem href="/yoga"> Yoga (Coming soon)</DropdownItem>
                  <DropdownItem href="/bootcamp">
                    Bootcamp (Coming soon)
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/about/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/events/">Book an Appointment</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/weglobalfitness/">
                  <i className="fa fa-facebook-square" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.instagram.com/antsenior3/">
                  <i class="fa fa-instagram" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="bootcampPicDiv">
          <img className="bootcampPic" src={bootPic} />
          <h2 className="bootcampText">Bootcamp</h2>
          <div className="bootcampText2">
            <p>COMING SOON</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Bootcamp;

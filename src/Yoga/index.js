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

import yogaPic from '../images/womanYoga.jpg';
import yogaPic2 from '../images/yoga2.jpg';
import yogaVideo from '../images/IMG_0606.MOV';

import './style.css';

class Yoga extends Component {
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
                  <DropdownItem href="/vertimax">Vertimax</DropdownItem>
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
        <div className="yogaPicDiv">
          <img className="yogaPic" src={yogaPic} />
          <h2 className="yogaText">Yoga</h2>
          <div className="yogaText2">
            <p>COMING SOON</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Yoga;

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
} from 'reactstrap';

class Contact extends Component {
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
      <div className="App">
        <header className="App-header" />
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/home">LOGO HERE</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/home">Home</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Training
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Vertamax</DropdownItem>
                    <DropdownItem>Strength/Speed</DropdownItem>
                    <DropdownItem> Yoga </DropdownItem>
                    <DropdownItem>Bootcamp</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/events/">Events</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about/">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/contact/">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <header />
      </div>
    );
  }
}
export default Contact;

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
class Home extends Component {
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
                  <NavLink active href="/home">
                    Home
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Training
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/vertamax">Vertamax</DropdownItem>
                    <DropdownItem href="/strength">Strength/Speed</DropdownItem>
                    <DropdownItem href="/yoga"> Yoga </DropdownItem>
                    <DropdownItem href="/bootcamp">Bootcamp</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="/events/">Events</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about/">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact/">Contact</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact/">
                    <i className="fa fa-facebook-square" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact/">
                    <i class="fa fa-instagram" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div>Picture here?</div>
      </div>
    );
  }
}
export default Home;

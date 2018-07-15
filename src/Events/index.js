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
class Events extends Component {
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
                <DropdownToggle nav caret>
                  Training
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/vertimax">Vertimax</DropdownItem>
                  <DropdownItem href="/strength">Strength</DropdownItem>
                  <DropdownItem href="/yoga"> Yoga </DropdownItem>
                  <DropdownItem href="/bootcamp">Bootcamp</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/about/">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="/events/">
                  Book an Appointment
                </NavLink>
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
        <div>
          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=15272497"
            width="100%"
            height="800"
            frameBorder="0"
          />
          <script
            src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js"
            type="text/javascript"
          />
        </div>
      </div>
    );
  }
}
export default Events;

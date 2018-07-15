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

import vertaPic from '../images/verta.jpg';

import './style.css';

class Vertamax extends Component {
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
        <div className="vertaPicDiv">
          <img className="vertaPic" src={vertaPic} />
          <h2 className="vertaText">Vertamax</h2>
        </div>
        <Container className="containerStyle">
          <Row>
            <Col xs="8">
              <h5>
                The Goal of our bootcamp sessions is to bring you closer to your
                death. Monica yogi is a professional at and has been leading
                class for 20 years text text text Udsafdf fdsafddf fdsafdfasf.
              </h5>
              <br />
              <h6 className="scheduleLink">Schedule a class today!</h6>
            </Col>
            <Col xs="4">
              <h4>Pricing and Availability</h4>
              <div>Bootcamp sessions are offered from: </div>{' '}
              <div>
                {' '}
                6am to 10pm Monday through Saturday (i know this is wrong)
              </div>
              <br />
              <div>Single session: $</div>
              <div>Single Month of sessions(?): $</div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="8" />
            <Col xs="4" />
          </Row>
        </Container>
      </div>
    );
  }
}
export default Vertamax;
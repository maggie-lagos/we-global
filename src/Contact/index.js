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
  Button,
} from 'reactstrap';

import './style.css';

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

  submitForm() {
    console.log('yay');
  }
  render() {
    return (
      <div className="App">
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
                    <DropdownItem href="/vertimax">
                      Vertimax
                    </DropdownItem>
                    <DropdownItem href="/strength">Strength</DropdownItem>
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
                  <NavLink active href="/contact/">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact/">
                    <i className="fa fa-facebook-square" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="/contact/">
                    <i class="fa fa-instagram" />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div>
          <br />
          <h2>Contact us</h2>
          <br />
          <p>We are always happy to hear your questions and concerns</p>
        </div>
        <div>
          <Container className="containerStyle">
            <Row>
              <Col xs="4" />
              <Col xs="2">
                <p>Name:</p>
              </Col>

              <Col xs="6">
                <input className="contactText" type="text" name="blah" />
              </Col>
            </Row>
            <Row>
              <Col xs="4" />
              <Col xs="2">
                <p>Email:</p>
              </Col>

              <Col xs="6">
                <input className="contactText" type="text" name="blah2" />
              </Col>
            </Row>
            <Row>
              <Col xs="4" />
              <Col xs="2">
                <p>Message:</p>
              </Col>

              <Col xs="6">
                <textarea className="contactText" type="text" name="blah3" />
              </Col>
            </Row>
            <Row>
              <Col xs="4" />
              <Col xs="4" />

              <Col xs="2">
                <Button
                  color="primary"
                  className="submitButton"
                  onClick={() => this.submitForm()}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Contact;

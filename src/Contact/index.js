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
      isDesktop: false,
      isWideDesktop: false,
      isTablet: false,
      isPhone: false,
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate() {
    //  375, 768, 1024, 1366;
    if (window.innerWidth > 1365) {
      this.setState({
        isWideDesktop: true,
        isDesktop: false,
        isTablet: false,
        isPhone: false,
      });
    } else if (window.innerWidth > 1023) {
      this.setState({
        isWideDesktop: false,
        isDesktop: true,
        isTablet: false,
        isPhone: false,
      });
    } else if (window.innerWidth > 767) {
      this.setState({
        isWideDesktop: false,
        isDesktop: false,
        isTablet: true,
        isPhone: false,
      });
    } else {
      this.setState({
        isWideDesktop: false,
        isDesktop: false,
        isTablet: false,
        isPhone: true,
      });
    }
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
                    <DropdownItem href="/vertimax">Vertimax</DropdownItem>
                    <DropdownItem href="/strength">Strength</DropdownItem>
                    <DropdownItem href="/yoga">
                      {' '}
                      Yoga (Coming soon)
                    </DropdownItem>
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
                  <NavLink active href="/contact/">
                    Contact
                  </NavLink>
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
        </div>
        <div>
          <br />
          <h2>Contact us</h2>
          <br />
          <p>We are always happy to hear your questions and concerns</p>
        </div>
        <div>
          {this.state.isWideDesktop && (
            <Container className="containerStyle">
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p>Name:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText" type="text" name="blah" />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p>Phone:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText" type="text" name="blah2" />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p>Email:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText" type="text" name="blah2" />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p>Message:</p>
                </Col>

                <Col xs="6">
                  <textarea className="contactText" type="text" name="blah3" />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1" />

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
          )}
          {this.state.isDesktop && (
            <Container className="containerStyle">
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p>Name:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText" type="text" name="blah" />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p>Phone:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText" type="text" name="blah2" />
                </Col>
              </Row>

              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p>Email:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText" type="text" name="blah2" />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p>Message:</p>
                </Col>

                <Col xs="6">
                  <textarea className="contactText" type="text" name="blah3" />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1" />

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
          )}
          {this.state.isTablet && (
            <Container className="containerStyle">
              <Row>
                <Col xs="3" />
                <Col xs="1" className="smallMargin">
                  <p>Name:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText2" type="text" name="blah" />
                </Col>
              </Row>
              <Row>
                <Col xs="3" />
                <Col xs="1" className="smallMargin">
                  <p>Phone:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText2" type="text" name="blah2" />
                </Col>
              </Row>
              <Row>
                <Col xs="3" />
                <Col xs="1" className="smallMargin">
                  <p>Email:</p>
                </Col>

                <Col xs="6">
                  <input className="contactText2" type="text" name="blah2" />
                </Col>
              </Row>
              <Row>
                <Col xs="3" />
                <Col xs="1" className="smallMargin">
                  <p>Message:</p>
                </Col>

                <Col xs="6">
                  <textarea className="contactText2" type="text" name="blah3" />
                </Col>
              </Row>
              <Row>
                <Col xs="3" />
                <Col xs="1" className="smallMargin" />

                <Col xs="3">
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
          )}
          {this.state.isPhone && (
            <Container className="containerStyle">
              <Row>
                <Col xs="2" className="smallMargin">
                  <p>Name:</p>
                </Col>

                <Col xs="9">
                  <input className="contactText2" type="text" name="blah" />
                </Col>
              </Row>
              <Row>
                <Col xs="2" className="smallMargin">
                  <p>Phone:</p>
                </Col>

                <Col xs="9">
                  <input className="contactText2" type="text" name="blah2" />
                </Col>
              </Row>
              <Row>
                <Col xs="2" className="smallMargin">
                  <p>Email:</p>
                </Col>

                <Col xs="9">
                  <input className="contactText2" type="text" name="blah2" />
                </Col>
              </Row>
              <Row>
                <Col xs="2" className="smallMargin">
                  <p>Message:</p>
                </Col>

                <Col xs="9">
                  <textarea className="contactText2" type="text" name="blah3" />
                </Col>
              </Row>
              <Row>
                <Col xs="2" className="smallMargin" />

                <Col xs="5">
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
          )}
        </div>
      </div>
    );
  }
}
export default Contact;

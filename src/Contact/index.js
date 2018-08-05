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
  UncontrolledTooltip,
} from 'reactstrap';

import axios from 'axios';

import logoPic from '../images/Logo.png';

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
      name: '',
      phone: '',
      email: '',
      msg: '',
    };

    this.updatePredicate = this.updatePredicate.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.handleMsgChange = this.handleMsgChange.bind(this);
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

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleMsgChange(event) {
    this.setState({ msg: event.target.value });
  }

  submitForm() {
    console.log(this.state);
    let toSend = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      msg: this.state.msg,
      headers: { 'Access-Control-Allow-Origin': '*' },
    };
    axios
      .post(
        'https://e55s91fpvb.execute-api.us-east-1.amazonaws.com/test2/contact',
        toSend,
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <div>
          <Navbar light expand="md">
            <NavbarBrand href="/home">
              {' '}
              <img className="logo" src={logoPic} />
            </NavbarBrand>
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
                      Yoga (Coming Soon)
                    </DropdownItem>
                    <DropdownItem href="/bootcamp">
                      Bootcamp (Coming Soon)
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
                  <NavLink
                    href="https://www.facebook.com/weglobalfitness/"
                    id="fb"
                  >
                    <i className="fa fa-facebook-square" />
                  </NavLink>
                  <UncontrolledTooltip placement="bottom" target="fb">
                    Facebook
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="https://www.instagram.com/antsenior3/"
                    id="insta"
                  >
                    <i class="fa fa-instagram" />
                  </NavLink>
                  <UncontrolledTooltip placement="bottom" target="insta">
                    Instagram
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        {!this.state.isPhone && (
          <div>
            <br />
            <h2 className="headerFontSize">Contact Us</h2>
            <br />
            <p className="textFontSize">
              We are always happy to respond to your questions and concerns.
            </p>
          </div>
        )}
        {this.state.isPhone && (
          <div>
            <br />
            <h2 className="headerFontSize2">Contact Us</h2>
            <br />
            <p className="textFontSize2">
              We are always happy to respond to your questions and concerns.
            </p>
          </div>
        )}

        <div>
          {this.state.isWideDesktop && (
            <Container className="containerStyle">
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p className="textFontSize">Name:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    type="text"
                    name="blah"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p className="textFontSize">Phone:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    type="text"
                    name="blah2"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p className="textFontSize">Email:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    type="text"
                    name="blah2"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p className="textFontSize">Message:</p>
                </Col>

                <Col xs="6">
                  <textarea
                    className="contactText"
                    value={this.state.msg}
                    onChange={this.handleMsgChange}
                    type="text"
                    name="blah3"
                  />
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
                  <p className="textFontSize">Name:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    type="text"
                    name="blah"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p className="textFontSize">Phone:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    type="text"
                    name="blah2"
                  />
                </Col>
              </Row>

              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p className="textFontSize">Email:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    type="text"
                    name="blah2"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="4" />
                <Col xs="1">
                  <p className="textFontSize">Message:</p>
                </Col>

                <Col xs="6">
                  <textarea
                    className="contactText"
                    value={this.state.msg}
                    onChange={this.handleMsgChange}
                    type="text"
                    name="blah3"
                  />
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
                  <p className="textFontSize">Name:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText2"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    type="text"
                    name="blah"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="3" />
                <Col xs="1" className="smallMargin">
                  <p className="textFontSize">Phone:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText2"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    type="text"
                    name="blah2"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="3" />
                <Col xs="1" className="smallMargin">
                  <p className="textFontSize">Email:</p>
                </Col>

                <Col xs="6">
                  <input
                    className="contactText2"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    type="text"
                    name="blah2"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="3" />
                <Col xs="1" className="smallMargin">
                  <p className="textFontSize">Message:</p>
                </Col>

                <Col xs="6">
                  <textarea
                    className="contactText2"
                    value={this.state.msg}
                    onChange={this.handleMsgChange}
                    type="text"
                    name="blah3"
                  />
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
                  <p className="textFontSize2">Name:</p>
                </Col>

                <Col xs="9">
                  <input
                    className="contactText2"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    type="text"
                    name="blah"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="2" className="smallMargin">
                  <p className="textFontSize2">Phone:</p>
                </Col>

                <Col xs="9">
                  <input
                    className="contactText2"
                    value={this.state.phone}
                    onChange={this.handlePhoneChange}
                    type="text"
                    name="blah2"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="2" className="smallMargin">
                  <p className="textFontSize2">Email:</p>
                </Col>

                <Col xs="9">
                  <input
                    className="contactText2"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    type="text"
                    name="blah2"
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="2" className="smallMargin">
                  <p className="textFontSize2">Message:</p>
                </Col>

                <Col xs="9">
                  <textarea
                    className="contactText2"
                    value={this.state.msg}
                    onChange={this.handleMsgChange}
                    type="text"
                    name="blah3"
                  />
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

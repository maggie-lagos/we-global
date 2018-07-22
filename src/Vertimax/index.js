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

import vertiPic from '../images/goodVerta.jpg';

import './style.css';

class Vertimax extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
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
    if (window.innerWidth > 767) {
      this.setState({
        isPhone: false,
      });
    } else {
      this.setState({
        isPhone: true,
      });
    }
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
        <div className="vertiPicDiv">
          <img className="vertiPic" src={vertiPic} />
        </div>
        {!this.state.isPhone && (
          <Container className="containerStyle">
            <Row>
              <Col xs="8">
                <h5>
                  The Goal of our bootcamp sessions is to bring you closer to
                  your death. Monica yogi is a professional at and has been
                  leading class for 20 years text text text Udsafdf fdsafddf
                  fdsafdfasf.
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
        )}
        {this.state.isPhone && (
          <Container className="containerStyle">
            <Row>
              <Col xs="12">
                <h5>
                  The Goal of our bootcamp sessions is to bring you closer to
                  your death. Monica yogi is a professional at and has been
                  leading class for 20 years text text text Udsafdf fdsafddf
                  fdsafdfasf.
                </h5>
                <br />
                <h6 className="scheduleLink">Schedule a class today!</h6>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs="12">
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
        )}
      </div>
    );
  }
}
export default Vertimax;

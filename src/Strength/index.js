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
  UncontrolledTooltip,
} from 'reactstrap';
import logoPic from '../images/Logo.png';

import './style.css';

import strengthPic from '../images/strength.jpg';
class Strength extends Component {
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
        <div className="strengthPicDiv">
          <img className="strengthPic" src={strengthPic} />
          <h2 className="strengthText">Strength Training</h2>
        </div>
        {!this.state.isPhone && (
          <Container className="containerStyle">
            <Row>
              <Col xs="7" className="facilityDiv">
                <h5>
                  The Goal of our bootcamp sessions is to bring you closer to
                  your death. Monica yogi is a professional at and has been
                  leading class for 20 years text text text Udsafdf fdsafddf
                  fdsafdfasf.
                </h5>
                <br />
                <h6 className="scheduleLink">Schedule a class today!</h6>
              </Col>
              <Col xs="1" />
              <Col xs="4" className="eventDiv">
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
              <Col xs="1" />
              <Col xs="10" className="facilityDiv">
                <h5>
                  The Goal of our bootcamp sessions is to bring you closer to
                  your death. Monica yogi is a professional at and has been
                  leading class for 20 years text text text Udsafdf fdsafddf
                  fdsafdfasf.
                </h5>
                <br />
                <h6 className="scheduleLink">Schedule a class today!</h6>
              </Col>
              <Col xs="1" />
            </Row>
            <br />
            <Row>
              <Col xs="1" />
              <Col xs="10" className="facilityDiv">
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
              <Col xs="1" />
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
export default Strength;

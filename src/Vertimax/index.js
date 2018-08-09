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
import { Link } from 'react-router-dom';

import logoPic from '../images/Logo.png';
import headerPic from '../images/vertimax-header-text.png';

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
      <div className="App">
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
                  <DropdownItem href="/yoga"> Yoga (Coming Soon)</DropdownItem>
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
        <div className="headerPicDiv">
          <img className="headerPic" src={headerPic} />
        </div>
        {!this.state.isPhone && (
          <Container className="containerStyle">
            <Row>
              <Col xs="7" className="facilityDiv">
                <p>
                  <h4 className="headerFontSize">
                    Increase your vertical and become more explosive!
                  </h4>
                </p>

                <p className="textFontSize">
                  Vertimax training is perfect for athletes looking to improve
                  their strength and speed. Use it to increase power in all
                  phases of the vertical jump, even accounting for arm swing
                  momentum. Increase agility by sprinting while resistance is
                  applied to the glutes, quads, calves, and hip flexors at the
                  same time.
                </p>

                <p className="textFontSize">
                  Whether your goals are in jump or speed, the platform’s unique
                  resistance band system will allow you to strengthen weak
                  muscles without a heavy workload, helping you to prevent
                  injuries.
                </p>

                <p className="textFontSize">
                  By scheduled appointment only. Each session is limited to 4
                  athletes.
                </p>
                <br />
                <Link to="/events" className="scheduleLink">
                  Reserve your spot now!
                </Link>
              </Col>
              <Col xs="1" />
              <Col xs="4" className="facilityDiv">
                <h4 className="headerFontSize">Availability and Pricing</h4>
                {/* <br></br> */}
                <div>
                  <b className="textFontSize">Schedule </b>
                </div>{' '}
                <div className="textFontSize">
                  {' '}
                  Monday/Wednesday/Friday 3PM-9PM <br />
                  Saturday 7AM-8AM
                </div>
                <br />
                <div>
                  <p className="textFontSize">
                    <b>Individual</b>
                    <br />
                    1 session: $35 <br />
                    8 sessions: $240 <br />
                    12 sessions: 330 <br />
                  </p>
                </div>
                <div>
                  <p className="textFontSize">
                    <b>Individual +1 Sibling</b>
                    <br />
                    One month sessions (max 12): $250
                  </p>
                </div>
                <div>
                  <p className="textFontSize">
                    <b>Team</b>
                    <br />
                    One month sessions (max 12): $100 <br />
                    <i>Minimum of 4 players per session required.</i>
                  </p>
                </div>
                <div className="textFontSize">
                  Additional packages available upon request.
                </div>
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
                <p>
                  <h4 className="headerFontSize2">
                    Increase your vertical and become more explosive!
                  </h4>
                </p>

                <p className="textFontSize2">
                  Vertimax training is perfect for athletes looking to improve
                  their strength and speed. Use it to increase power in all
                  phases of the vertical jump, even accounting for arm swing
                  momentum. Increase agility by sprinting while resistance is
                  applied to the glutes, quads, calves, and hip flexors at the
                  same time.
                </p>

                <p className="textFontSize2">
                  Whether your goals are in jump or speed, the platform’s unique
                  resistance band system will allow you to strengthen weak
                  muscles without a heavy workload, helping you to prevent
                  injuries.
                </p>

                <p className="textFontSize2">
                  By scheduled appointment only. Each session is limited to 4
                  athletes.
                </p>
                <br />
                <Link to="/events" className="scheduleLink">
                  Reserve your spot now!
                </Link>
              </Col>
              <Col xs="1" />
            </Row>
            <br />
            <Row>
              <Col xs="1" />
              <Col xs="10" className="facilityDiv">
                <h4 className="headerFontSize2">Availability and Pricing</h4>
                {/* <br></br> */}
                <div>
                  <b className="textFontSize2">Schedule </b>
                </div>{' '}
                <div className="textFontSize2">
                  {' '}
                  Monday/Wednesday/Friday 3PM-9PM <br />
                  Saturday 7AM-8AM
                </div>
                <br />
                <div>
                  <p className="textFontSize2">
                    <b>Individual</b>
                    <br />
                    1 session: $35 <br />
                    8 sessions: $240 <br />
                    12 sessions: 330 <br />
                  </p>
                </div>
                <div>
                  <p className="textFontSize2">
                    <b>Individual +1 Sibling</b>
                    <br />
                    One month sessions (max 12): $250
                  </p>
                </div>
                <div>
                  <p className="textFontSize2">
                    <b>Team</b>
                    <br />
                    One month sessions (max 12): $100 <br />
                    <i>Minimum of 4 players per session required.</i>
                  </p>
                </div>
                <div className="textFontSize2">
                  Additional packages available upon request.
                </div>
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
export default Vertimax;

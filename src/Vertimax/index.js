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
        <div className="vertiPicDiv">
          <img className="vertiPic" src={vertiPic} />
        </div>
        {!this.state.isPhone && (
          <Container className="containerStyle">
            <Row>
              <Col xs="8">
                <h5>
                    <p>Goal
                    Become more explosive, develop power, increase speed and strength
                    (Or: Increase your vertical and become more explosive!)
                    </p>

                    <p>
                    Vertimax training is perfect for athletes looking to improve their strength and speed. Use it to
                    increase power in all phases of the vertical jump, even accounting for arm swing momentum.
                    Increase agility by sprinting while resistance is applied to the glutes, quads, calfs, and hip
                    flexors at the same time.
                    </p>

                    <p>
                    Whether your goals are in jump or speed, the platform’s unique resistance band system will allow
                    you to strengthen weak muscles without a heavy workload, helping you to prevent injuries.
                    </p>

                    <p>By scheduled appointment only. Each session is limited to 4 athletes. Reserve your spot now!</p>
                </h5>
                <br />
                <h6 className="scheduleLink">Schedule a class today!</h6>
              </Col>
              <Col xs="4">
                <h4>Availability and Pricing</h4>
                  {/* <br></br> */}
                  <div><b>Schedule </b></div>{' '}
                <div>
                  {' '}
                  Monday/Wednesday/Friday 3PM-9PM
                  Saturday 7AM-8AM
                </div>
                <br />
                <div>
                    <p>
                        <b>Individual</b>
                        <br></br>
                        1 session: $35 <br></br>
                        8 sessions: $240 <br></br>
                        12 sessions: 330 <br></br>
                    </p>
                </div>
                <div>
                    <p>
                        <b>Individual +1 Sibling</b>
                        <br></br>
                        One month sessions (max 12): $250
                    </p>
                </div>
                <div>
                    <p>
                        <b>Team</b>
                        <br></br>
                        One month sessions (max 12): $100 <br></br>
                        <i>Minimum of 4 players per session required.</i>
                    </p>
                </div>
                <div>Other packages available upon request.</div>
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
                    Goal: Become more explosive, develop power, increase speed and strength
                    Or: Increase your vertical and become more explosive!

                    Vertimax training is perfect for athletes looking to improve their strength and speed. Use it to
                    increase power in all phases of the vertical jump, even accounting for arm swing momentum.
                    Increase agility by sprinting while resistance is applied to the glutes, quads, calfs, and hip
                    flexors at the same time.

                    Whether your goals are in jump or speed, the platform’s unique resistance band system will allow
                    you to strengthen weak muscles without a heavy workload, helping you to prevent injuries.

                    By scheduled appointment only. Each session is limited to 4 athletes. Reserve your spot now!
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

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

import yogaPic from '../images/yogaPic.jpg';
import yogaPic2 from '../images/yoga2.jpg';
import yogaVideo from '../images/IMG_0606.MOV';

import './style.css';

class Yoga extends Component {
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
                  <DropdownItem href="/vertamax">Vertamax/Agility</DropdownItem>
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
        <div className="yogaPicDiv">
          <img className="yogaPic" src={yogaPic} />
          <h2 className="yogaText">Yoga</h2>
        </div>
        <Container className="containerStyle">
          <Row>
            <Col xs="8">
              <h5>
                The Goal of our yoga sessions is to bring you closer to the
                earth. Monica yogi is a professional at and has been leading
                class for 20 years.
              </h5>
              <br />
              <h6 className="scheduleLink">Schedule a class today!</h6>
            </Col>
            <Col xs="4">
              <h4>Pricing and Availability</h4>
              <div>Yoga sessions are offered from: </div>{' '}
              <div> 6am to 10pm Monday through Saturday</div>
              <br />
              <div>Single session: $15</div>
              <div>Single Month of sessions(4): $55</div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs="8">
              <img className="yogaPic" src={yogaPic2} />
            </Col>
            <Col xs="4">
              <video
                controls="controls"
                width="400"
                height="250"
                name="Video Name"
                src={yogaVideo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Yoga;

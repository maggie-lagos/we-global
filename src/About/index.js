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

import aboutPic from '../images/about.jpg';
import coach1Pic from '../images/littlekid.jpeg';
import yakPic from '../images/yak.jpg';

import './style.css';

class About extends Component {
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
                <NavLink active href="/about/">
                  About Us
                </NavLink>
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
        <div>
          <img className="aboutPic" src={aboutPic} />
          <div>
            <h3 className="aboutText">Our Philosophy</h3>
            <h6 className="aboutSubtext">
              At I am global sports, its all about student athletes and hard
              work. Our trainers have a devotion and work ethic unmatched in the
              known world. Something something smart something blah I'm out of
              ideas this is just filler. What did the chicken say to the
              peacock? I don't know said the donkey. woof woof woof woof woof
            </h6>
          </div>
          <Container className="containerStyle containerStyle2">
            <Row>
              <Col xs="2">
                <img className="coachPic" src={coach1Pic} />
                <h5>Little Kid</h5>
                <br />
              </Col>
              <Col xs="8">
                <p className="coachText">
                  Little kid is a great teacher. Obviously. text text
                  texttexttexttexttexttexttext text text text Stronger unpacked
                  felicity to of mistaken. Fanny at wrong table ye in. Be on
                  easily cannot innate in lasted months on. Differed and and
                  felicity steepest mrs age outweigh. Opinions learning likewise
                  daughter now age outweigh. Raptures stanhill my greatest
                  mistaken or exercise he on although. Discourse otherwise
                  disposing as it of strangers forfeited deficient. Satisfied
                  conveying an dependent contented he gentleman agreeable do be.
                  Warrant private blushes removed an in equally totally if.
                  Delivered dejection necessary objection do mr prevailed. Mr
                  feeling
                </p>
                <br />
              </Col>
            </Row>
            <Row>
              <Col xs="2">
                <img className="coachPic" src={yakPic} />
                <h5>A Yak</h5>
              </Col>
              <Col xs="8">
                <p className="coachText">It's a yak!</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default About;

// <div className="coachDiv">
//   <h3>Coaches</h3>
//   <br />
//   <div>
//
//
//   </div>
// </div>

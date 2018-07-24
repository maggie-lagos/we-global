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

import aboutPic from '../images/about2.jpg';
import coach1Pic from '../images/littlekid.jpeg';
import yakPic from '../images/yak.jpg';
import anthonyPic from '../images/bio-anthony.jpg';
import lyneePic from '../images/bio-lynee.jpg';

import './style.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isNotPhone: false,
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

    if (window.innerWidth > 375) {
      this.setState({
        isNotPhone: true,
        isPhone: false,
      });
    } else {
      this.setState({
        isNotPhone: false,
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
                <DropdownToggle nav caret>
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
                <NavLink active href="/about/">
                  About Us
                </NavLink>
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
        {this.state.isNotPhone && (
          <div>
            <img className="aboutPic" src={aboutPic} />
            <div>
              <h3 className="aboutText">Our Philosophy</h3>
              <h6 className="aboutSubtext">
                At I am global sports, its all about student athletes and hard
                work. Our trainers have a devotion and work ethic unmatched in
                the known world. Something something smart something blah I'm
                out of ideas this is just filler. What did the chicken say to
                the peacock? I don't know said the donkey. woof woof woof woof
                woof
              </h6>
            </div>
            <Container className="containerStyle containerStyle2">
              <Row>
                <Col xs="12">
                  <h3>Coaches</h3>
                </Col>
                <Col xs="2">
                  <img className="coachPic" src={anthonyPic} />
                  <h5>Anthony Melvin</h5>
                  <br />
                </Col>
                <Col xs="8">
                  <p className="coachText">
                    Anthony is the humble founder of I Am Global Sports. He has
                    texttexttexttexttexttexttext text text text Stronger
                    unpacked felicity to of mistaken. Fanny at wrong table ye
                    in. Be on easily cannot innate in lasted months on. Differed
                    and and felicity steepest mrs age outweigh. Opinions
                    learning likewise daughter now age outweigh. Raptures
                    stanhill my greatest mistaken or exercise he on although.
                    Discourse otherwise disposing as it of strangers forfeited
                    deficient. Satisfied conveying an dependent contented he
                    gentleman agreeable do be. Warrant private blushes removed
                    an in equally totally if. Delivered dejection necessary
                    objection do mr prevailed. Mr feeling
                  </p>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col xs="2">
                  <img className="coachPic" src={lyneePic} />
                  <h5>Lynee Pina</h5>
                </Col>
                <Col xs="8">
                  <p className="coachText">
                    It's a yak! Specialties are strength training and developing
                    a strength training program.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="2">
                  <img className="coachPic" src={yakPic} />
                  <h5>Charles Thomas</h5>
                </Col>
                <Col xs="8">
                  <p className="coachText">
                    It's a yak! Special is strength training.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="2">
                  <img className="coachPic" src={yakPic} />
                  <h5>Yoga Instructor</h5>
                </Col>
                <Col xs="8">
                  <p className="coachText">
                    It's a yak! Special is strength training.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        )}
        {this.state.isPhone && (
          <div>
            <img className="aboutPic" src={aboutPic} />
            <div>
              <h3 className="aboutText">Our Philosophy</h3>
              <h6 className="aboutSubtext">
                At I am global sports, its all about student athletes and hard
                work. Our trainers have a devotion and work ethic unmatched in
                the known world. Something something smart something blah I'm
                out of ideas this is just filler. What did the chicken say to
                the peacock? I don't know said the donkey. woof woof woof woof
                woof
              </h6>
            </div>
            <Container className="containerStyle containerStyle2">
              <Row>
                <Col xs="12">
                  <h3>Coaches</h3>
                </Col>
                <Col xs="212">
                  <img className="coachPic" src={anthonyPic} />
                  <h5>Anthony Melvin</h5>
                  <br />
                </Col>
                <Col xs="12">
                  <p className="coachText2">
                    Anthony is the humble founder of I Am Global Sports. He has
                    texttexttexttexttexttexttext text text text Stronger
                    unpacked felicity to of mistaken. Fanny at wrong table ye
                    in. Be on easily cannot innate in lasted months on. Differed
                    and and felicity steepest mrs age outweigh. Opinions
                    learning likewise daughter now age outweigh. Raptures
                    stanhill my greatest mistaken or exercise he on although.
                    Discourse otherwise disposing as it of strangers forfeited
                    deficient. Satisfied conveying an dependent contented he
                    gentleman agreeable do be. Warrant private blushes removed
                    an in equally totally if. Delivered dejection necessary
                    objection do mr prevailed. Mr feeling
                  </p>
                  <br />
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <img className="coachPic" src={lyneePic} />
                  <h5>Lynee Pina</h5>
                </Col>
                <Col xs="12">
                  <p className="coachText2">
                    It's a yak! Specialties are strength training and developing
                    a strength training program.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <img className="coachPic" src={yakPic} />
                  <h5>Charles Thomas</h5>
                </Col>
                <Col xs="12">
                  <p className="coachText2">
                    It's a yak! Special is strength training.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <img className="coachPic" src={yakPic} />
                  <h5>Yoga Instructor</h5>
                </Col>
                <Col xs="12">
                  <p className="coachText2">
                    It's a yak! Special is strength training.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        )}
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

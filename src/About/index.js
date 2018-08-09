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
import aboutPic from '../images/about-us-header.png';

import anthonyPic from '../images/bio-anthony.jpg';
import lyneePic from '../images/bio-lynee.jpg';
import charlesPic from '../images/bio-charles.png';

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
                <DropdownToggle nav caret>
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
            <Container className="containerStyle">
              <div className="facilityDiv">
                <Row>
                  <Col xs="12">
                    <h3 className="aboutText headerFontSize">OUR MISSION</h3>
                    <p className="aboutSubtext textFontSize">
                      I Am Global Sports offers personalized athletic training,
                      focusing on student athletes and families. Our programs
                      include individual strength training, our customized
                      Vertimax training, yoga classes, and adult bootcamp
                      classes. Whether you are a student athlete looking to step
                      up your game, a parent wanting to stay active, or simply
                      looking for an effective and injury-preventive routine, I
                      Am Global Sports has a training program designed for you.
                    </p>
                  </Col>
                </Row>
              </div>

              <br />
              <div className="facilityDiv">
                <Row>
                  <Col xs="10">
                    <h3 className="aboutText headerFontSize">
                      MEET THE COACHES
                    </h3>
                  </Col>
                  <Col xs="1" />
                </Row>
                <Row>
                  <Col xs="2">
                    <img className="coachPic" src={anthonyPic} />
                    <p className="textFontSize">
                      <b>Anthony Melvin</b>
                    </p>
                    <br />
                  </Col>
                  <Col xs="10">
                    <p className="coachText textFontSize">
                      Anthony is the humble founder of I Am Global Sports. He
                      has texttexttexttexttexttexttext text text text Stronger
                      unpacked felicity to of mistaken. Fanny at wrong table ye
                      in. Be on easily cannot innate in lasted months on.
                      Differed and and felicity steepest mrs age outweigh.
                      Opinions learning likewise daughter now age outweigh.
                      Raptures stanhill my greatest mistaken or exercise he on
                      although. Discourse otherwise disposing as it of strangers
                      forfeited deficient. Satisfied conveying an dependent
                      contented he gentleman agreeable do be. Warrant private
                      blushes removed an in equally totally if. Delivered
                      dejection necessary objection do mr prevailed. Mr feeling
                    </p>
                    <br />
                  </Col>
                  <Col xs="1" />
                </Row>
                <Row>
                  <Col xs="2">
                    <img className="coachPic" src={lyneePic} />
                    <p className="textFontSize">
                      <b>Lynee Pina</b>
                    </p>
                  </Col>
                  <Col xs="10">
                    <p className="coachText textFontSize">
                      As a young student, Lynee knew exactly how she could
                      combine her passion for science with her athletic talents.
                      She was only 14 when she started programming workouts,
                      coordinating her high school’s basketball team
                      conditioning. Today, she serves as a personal trainer and
                      strength training programmer for We Global Sports.
                      <br />
                      <br />
                      Lynee has worked with several All-American athletes in a
                      variety of sports and understands that different sports
                      and even positions within the same sport have different
                      biomechanical and physiological requirements. She uses her
                      knowledge of biomechanics, physics, physiology, and sports
                      to develop training programs that are totally dependent
                      upon the needs of the athlete.
                      <br />
                      <br />
                      Lynee is certified as a Strength & Conditioning Specialist
                      through the National Strength & Conditioning Association,
                      has studied and conducted research in the world-famous
                      Human Biomechanics & Physiology Lab in High Point, North
                      Carolina, and has 7 years of industry experience.
                    </p>
                  </Col>
                  <Col xs="1" />
                </Row>
                <br />
                <br />
                <Row>
                  <Col xs="2">
                    <img className="coachPic" src={charlesPic} />
                    <p className="textFontSize">
                      <b>Charles Thomas</b>
                    </p>
                  </Col>
                  <Col xs="10">
                    <p className="coachText textFontSize">
                      Charles is a personal trainer and bootcamp instructor with
                      a passion for helping others identify and meet their
                      fitness goals. His fitness and wellness journey started
                      with his six years of service in the US Marine Corps where
                      he was especially inspired by his bootcamp training.
                      <br />
                      <br />
                      Since then, he has put in over 25 years of industry
                      experience providing training, nutrition counseling, and
                      customer service to a variety of clients ranging from
                      young children to seniors. In addition to training at We
                      Global, Charles serves as a track coach in Fairfax County
                      high schools. He is a licensed and insured Personal
                      Trainer certified by the International Sports Sciences
                      Association (ISSA).
                      <br />
                      <br />
                      In his free time, Charles enjoy deep sea fishing and
                      traveling abroad where he has even been known to
                      guest-teach free classes to local communities in Panama
                      and Costa Rica.
                    </p>
                  </Col>
                  <Col xs="1" />
                </Row>
              </div>
            </Container>
          </div>
        )}
        {this.state.isPhone && (
          <div>
            <img className="aboutPic" src={aboutPic} />
            <div>
              <h3 className="aboutText3 headerFontSize2">OUR MISSION</h3>
              <p className="aboutSubtext3 textFontSize2">
                I Am Global Sports offers personalized athletic training,
                focusing on student athletes and families. Our programs include
                individual strength training, our customized Vertimax training,
                yoga classes, and adult bootcamp classes. Whether you are a
                student athlete looking to step up your game, a parent wanting
                to stay active, or simply looking for an effective and
                injury-preventive routine, I Am Global Sports has a training
                program designed for you.
              </p>
            </div>
            <Container className="containerStyle">
              <Row>
                <Col xs="12">
                  <h3 className="aboutText4 headerFontSize2">
                    MEET THE COACHES
                  </h3>
                </Col>
                <Col xs="12">
                  <img className="coachPic" src={anthonyPic} />
                  <p className="textFontSize2">
                    <b>Anthony Melvin</b>
                  </p>
                </Col>
                <Col xs="12">
                  <p className="coachText3 textFontSize2">
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
                  <p className="textFontSize2">
                    <b>Lynee Pina</b>
                  </p>
                </Col>
                <Col xs="12">
                  <p className="coachText3 textFontSize2">
                    As a young student, Lynee knew exactly how she could combine
                    her passion for science with her athletic talents. She was
                    only 14 when she started programming workouts, coordinating
                    her high school’s basketball team conditioning. Today, she
                    serves as a personal trainer and strength training
                    programmer for We Global Sports.
                    <br />
                    <br />
                    Lynee has worked with several All-American athletes in a
                    variety of sports and understands that different sports and
                    even positions within the same sport have different
                    biomechanical and physiological requirements. She uses her
                    knowledge of biomechanics, physics, physiology, and sports
                    to develop training programs that are totally dependent upon
                    the needs of the athlete.
                    <br />
                    <br />
                    Lynee is certified as a Strength & Conditioning Specialist
                    through the National Strength & Conditioning Association,
                    has studied and conducted research in the world-famous Human
                    Biomechanics & Physiology Lab in High Point, North Carolina,
                    and has 7 years of industry experience.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <img className="coachPic" src={charlesPic} />
                  <p className="textFontSize2">
                    <b>Charles Thomas</b>
                  </p>
                </Col>
                <Col xs="12">
                  <p className="coachText3 textFontSize2">
                    Charles is a personal trainer and bootcamp instructor with a
                    passion for helping others identify and meet their fitness
                    goals. His fitness and wellness journey started with his six
                    years of service in the US Marine Corps where he was
                    especially inspired by his bootcamp training.
                    <br />
                    <br />
                    Since then, he has put in over 25 years of industry
                    experience providing training, nutrition counseling, and
                    customer service to a variety of clients ranging from young
                    children to seniors. In addition to training at We Global,
                    Charles serves as a track coach in Fairfax County high
                    schools. He is a licensed and insured Personal Trainer
                    certified by the International Sports Sciences Association
                    (ISSA).
                    <br />
                    <br />
                    In his free time, Charles enjoy deep sea fishing and
                    traveling abroad where he has even been known to guest-teach
                    free classes to local communities in Panama and Costa Rica.
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

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

import './style.css';

import strengthPic from '../images/strength-header-text.png';
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
        <div className="strengthPicDiv">
          <img className="strengthPic" src={strengthPic} />
        </div>
        {!this.state.isPhone && (
          <Container className="containerStyle">
            <Row>
              <Col xs="7" className="facilityDiv">
                <p>
                  <h4 className="headerFontSize">
                    Pushing you to maximium performance with individualized
                    programs
                  </h4>
                </p>
                <p className="textFontSize">
                  Our strength training programs begin with a complimentary
                  evaluation which we use along with your personal goals to
                  design individual athletic training programs. All of our
                  programs are LMPTrainingSolutions, developed by our in-house
                  program director Lynee Pina, and take into account the
                  specific requirements of a sport and even distinct positions
                  within a team sport.
                </p>

                <p className="textFontSize">
                  Our strength trainers will teach you proper technique and push
                  you to your maximum performance using a variety of fitness
                  equipment including dumbbells, kettlebells, medicine balls,
                  squat racks, Vertimax, battle ropes, and much more. Regardless
                  of your athletic level, our training tools and equipment will
                  be sure to keep you challenged, engaged, and safe.
                </p>
                <br />
                <Link to="/contact" className="scheduleLink">
                  Appointments available by email only.
                </Link>
              </Col>
              <Col xs="1" />
              <Col xs="4" className="eventDiv">
                <h4>Availability and Pricing</h4>
                <div>
                  <b className="textFontSize">Schedule </b>
                </div>{' '}
                <div className="textFontSize">
                  {' '}
                  Monday-Saturday 6AM-10PM <br />
                </div>
                <br />
                <div>
                  <p className="textFontSize">
                    <b>Individual</b>
                    <br />
                    1 Session: $80 <br />
                    8 Sessions: $600 <br />
                    12 Sessions: $850 <br />
                    16 Sessions: $1040 <br />
                    24 Sessions: $1400 <br />
                    <br />
                    All packages include LMPTrainingSolutions customized program
                    and a standardized meal plan.
                  </p>
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
                    Pushing you to maximium performance with individualized
                    programs
                  </h4>
                </p>
                <p className="textFontSize2">
                  Our strength training programs begin with a complimentary
                  evaluation which we use along with your personal goals to
                  design individual athletic training programs. All of our
                  programs are LMPTrainingSolutions, developed by our in-house
                  program director Lynee Pina, and take into account the
                  specific requirements of a sport and even distinct positions
                  within a team sport.
                </p>
                <p className="textFontSize2">
                  Our strength trainers will teach you proper technique and push
                  you to your maximum performance using a variety of fitness
                  equipment including dumbbells, kettlebells, medicine balls,
                  squat racks, Vertimax, battle ropes, and much more. Regardless
                  of your athletic level, our training tools and equipment will
                  be sure to keep you challenged, engaged, and safe.
                </p>
                <br />
                <Link to="/contact" className="scheduleLink">
                  Appointments available by email only.
                </Link>{' '}
              </Col>
              <Col xs="1" />
            </Row>
            <br />
            <Row>
              <Col xs="1" />
              <Col xs="10" className="facilityDiv">
                <h4 className="headerFontSize2">Availability and Pricing</h4>
                <div>
                  <b className="textFontSize2">Schedule </b>
                </div>{' '}
                <div className="textFontSize2">
                  {' '}
                  Monday-Saturday 6AM-10PM <br />
                </div>
                <br />
                <div>
                  <p className="textFontSize2">
                    <b>Individual</b>
                    <br />
                    1 Session: $80 <br />
                    8 Sessions: $600 <br />
                    12 Sessions: $850 <br />
                    16 Sessions: $1040 <br />
                    24 Sessions: $1400 <br />
                    <br />
                    All packages include LMPTrainingSolutions customized program
                    and a standardized meal plan.
                  </p>
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
export default Strength;

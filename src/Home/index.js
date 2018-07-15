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

import dashboardPic from '../images/FullSizeRender6.jpeg';
import facilityPic from '../images/speed_hero.jpg';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isDesktop: false,
      isWideDesktop: false,
      isTable: false,
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
    375, 768, 1024, 1366;
    if (window.innerWidth > 1365) {
    } else if (window.innerWidth > 1023) {
    } else if (window.innerWidth > 767) {
    } else {
    }
    this.setState({ isDesktop: window.innerWidth > 1450 });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="App">
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/home">LOGO HERE</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink active href="/home">
                    Home
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Training
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/vertamax">
                      Vertamax/Agility
                    </DropdownItem>
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
        </div>

        <div className="dashboardPicDiv">
          <img className="dashboardPicStyle" src={dashboardPic} />
        </div>
        <div />
        <div className="whoWeAre">
          <h3>WHO WE ARE</h3>
          <p className="whoWeAreText">
            Our Philosophy @IAmGlobal is very simple. It is a methodology that
            can be applied to everyday life. There are 6 simple steps which are:
            Eat, Sleep, Train & Train, Practice, Play. We offer 4 types of
            training, specializing in student athlete training.
          </p>
        </div>
        <Container className="containerStyle">
          <Row>
            <Col xs="8">
              <h4>FACILITY</h4>
              <div>Hours: MONDAY-SATURDAY 6am-10pm</div>
              <div>Location: Somewhere in Virginia</div>
              <div>Description of Facility: iz a nice place lolz</div>
              <br />
              <img className="facilityPic" src={facilityPic} />
            </Col>
            <Col xs="4" className="eventDiv">
              <h4>UPCOMING EVENTS</h4>
              <i className="fa fa-calendar" />
              <div> Name: Anthonys special party</div>
              <div>When: July 17th from 10am to 4pm</div>
              <br />
              <i className="fa fa-calendar" />
              <div> Name: Pump iron with jimmy</div>
              <div>When: September 5th from 12pm to 3pm</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;

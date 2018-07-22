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

import dashboardPic from '../images/dashboard2.jpg';
import facilityPic from '../images/fac.jpg';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isDesktop: false,
      isWideDesktop: false,
      isTablet: false,
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
    if (window.innerWidth > 1365) {
      this.setState({
        isWideDesktop: true,
        isDesktop: false,
        isTablet: false,
        isPhone: false,
      });
    } else if (window.innerWidth > 1023) {
      this.setState({
        isWideDesktop: false,
        isDesktop: true,
        isTablet: false,
        isPhone: false,
      });
    } else if (window.innerWidth > 767) {
      this.setState({
        isWideDesktop: false,
        isDesktop: false,
        isTablet: true,
        isPhone: false,
      });
    } else {
      this.setState({
        isWideDesktop: false,
        isDesktop: false,
        isTablet: false,
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
                    <DropdownItem href="/vertimax">Vertimax</DropdownItem>
                    <DropdownItem href="/strength">Strength</DropdownItem>
                    <DropdownItem href="/yoga">
                      {' '}
                      Yoga (Coming soon)
                    </DropdownItem>
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
        {this.state.isWideDesktop && (
          <Container className="containerStyle">
            <Row>
              <Col xs="8">
                <h4>FACILITY</h4>
                <div>Hours: MONDAY-SATURDAY 6am-10pm</div>
                <div>Location: Somewhere in Virginia</div>
                <br />
                <div>
                  {' '}
                  &nbsp;&nbsp; iz a nice place. Really large building. Grey.{' '}
                </div>
                <br />
                <img className="facilityPic" src={facilityPic} />
              </Col>
              <Col xs="4" className="eventDiv">
                <h4>UPCOMING EVENTS</h4>
                <div className="eventInnerDiv">
                  <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br />
                  <i className="fa fa-calendar" />
                  <div> Name: Pump iron with jimmy</div>
                  <div>When: September 5th from 12pm to 3pm</div>
                  <br />
                  <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br />
                </div>
              </Col>
            </Row>
          </Container>
        )}
        {this.state.isDesktop && (
          <Container className="containerStyle">
            <Row>
              <Col xs="8">
                <h4>FACILITY</h4>
                <div>Hours: MONDAY-SATURDAY 6am-10pm</div>
                <div>Location: Somewhere in Virginia</div>
                <br />
                <div>
                  {' '}
                  &nbsp;&nbsp; iz a nice place. Really large building. Grey.{' '}
                </div>
                <br />
                <img className="facilityPic" src={facilityPic} />
              </Col>
              <Col xs="4" className="eventDiv">
                <h4>UPCOMING EVENTS</h4>
                <div className="eventInnerDiv">
                  <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br />
                  <i className="fa fa-calendar" />
                  <div> Name: Pump iron with jimmy</div>
                  <div>When: September 5th from 12pm to 3pm</div>
                  <br />
                  <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br />
                </div>
              </Col>
            </Row>
          </Container>
        )}
        {this.state.isTablet && (
          <Container className="containerStyle">
            <Row>
              <Col xs="8">
                <h4>FACILITY</h4>
                <div>Hours: MONDAY-SATURDAY 6am-10pm</div>
                <div>Location: Somewhere in Virginia</div>
                <br />
                <div>
                  {' '}
                  &nbsp;&nbsp; iz a nice place. Really large building. Grey.{' '}
                </div>
                <br />
                <img className="facilityPic" src={facilityPic} />
              </Col>
              <Col xs="4" className="eventDiv">
                <h4>UPCOMING EVENTS</h4>
                <div className="eventInnerDiv">
                  <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br />
                  <i className="fa fa-calendar" />
                  <div> Name: Pump iron with jimmy</div>
                  <div>When: September 5th from 12pm to 3pm</div>
                  <br />
                  <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                  <div> Name: Anthonys special party</div>
                  <div>When: July 17th from 10am to 4pm</div>
                  <br /> <i className="fa fa-calendar" />
                </div>
              </Col>
            </Row>
          </Container>
        )}
        {this.state.isPhone && (
          <Container className="containerStyle">
            <Row>
              <Col xs="12">
                <h4>FACILITY</h4>
                <div>Hours: MONDAY-SATURDAY 6am-10pm</div>
                <div>Location: Somewhere in Virginia</div>
                <br />
                <div>
                  {' '}
                  &nbsp;&nbsp; iz a nice place. Really large building. Grey.{' '}
                </div>
                <br />
                <img className="facilityPic" src={facilityPic} />
                <br />
                <br />
                <div className="eventDiv">
                  <h4>UPCOMING EVENTS</h4>
                  <div className="eventInnerDiv">
                    <i className="fa fa-calendar" />
                    <div> Name: Anthonys special party</div>
                    <div>When: July 17th from 10am to 4pm</div>
                    <br />
                    <i className="fa fa-calendar" />
                    <div> Name: Pump iron with jimmy</div>
                    <div>When: September 5th from 12pm to 3pm</div>
                    <br />
                    <i className="fa fa-calendar" />
                    <div> Name: Anthonys special party</div>
                    <div>When: July 17th from 10am to 4pm</div>
                    <br /> <i className="fa fa-calendar" />
                    <div> Name: Anthonys special party</div>
                    <div>When: July 17th from 10am to 4pm</div>
                    <br /> <i className="fa fa-calendar" />
                    <div> Name: Anthonys special party</div>
                    <div>When: July 17th from 10am to 4pm</div>
                    <br /> <i className="fa fa-calendar" />
                    <div> Name: Anthonys special party</div>
                    <div>When: July 17th from 10am to 4pm</div>
                    <br /> <i className="fa fa-calendar" />
                  </div>
                </div>
              </Col>
              <Col xs="4" />
            </Row>
          </Container>
        )}
      </div>
    );
  }
}
export default Home;

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
          <Navbar light expand="md">
            <NavbarBrand href="/home">
              <img className="logo" src={logoPic} />
            </NavbarBrand>
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
                      Yoga (Coming Soon)
                    </DropdownItem>
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
        </div>

        <div className="dashboardPicDiv">
          <img className="dashboardPicStyle" src={dashboardPic} />
        </div>
        <div />
        <div className="whoWeAre">
          <h4>EAT, SLEEP, TRAIN... AND TRAIN, PRACTICE, PLAY!... AT AN OPTIMAL LEVEL.</h4>
          <p className="whoWeAreText">
              I Am Global Sports offers personalized athletic training, focusing on student athletes and their families.
          </p>
          <p className="whoWeAreText" />
        </div>
        {this.state.isWideDesktop && (
          <Container className="containerStyle">
            <Row>
              <Col xs="7" className="facilityDiv">
                  <h4>FACILITY</h4>
                  <div><b>Hours of Operation</b></div>
                  <p>Monday-Saturday 6am-10pm <br />
                      By appointment only.</p>
                  <div><b>Location</b></div>
                  <p>1127 International Parkway <br />
                      Suite 105 <br />
                      Fredericksburg, VA 22406</p>
                  <br />
                  <img className="facilityPic" src={facilityPic} />
                  <div>Featuring indoor turf and a group fitness room</div>
              </Col>
              <Col xs="1" />
              <Col xs="4" className="eventDiv">
                <h4>UPCOMING EVENTS</h4>
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/weglobalfitness/"
                  data-tabs="events"
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="true"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/weglobalfitness/"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/weglobalfitness/">
                      We Global Fitness
                    </a>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </Container>
        )}
        {this.state.isDesktop && (
          <Container className="containerStyle">
            <Row>
              <Col xs="7" className="facilityDiv">
                  <h4>FACILITY</h4>
                  <div><b>Hours of Operation</b></div>
                  <p>Monday-Saturday 6am-10pm <br />
                      By appointment only.</p>
                  <div><b>Location</b></div>
                  <p>1127 International Parkway <br />
                      Suite 105 <br />
                      Fredericksburg, VA 22406</p>
                  <br />
                  <img className="facilityPic" src={facilityPic} />
                  <div>Featuring indoor turf and a group fitness room</div>
              </Col>
              <Col xs="1" />
              <Col xs="4" className="eventDiv">
                <h4>UPCOMING EVENTS</h4>
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/weglobalfitness/"
                  data-tabs="events"
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="true"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/weglobalfitness/"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/weglobalfitness/">
                      We Global Fitness
                    </a>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </Container>
        )}
        {this.state.isTablet && (
          <Container className="containerStyle">
            <Row>
              <Col xs="7" className="facilityDiv">
                  <h4>FACILITY</h4>
                  <div><b>Hours of Operation</b></div>
                  <p>Monday-Saturday 6am-10pm <br />
                      By appointment only.</p>
                  <div><b>Location</b></div>
                  <p>1127 International Parkway <br />
                      Suite 105 <br />
                      Fredericksburg, VA 22406</p>
                  <br />
                  <img className="facilityPic" src={facilityPic} />
                  <div>Featuring indoor turf and a group fitness room</div>
              </Col>
              <Col xs="1" />
              <Col xs="4" className="eventDiv">
                <h4>UPCOMING EVENTS</h4>
                <div
                  class="fb-page"
                  data-href="https://www.facebook.com/weglobalfitness/"
                  data-tabs="events"
                  data-small-header="true"
                  data-adapt-container-width="true"
                  data-hide-cover="true"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite="https://www.facebook.com/weglobalfitness/"
                    class="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/weglobalfitness/">
                      We Global Fitness
                    </a>
                  </blockquote>
                </div>
              </Col>
            </Row>
          </Container>
        )}
        {this.state.isPhone && (
          <Container className="containerStyle">
            <Row>
              <Col xs="1" />
              <Col xs="10" className="facilityDiv">
                <h4>FACILITY</h4>
                <div><b>Hours of Operation</b></div>
                <p>Monday-Saturday 6am-10pm <br />
                    By appointment only.</p>
                <div><b>Location</b></div>
                <p>1127 International Parkway <br />
                    Suite 105 <br />
                    Fredericksburg, VA 22406</p>
                <br />
                <img className="facilityPic" src={facilityPic} />
                <div>Featuring indoor turf and a group fitness room</div>
              </Col>
              <Col xs="1" />
            </Row>
            <br />
            <Row>
              <Col xs="1" />
              <Col xs="10" className="facilityDiv">
                <div className="eventDivSmall">
                  <h4>UPCOMING EVENTS</h4>
                  <div
                    class="fb-page"
                    data-href="https://www.facebook.com/weglobalfitness/"
                    data-tabs="events"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="true"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite="https://www.facebook.com/weglobalfitness/"
                      class="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/weglobalfitness/">
                        We Global Fitness
                      </a>
                    </blockquote>
                  </div>
                </div>
              </Col>
              <Col xs="1" />
            </Row>
          </Container>
        )}
      </div>
    );
  }
}
export default Home;

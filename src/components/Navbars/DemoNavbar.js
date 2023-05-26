import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/mahfaztakLogo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <Media
                    className="d-flex align-items-center"
                    href="/service-page"
                    target="_blank"
                  >
                    <Media body className="ml-3">
                      <span className="nav-link-inner--text"
                      style = {{color: "white"}}
                      >Our Services</span>
                    </Media>
                  </Media>
                  <Media
                    className="d-flex align-items-center"
                    href="/aboutus-page"
                    target="_blank"
                  >
                    <Media body className="ml-3">
                      <span className="nav-link-inner--text"
                      style = {{color: "white"}}
                      >About Us</span>
                    </Media>
                  </Media>
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Notifications</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem >
                        <i className="fa fa-exclamation" />
                        Reminder: Electricity Bill is due next Thursday.
                      </DropdownItem>
                      <DropdownItem >
                        <i className="fa fa-check" />
                        Issue Resolution: Website is now faster than ever.
                      </DropdownItem>
                      <DropdownItem >
                        <i className="fa fa-exclamation" />
                        Reminder: Loan payment is due next Sunday.
                      </DropdownItem>
                      <DropdownItem >
                        <i className="fa fa-exclamation" />
                        Reminder: Credit Card Bill is due on 27/6/2023.
                      </DropdownItem>
                      <DropdownItem >
                        <i className="fa fa-check" />
                        Issue Resolution: You can now pay securely online.
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/software-engineering-2023/aNameWeCanFindInCamelCase"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="/login-page"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-sign-out  mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Log out
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;

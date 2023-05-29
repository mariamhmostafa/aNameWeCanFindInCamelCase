import React, { createRef, Component } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal,
  Alert,
} from "reactstrap";

// core components
import BankerNavBar from "components/Navbars/BankerNavBar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Banker extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  constructor(props) {
    super(props);
    this.scollToRef1 = createRef();
    this.scollToRef2 = createRef();
    this.scollToRef3 = createRef();
  }
  state = {
    tabs: 1,
    defaultModal1: false,
    defaultModal2: false,
    defaultModal3: false,
    defaultModal4: false,
    defaultModal5: false,
    defaultModal6: false,
    defaultModal7: false,
    defaultModal8: false,
    defaultModal9: false,
    defaultModal10: false,
    defaultModal11: false,
    defaultModal13: false,
    defaultModal14: false,
    defaultModal15: false,
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };

  render() {
    return (
      <>
        <BankerNavBar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Hello brazar <span>Here's your work for today</span>
                      </h1>
                      <p className="lead text-white">
                        Enta khalas shoghl wala modeer fe khasm
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="default"
                          onClick={() =>
                            this.scollToRef2.current.scrollIntoView({
                              behavior: "smooth",
                            })
                          }
                        >
                          <span className="btn-inner--icon mr-1">
                            <i class="fa fa-smile-o" aria-hidden="true"></i>
                          </span>
                          <span className="btn-inner--text">View Requests</span>
                        </Button>

                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          onClick={() =>
                            this.scollToRef1.current.scrollIntoView({
                              behavior: "smooth",
                            })
                          }
                        >
                          <span className="btn-inner--icon mr-1">
                            <i class="fa fa-file-o" aria-hidden="true"></i>
                          </span>
                          <span className="btn-inner--text">View reports</span>
                        </Button>

                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          onClick={() =>
                            this.scollToRef3.current.scrollIntoView({
                              behavior: "smooth",
                            })
                          }
                        >
                          <span className="btn-inner--icon mr-1">
                            <i
                              class="fa fa-address-book-o"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span className="btn-inner--text">
                            View all clients
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          {/* Announcement */}
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="fa fa-bullhorn" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Important Announcement
                          </h6>
                          <p className="description mt-3">
                            Dear Valued Customers,
                          </p>
                          <p className="description mt-3">
                            We are excited to announce that Mahfaztak will be
                            implementing a service upgrade to enhance your
                            banking experience. This upgrade is scheduled to
                            take place on 20/6/2023 and will involve
                            improvements to our digital banking platform and
                            additional features for your convenience.
                          </p>
                          <p className="description mt-3">
                            During the upgrade, there will be a temporary
                            interruption in some of our services. Online and
                            mobile banking services may be temporarily
                            unavailable on 20/6/2023 from 22:00 to 23:00. We
                            apologize for any inconvenience this may cause and
                            assure you that our team is working diligently to
                            minimize the downtime and complete the upgrade as
                            quickly as possible.
                          </p>
                          <p className="description mt-3">
                            Once the upgrade is complete, you can look forward
                            to a more seamless and user-friendly online banking
                            experience. The enhanced platform will provide
                            improved navigation, enhanced security measures, and
                            additional functionalities designed to simplify your
                            financial management.
                          </p>
                          <p className="description mt-3">
                            Sincerely,
                            <br></br>
                            Mahfaztak.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              announcement
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              upgrade
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              launch
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          {/* Requests */}
          <section
            className="section section-lg bg-default pt-lg-0 "
            ref={this.scollToRef2}
          >
            <Card className="shadow shadow-lg--hover mt-5" color="default">
              <CardBody>
                <div className="nav-wrapper">
                  <Nav
                    className="nav-fill flex-column flex-md-row"
                    id="tabs-icons-text"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.tabs === 1}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.tabs === 1,
                        })}
                        onClick={(e) => this.toggleNavs(e, "tabs", 1)}
                        href="#pablo"
                        role="tab"
                      >
                        <i class="fa fa-money" aria-hidden="true"></i>
                        View Loan Requests
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        aria-selected={this.state.tabs === 2}
                        className={classnames("mb-sm-3 mb-md-0", {
                          active: this.state.tabs === 2,
                        })}
                        onClick={(e) => this.toggleNavs(e, "tabs", 2)}
                        href="#pablo"
                        role="tab"
                      >
                        <i class="fa fa-credit-card-alt" aria-hidden="true"></i>
                        View Credit Card Requests
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <Card className="shadow">
                  <CardBody>
                    <TabContent activeTab={"tabs" + this.state.tabs}>
                      <TabPane tabId="tabs1">
                        <p className="description">
                          <Row>
                            <Col>
                              <span>
                                <h5>Client Name</h5>
                              </span>
                            </Col>
                            <Col>
                              <span>
                                <h5>Loan Type</h5>
                              </span>
                            </Col>

                            <Col>
                              <span>
                                <h5>Loan Amount</h5>
                              </span>
                            </Col>
                            <Col>
                              <span>
                                <h5>Date</h5>
                              </span>
                            </Col>
                            <Col></Col>
                          </Row>

                          <Row>
                            <Col>
                              <span>Basboosa</span>
                            </Col>
                            <Col>
                              <span>Personal</span>
                            </Col>

                            <Col>
                              <span>5000</span>
                            </Col>
                            <Col>
                              <span>24/5/2023</span>
                            </Col>
                            <Col>
                              {" "}
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="default"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal1")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                              <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.defaultModal1}
                                toggle={() => this.toggleModal("defaultModal1")}
                              >
                                <div className="modal-header">
                                  <h6
                                    className="modal-title"
                                    id="modal-title-default"
                                  >
                                    Basboosa el amoora
                                  </h6>
                                  <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal1")
                                    }
                                  >
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  {
                                    <Container>
                                      <span> Name: Basboosa Smith </span>{" "}
                                      <br></br>
                                      <span> Age: 35 </span>
                                      <br></br>
                                      <span>Occupation: professional meow</span>
                                      <br></br>
                                      <span> Monthly Income: $9000,000000</span>
                                      <br></br>
                                      <span> Account Number: 123456789</span>
                                      <br></br>
                                      <span>Credit Score: 1000</span>
                                      <br></br>
                                      <span> Loan Amount Requested: $5000</span>
                                      <br></br>
                                      <span>Loan Purpose: Meow products</span>
                                      <br></br>
                                      <span> Period: 4 months debts.</span>
                                    </Container>
                                  }
                                </div>
                                <div className="modal-footer">
                                  <Button
                                    color="success"
                                    type="button"
                                    onClick={() => alert("Request Accepted")}
                                  >
                                    Accept Request
                                  </Button>
                                  <Button
                                    className="ml-auto"
                                    color="danger"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal1")
                                    }
                                  >
                                    Reject
                                  </Button>
                                </div>
                              </Modal>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>Mariouma</span>
                            </Col>
                            <Col>
                              <span>Car</span>
                            </Col>

                            <Col>
                              <span>800,000</span>
                            </Col>
                            <Col>
                              <span>7/3/2022</span>
                            </Col>
                            <Col>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="default"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal2")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                              <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.defaultModal2}
                                toggle={() => this.toggleModal("defaultModal2")}
                              >
                                <div className="modal-header">
                                  <h6
                                    className="modal-title"
                                    id="modal-title-default"
                                  >
                                    Mariouma el amoora
                                  </h6>
                                  <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal2")
                                    }
                                  >
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  {
                                    <Container>
                                      <span> Name: Mrm Smith </span> <br></br>
                                      <span> Age: 35 </span>
                                      <br></br>
                                      <span>Occupation: hkr</span>
                                      <br></br>
                                      <span> Monthly Income: $5,00</span>
                                      <br></br>
                                      <span> Account Number: 26376276</span>
                                      <br></br>
                                      <span>Credit Score: 20</span>
                                      <br></br>
                                      <span>
                                        {" "}
                                        Loan Amount Requested: $800,000
                                      </span>
                                      <br></br>
                                      <span>
                                        Loan Purpose: New car to leave ahmed's
                                        car f 7alha
                                      </span>
                                      <br></br>
                                      <span> Period: 24 months debts.</span>
                                    </Container>
                                  }
                                </div>
                                <div className="modal-footer">
                                  <Button
                                    color="success"
                                    type="button"
                                    onClick={() => alert("Request Accepted")}
                                  >
                                    Accept Request
                                  </Button>
                                  <Button
                                    className="ml-auto"
                                    color="danger"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal2")
                                    }
                                  >
                                    Reject
                                  </Button>
                                </div>
                              </Modal>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>Majid elmohandes</span>
                            </Col>
                            <Col>
                              <span>Personal</span>
                            </Col>

                            <Col>
                              <span>50</span>
                            </Col>
                            <Col>
                              <span>21/3/2002</span>
                            </Col>
                            <Col>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="default"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal3")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                              <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.defaultModal3}
                                toggle={() => this.toggleModal("defaultModal3")}
                              >
                                <div className="modal-header">
                                  <h6
                                    className="modal-title"
                                    id="modal-title-default"
                                  >
                                    Majooda
                                  </h6>
                                  <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal3")
                                    }
                                  >
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  {
                                    <Container>
                                      <span> Name: Majid Smith </span> <br></br>
                                      <span> Age: 35 </span>
                                      <br></br>
                                      <span>Occupation: Software Engineer</span>
                                      <br></br>
                                      <span> Monthly Income: $5,000</span>
                                      <br></br>
                                      <span> Account Number: 34675764</span>
                                      <br></br>
                                      <span>Credit Score: 20</span>
                                      <br></br>
                                      <span> Loan Amount Requested: $50</span>
                                      <br></br>
                                      <span>
                                        Loan Purpose: Debt consolidation
                                        Repayment
                                      </span>
                                      <br></br>
                                      <span> Period: 24 months debts.</span>
                                    </Container>
                                  }
                                </div>
                                <div className="modal-footer">
                                  <Button
                                    color="success"
                                    type="button"
                                    onClick={() => alert("Request Accepted")}
                                  >
                                    Accept Request
                                  </Button>
                                  <Button
                                    className="ml-auto"
                                    color="danger"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal3")
                                    }
                                  >
                                    Reject
                                  </Button>
                                </div>
                              </Modal>
                            </Col>
                          </Row>
                        </p>
                      </TabPane>
                      <TabPane tabId="tabs2">
                        <p className="description">
                          <Row>
                            <Col>
                              <span>
                                <h5>Client Name</h5>{" "}
                              </span>
                            </Col>
                            <Col>
                              <span>
                                <h5>Client ID</h5>{" "}
                              </span>
                            </Col>

                            <Col>
                              <span>
                                <h5>Card Type</h5>{" "}
                              </span>
                            </Col>
                            <Col>
                              <span>
                                <h5>Salary</h5>{" "}
                              </span>
                            </Col>
                            <Col></Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>Basboosa</span>
                            </Col>
                            <Col>
                              <span>58-1</span>
                            </Col>

                            <Col>
                              <span>Platinum</span>
                            </Col>
                            <Col>
                              <span>900000</span>
                            </Col>
                            <Col>
                              {" "}
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="default"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal4")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                              <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.defaultModal4}
                                toggle={() => this.toggleModal("defaultModal4")}
                              >
                                <div className="modal-header">
                                  <h6
                                    className="modal-title"
                                    id="modal-title-default"
                                  >
                                    Basboosa el amoora
                                  </h6>
                                  <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal4")
                                    }
                                  >
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  {
                                    <Container>
                                      <span> Name: Basboosa Smith </span>{" "}
                                      <br></br>
                                      <span> Age: 35 </span>
                                      <br></br>
                                      <span>Occupation: Meowww</span>
                                      <br></br>
                                      <span>
                                        {" "}
                                        Annual Income: $9,000000000000
                                      </span>
                                      <br></br>
                                      <span>Credit Score: 40000</span>
                                      <br></br>
                                      <span> Address: with Mariouma</span>
                                    </Container>
                                  }
                                </div>
                                <div className="modal-footer">
                                  <Button
                                    color="success"
                                    type="button"
                                    onClick={() => alert("Request Accepted")}
                                  >
                                    Accept Request
                                  </Button>
                                  <Button
                                    className="ml-auto"
                                    color="danger"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal4")
                                    }
                                  >
                                    Reject
                                  </Button>
                                </div>
                              </Modal>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>Mariouma</span>
                            </Col>
                            <Col>
                              <span>52-4086</span>
                            </Col>

                            <Col>
                              <span>Diamond</span>
                            </Col>
                            <Col>
                              <span>70,000</span>
                            </Col>
                            <Col>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="default"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal5")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                              <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.defaultModal5}
                                toggle={() => this.toggleModal("defaultModal5")}
                              >
                                <div className="modal-header">
                                  <h6
                                    className="modal-title"
                                    id="modal-title-default"
                                  >
                                    Mariouma el amoora
                                  </h6>
                                  <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal5")
                                    }
                                  >
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  {
                                    <Container>
                                      <span> Name: Mariouma Smith </span>{" "}
                                      <br></br>
                                      <span> Age: 35 </span>
                                      <br></br>
                                      <span>Occupation: hkr</span>
                                      <br></br>
                                      <span> Annual Income: $7,00000</span>
                                      <br></br>
                                      <span>Credit Score: 75</span>
                                      <br></br>
                                      <span> Address: Madinet Nasr</span>
                                    </Container>
                                  }
                                </div>
                                <div className="modal-footer">
                                  <Button
                                    color="success"
                                    type="button"
                                    onClick={() => alert("Request Accepted")}
                                  >
                                    Accept Request
                                  </Button>
                                  <Button
                                    className="ml-auto"
                                    color="danger"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal5")
                                    }
                                  >
                                    Reject
                                  </Button>
                                </div>
                              </Modal>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <span>Majid elmohandes</span>
                            </Col>
                            <Col>
                              <span>52-2777</span>
                            </Col>

                            <Col>
                              <span>Fo2ara</span>
                            </Col>
                            <Col>
                              <span>3,000</span>
                            </Col>
                            <Col>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="default"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal6")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                              <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.defaultModal6}
                                toggle={() => this.toggleModal("defaultModal6")}
                              >
                                <div className="modal-header">
                                  <h6
                                    className="modal-title"
                                    id="modal-title-default"
                                  >
                                    Majooda
                                  </h6>
                                  <button
                                    aria-label="Close"
                                    className="close"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal6")
                                    }
                                  >
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  {
                                    <Container>
                                      <span> Name: Majid Smith </span> <br></br>
                                      <span> Age: 35 </span>
                                      <br></br>
                                      <span>Occupation: Software Engineer</span>
                                      <br></br>
                                      <span> Annual Income: $5,00000</span>
                                      <br></br>
                                      <span>Credit Score: 750</span>
                                      <br></br>
                                      <span> Address: GUC</span>
                                    </Container>
                                  }
                                </div>
                                <div className="modal-footer">
                                  <Button
                                    color="success"
                                    type="button"
                                    onClick={() => alert("Request Accepted")}
                                  >
                                    Accept Request
                                  </Button>
                                  <Button
                                    className="ml-auto"
                                    color="danger"
                                    data-dismiss="modal"
                                    type="button"
                                    onClick={() =>
                                      this.toggleModal("defaultModal6")
                                    }
                                  >
                                    Reject
                                  </Button>
                                </div>
                              </Modal>
                            </Col>
                          </Row>
                        </p>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </CardBody>
            </Card>
          </section>
          <section className="section bg-secondary">
            <Container></Container>
          </section>
          <section
            className="section pb-0 bg-gradient-warning"
            ref={this.scollToRef1}
          >
            <Container>
              <div className="d-flex px-3">
                <div>
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i class="fa fa-file-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="pl-4">
                  <h4 className="display-3 text-white">Reports</h4>
                  <p className="text-white">
                    You can find reports of all the customers here.
                  </p>
                </div>
              </div>

              <Card className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <Container>
                    <div className="d-flex px-3"></div>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/brand/CreditCard.jpeg")}
                        style={{ width: "200px" }}
                      />
                    </div>

                    <div class="panel panel-success">
                      <div class="panel-heading">Reports</div>

                      <table class="table">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>

                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>1-</td>
                          <td>Meghan</td>

                          <td>21/3/2002</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal7")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal7}
                              toggle={() => this.toggleModal("defaultModal7")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Report Details
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal7")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span> CreditCard Number:52778 </span>{" "}
                                    <br></br>
                                    <span>
                                      {" "}
                                      Issue Description: Elcredit card ets7b
                                      mnha floos ya shwayet 7rameya{" "}
                                    </span>
                                  </Container>
                                }
                              </div>
                              <div className="modal-footer">
                                <Button
                                  color="success"
                                  type="button"
                                  onClick={() => alert("Issue Resolved")}
                                >
                                  Resolve Issue
                                </Button>
                                <Button
                                  className="ml-auto"
                                  color="danger"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal7")
                                  }
                                >
                                  Ignore
                                </Button>
                              </div>
                            </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>2-</td>
                          <td>Hamada</td>
                          <td>19/5/2077</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal8")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal8}
                              toggle={() => this.toggleModal("defaultModal8")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Report Details
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal8")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span> CreditCard Number:5256777 </span>{" "}
                                    <br></br>
                                    <span>
                                      {" "}
                                      Issue Description: Points mrg3etsh{" "}
                                    </span>
                                  </Container>
                                }
                              </div>
                              <div className="modal-footer">
                                <Button
                                  color="success"
                                  type="button"
                                  onClick={() => alert("Issue Resolved")}
                                >
                                  Resolve Issue
                                </Button>
                                <Button
                                  className="ml-auto"
                                  color="danger"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal8")
                                  }
                                >
                                  Ignore
                                </Button>
                              </div>
                            </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>3-</td>
                          <td>Helal</td>
                          <td>16/10/2002</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal9")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal9}
                              toggle={() => this.toggleModal("defaultModal9")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Report Details
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal9")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span> CreditCard Number:999998 </span>{" "}
                                    <br></br>
                                    <span>
                                      {" "}
                                      Issue Description: Pls giveme sm money Im
                                      broke{" "}
                                    </span>
                                  </Container>
                                }
                              </div>
                              <div className="modal-footer">
                                <Button
                                  color="success"
                                  type="button"
                                  onClick={() => alert("Issue Resolved")}
                                >
                                  Resolve Issue
                                </Button>
                                <Button
                                  className="ml-auto"
                                  color="danger"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal9")
                                  }
                                >
                                  Ignore
                                </Button>
                              </div>
                            </Modal>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Container>
                </CardBody>
              </Card>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Build something</h2>
                  <p className="lead text-white">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record low maximum sea ice extent tihs year down
                    to low ice.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Want to work with us?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>

          <section
            className="section pb-0 bg-gradient-warning"
            ref={this.scollToRef3}
          >
            <Container>
              <div className="d-flex px-3">
                <div>
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i class="fa fa-address-book-o" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="pl-4">
                  <h4 className="display-3 text-white">Clients</h4>
                  <p className="text-white">
                    You can find details of all the customers here.
                  </p>
                </div>
              </div>

              <Card className="shadow shadow-lg--hover mt-5">
                <CardBody>
                  <Container>
                    <div className="d-flex px-3"></div>
                    <div className="px-4">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/brand/Clientsss.jpeg")}
                        style={{ width: "200px" }}
                      />
                    </div>

                    <div class="panel panel-success">
                      <div class="panel-heading">Clients</div>

                      <table class="table">
                        <tr>
                          <th>Name</th>
                          <th>Namtional ID</th>
                          <th>Date of Birth</th>
                          <th>More Details</th>
                        </tr>
                        <tr>
                          <td>Basboosa</td>
                          <td>7709795757</td>
                          <td>23/2/1998</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal10")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal10}
                              toggle={() => this.toggleModal("defaultModal10")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Basboosa Smith
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal10")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span> Account Numbers: 9479, 4872 </span>{" "}
                                    <br></br>
                                    <span>
                                      {" "}
                                      CreditCard Numbers: 99999999999,
                                      100100100100, 123456789{" "}
                                    </span>{" "}
                                    <br></br>
                                    <span> Number of loans: 1 </span>
                                  </Container>
                                }
                              </div>
                            </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>Meghan</td>
                          <td>5500795757</td>
                          <td>21/3/2002</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal13")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal13}
                              toggle={() => this.toggleModal("defaultModal13")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Meghan Micheal
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal13")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span>
                                      {" "}
                                      Account Numbers: 1111, 1223, 9990{" "}
                                    </span>{" "}
                                    <br></br>
                                    <span>
                                      {" "}
                                      CreditCard Numbers: 52778, 88980{" "}
                                    </span>{" "}
                                    <br></br>
                                    <span> Number of loans: 0 </span>
                                  </Container>
                                }
                              </div>
                            </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>Mariouma</td>
                          <td>5500000757</td>
                          <td>21/12/2002</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal14")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal14}
                              toggle={() => this.toggleModal("defaultModal14")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Mariouma Marmora
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal14")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span> Account Numbers: 5656 </span>{" "}
                                    <br></br>
                                    <span> CreditCard Numbers: </span> <br></br>
                                    <span> Number of loans: 1 </span>
                                  </Container>
                                }
                              </div>
                            </Modal>
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td>Hamada</td>
                          <td>7875693568</td>
                          <td>19/5/2077</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal11")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal11}
                              toggle={() => this.toggleModal("defaultModal11")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Hamada Levi
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal11")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span> Account numbers: 8988, 7777 </span>{" "}
                                    <br></br>
                                    <span>
                                      {" "}
                                      CreditCard numbers: 5256777
                                    </span>{" "}
                                    <br></br>
                                    <span> Number of loans: 0 </span>
                                  </Container>
                                }
                              </div>
                            </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>Helal</td>
                          <td>89909898780</td>
                          <td>16/10/2002</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal12")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal12}
                              toggle={() => this.toggleModal("defaultModal12")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Helal Shams
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal12")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span> Account Numbers: 9003, 2123 </span>{" "}
                                    <br></br>
                                    <span>
                                      {" "}
                                      CreditCard Numbers: 999998{" "}
                                    </span>{" "}
                                    <br></br>
                                    <span> Number of loans: 0 </span>
                                  </Container>
                                }
                              </div>
                            </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>Majid</td>
                          <td>89909898080</td>
                          <td>17/10/2002</td>
                          <td>
                            <div>
                              <Button
                                block
                                className="mb-3"
                                size="sm"
                                color="primary"
                                type="button"
                                onClick={() =>
                                  this.toggleModal("defaultModal15")
                                }
                              >
                                <i
                                  class="fa fa-address-card"
                                  aria-hidden="true"
                                ></i>{" "}
                                View Details
                              </Button>
                            </div>
                            <Modal
                              className="modal-dialog-centered"
                              isOpen={this.state.defaultModal15}
                              toggle={() => this.toggleModal("defaultModal15")}
                            >
                              <div className="modal-header">
                                <h6
                                  className="modal-title"
                                  id="modal-title-default"
                                >
                                  Majid Elmohandes
                                </h6>
                                <button
                                  aria-label="Close"
                                  className="close"
                                  data-dismiss="modal"
                                  type="button"
                                  onClick={() =>
                                    this.toggleModal("defaultModal15")
                                  }
                                >
                                  <span aria-hidden={true}>×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                {
                                  <Container>
                                    <span> Account Numbers: 7774 </span>{" "}
                                    <br></br>
                                    <span>
                                      {" "}
                                      CreditCard Numbers: 8980011{" "}
                                    </span>{" "}
                                    <br></br>
                                    <span> Number of loans: 1 </span>
                                  </Container>
                                }
                              </div>
                            </Modal>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Container>
                </CardBody>
              </Card>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <Download />
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Banker;

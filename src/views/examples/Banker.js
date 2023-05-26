import React from "react";
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
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Banker extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
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
        <DemoNavbar />
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
                          onClick={() => alert("You're good enough! :)")}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i class="fa fa-smile-o" aria-hidden="true"></i>
                          </span>
                          <span className="btn-inner--text">Cheerup msg?</span>
                        </Button>

                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          onClick={() => this.toggleModal("defaultModal")}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">View reports</span>
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
                  <i className="ni ni-cloud-upload-96 mr-2" />
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
                  <i className="ni ni-bell-55 mr-2" />
                  View Credit Card Requests
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={"tabs" + this.state.tabs}>
                <TabPane tabId="tabs1">
                  <p className="description"></p>
                  <p className="description">
                    <p className="description">
                      <Row>
                        <Col>
                          <span>Client Name</span>
                        </Col>
                        <Col>
                          <span>Loan Type</span>
                        </Col>

                        <Col>
                          <span>Loan Amount</span>
                        </Col>
                        <Col>
                          <span>Date</span>
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
                            color="primary"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal1")}
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
                                  <span> Name: Basboosa Smith </span> <br></br>
                                  <span> Age: 35 </span>
                                  <br></br>
                                  <span>Occupation: professional meow</span>
                                  <br></br>
                                  <span> Monthly Income: $9000,000000</span>
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
                            color="primary"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal2")}
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
                                  <span>Credit Score: 20</span>
                                  <br></br>
                                  <span> Loan Amount Requested: $800,000</span>
                                  <br></br>
                                  <span>
                                    Loan Purpose: New car to leave ahmed's car f
                                    7alha
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
                            color="primary"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal3")}
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
                                  <span>Credit Score: 20</span>
                                  <br></br>
                                  <span> Loan Amount Requested: $50</span>
                                  <br></br>
                                  <span>
                                    Loan Purpose: Debt consolidation Repayment
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
                  </p>
                </TabPane>
                <TabPane tabId="tabs2">
                  <p className="description">
                    <Row>
                      <Col>
                        <span>Client Name</span>
                      </Col>
                      <Col>
                        <span>Client Id</span>
                      </Col>

                      <Col>
                        <span>Card Type</span>
                      </Col>
                      <Col>
                        <span>Salary</span>
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
                          color="primary"
                          type="button"
                          onClick={() => this.toggleModal("defaultModal4")}
                        >
                          <i class="fa fa-address-card" aria-hidden="true"></i>{" "}
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
                              onClick={() => this.toggleModal("defaultModal4")}
                            >
                              <span aria-hidden={true}>×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            {
                              <Container>
                                <span> Name: Basboosa Smith </span> <br></br>
                                <span> Age: 35 </span>
                                <br></br>
                                <span>Occupation: Meowww</span>
                                <br></br>
                                <span> Annual Income: $9,000000000000</span>
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
                              onClick={() => this.toggleModal("defaultModal4")}
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
                          color="primary"
                          type="button"
                          onClick={() => this.toggleModal("defaultModal5")}
                        >
                          <i class="fa fa-address-card" aria-hidden="true"></i>{" "}
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
                              onClick={() => this.toggleModal("defaultModal5")}
                            >
                              <span aria-hidden={true}>×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            {
                              <Container>
                                <span> Name: Mariouma Smith </span> <br></br>
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
                              onClick={() => this.toggleModal("defaultModal5")}
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
                          color="primary"
                          type="button"
                          onClick={() => this.toggleModal("defaultModal6")}
                        >
                          <i class="fa fa-address-card" aria-hidden="true"></i>{" "}
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
                              onClick={() => this.toggleModal("defaultModal6")}
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
                              onClick={() => this.toggleModal("defaultModal6")}
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

          <section className="section section-lg">
            <Container>
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
                          onClick={() => this.toggleModal("defaultModal7")}
                        >
                          <i class="fa fa-address-card" aria-hidden="true"></i>{" "}
                          View Details
                        </Button>
                      </div>
                      <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.defaultModal7}
                        toggle={() => this.toggleModal("defaultModal7")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-default">
                            Report Details
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal7")}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          {
                            <Container>
                              <span> CreditCard Number:52778 </span> <br></br>
                              <span>
                                {" "}
                                Issue Description: Elcredit card ets7b mnha
                                floos ya shwayet 7rameya{" "}
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
                            onClick={() => this.toggleModal("defaultModal7")}
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
                          onClick={() => this.toggleModal("defaultModal8")}
                        >
                          <i class="fa fa-address-card" aria-hidden="true"></i>{" "}
                          View Details
                        </Button>
                      </div>
                      <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.defaultModal8}
                        toggle={() => this.toggleModal("defaultModal8")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-default">
                            Report Details
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal8")}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          {
                            <Container>
                              <span> CreditCard Number:5256777 </span> <br></br>
                              <span> Issue Description: Points mrg3etsh </span>
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
                            onClick={() => this.toggleModal("defaultModal8")}
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
                          onClick={() => this.toggleModal("defaultModal9")}
                        >
                          <i class="fa fa-address-card" aria-hidden="true"></i>{" "}
                          View Details
                        </Button>
                      </div>
                      <Modal
                        className="modal-dialog-centered"
                        isOpen={this.state.defaultModal9}
                        toggle={() => this.toggleModal("defaultModal9")}
                      >
                        <div className="modal-header">
                          <h6 className="modal-title" id="modal-title-default">
                            Report Details
                          </h6>
                          <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("defaultModal9")}
                          >
                            <span aria-hidden={true}>×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          {
                            <Container>
                              <span> CreditCard Number:999998 </span> <br></br>
                              <span>
                                {" "}
                                Issue Description: Pls giveme sm money Im broke{" "}
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
                            onClick={() => this.toggleModal("defaultModal9")}
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
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
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
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">The amazing Team</h2>
                  <p className="lead text-muted">
                    According to the National Oceanic and Atmospheric
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially record maximum.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ryan Tompson</span>
                        <small className="h6 text-muted">Web Developer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-2-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Romina Hadid</span>
                        <small className="h6 text-muted">
                          Marketing Strategist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-3-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Alexander Smith</span>
                        <small className="h6 text-muted">UI/UX Designer</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/team-4-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">John Doe</span>
                        <small className="h6 text-muted">Founder and CEO</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
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
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Banker;

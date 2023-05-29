import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardBody,
  Modal,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    document.title = "Mahfaztak";
  }
  state = {
    exampleModal: false,
  };
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/basboosa.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={() => this.toggleModal("exampleModal")}
                          size="sm"
                        >
                          Change Password
                        </Button>
                        <Modal
                          className="modal-dialog-centered"
                          isOpen={this.state.exampleModal}
                          toggle={() => this.toggleModal("exampleModal")}
                        >
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Please Enter Old and New Password
                            </h5>
                            <button
                              aria-label="Close"
                              className="close"
                              data-dismiss="modal"
                              type="button"
                              onClick={() => this.toggleModal("exampleModal")}
                            >
                              <span aria-hidden={true}>×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            {" "}
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                id="Password"
                                placeholder="Old Password"
                                type="Password"
                                name="Password"
                              />
                            </InputGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                id="Password"
                                placeholder="New Password"
                                type="Password"
                                name="Password"
                              />
                            </InputGroup>
                          </div>
                          <div className="modal-footer">
                            <Button
                              color="secondary"
                              data-dismiss="modal"
                              type="button"
                              onClick={() => this.toggleModal("exampleModal")}
                            >
                              Close
                            </Button>
                            <Button color="primary" type="button">
                              Save changes
                            </Button>
                          </div>
                        </Modal>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">2</span>
                          <span className="description">Bank Accounts</span>
                        </div>
                        <div>
                          <span className="heading">3</span>
                          <span className="description">Credit Cards</span>
                        </div>
                        <div>
                          <span className="heading">1</span>
                          <span className="description">Loan</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Basboosa Smith{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Meow City, Egypt
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Proffesional Meowww
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Meowing
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col xs="2"></Col>
                      <Col xs="3">
                        <span>
                          <h5>Full Name: </h5>
                        </span>
                      </Col>
                      <Col xs="3">
                        <span>
                          <h5>Basboosa Smith</h5>
                        </span>
                      </Col>
                      <Col xs="2"></Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xs="2"></Col>
                      <Col xs="3">
                        <span>
                          <h5>Date Of Birth:</h5>
                        </span>
                      </Col>
                      <Col xs="3">
                        <span>
                          <h5> 14/6/2002</h5>
                        </span>
                      </Col>
                      <Col xs="2"></Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xs="2"></Col>
                      <Col xs="3">
                        <span>
                          <h5>Phone Number:</h5>
                        </span>
                      </Col>
                      <Col xs="3">
                        <span>
                          <h5>01555240174</h5>
                        </span>
                      </Col>
                      <Col xs="2"></Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col xs="2"></Col>
                      <Col xs="3">
                        <span>
                          <h5>e-mail</h5>
                        </span>
                      </Col>
                      <Col xs="3">
                        <span>
                          <h5>basabeso@gmail.com</h5>
                        </span>
                      </Col>
                      <Col xs="2"></Col>
                    </Row>
                  </div>
                  <div className="text-center border-top">
                    <Row><p></p></Row>
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          Iam a proffessional Meow.I work with puss and boots
                          and I gain alot from stealing idiot people hearts.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;

import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
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
                            src={require("assets/img/theme/repair.png")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <div className="text-center mt-5">
                      <h3>Have a technical issue to report? </h3>
                    </div>
                    <Col lg="9">
                      <p>
                        Our skilled team of software engineers are always here
                        to hear about your issues
                      </p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md="6">
                      <FormGroup>
                        <Input
                          id="exampleFormControlInput1"
                          placeholder="                             Please describe your issue here"
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
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

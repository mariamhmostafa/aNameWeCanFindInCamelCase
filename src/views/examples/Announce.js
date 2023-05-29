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
import SimpleFooter from "components/Footers/SimpleFooter.js";
import AdminNavBar from "components/Navbars/AdminNavBar.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    document.title = "Mahfaztak";
  }
  state = {
    text: "",
  };

  getText = (e) => {
    this.setState({ text: e.target.value });
  };
  handleSignIn = (e) => {
    if (this.state.text === "") {
      alert("Please enter text");
    } else {
      alert("Your announcement has been sent successfully");
    }
  };

  render() {
    return (
      <>
        <AdminNavBar />
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
                            src={require("assets/img/theme/mic.png")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-5 py-5 border-top text-center">
                  <Row className="justify-content-center">
                    <div className="text-center mt-5">
                      <h3>What would you like to announce? </h3>
                    </div>
                    <Col lg="9">
                      <p>This will be sent to all users</p>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col md="6">
                      <FormGroup>
                        <Input
                          onChange={this.getText}
                          id="exampleFormControlInput1"
                          placeholder="                                  Please describe your announcement here"
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Button
                      className="btn-icon mb-3 mb-sm-0"
                      color="info"
                      onClick={this.handleSignIn}
                    >
                      <span className="btn-inner--text">Announce</span>
                    </Button>
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

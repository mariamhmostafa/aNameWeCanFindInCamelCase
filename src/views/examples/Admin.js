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
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import HomeNavBar from "components/Navbars/HomeNavBar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <HomeNavBar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Row className="justify-content-center">
              <h1 className="display-3 text-white">
                Incoming Technical Issues
              </h1>
            </Row>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                        <i className="ni ni-settings" />
                      </div>
                      <h6 className="text-warning text-uppercase">
                        Displays 404 error when I try to login [userid: 100234]
                      </h6>
                      <p className="description mt-3">
                        Everytime I try to login using my banker credentials it
                        directs me to 404 page
                      </p>
                      <div>
                        <Badge color="warning" pill className="mr-1">
                          banker-technical-issues
                        </Badge>
                        <Badge color="warning" pill className="mr-1">
                          logging-in-issues
                        </Badge>
                      </div>
                      <Button
                        className="mt-6"
                        color="success"
                        onClick={(e) => alert("Issue marked as resolved")}
                      >
                        Mark Resolved
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                        <i className="ni ni-settings" />
                      </div>
                      <h6 className="text-warning text-uppercase">
                        Website is not responsive [userid: 30056]
                      </h6>
                      <p className="description mt-3">
                        The mahfaztak wesbite is not responsive on desktop
                        devices
                      </p>
                      <div>
                        <Badge color="warning" pill className="mr-1">
                          client-technical-issues
                        </Badge>
                        <Badge color="warning" pill className="mr-1">
                          load-time-issues
                        </Badge>
                      </div>
                      <Button
                        className="mt-6"
                        color="success"
                        onClick={(e) => alert("Issue marked as resolved")}
                      >
                        Mark Resolved
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        <i className="ni ni-check-bold" />
                      </div>
                      <h6 className="text-success text-uppercase">
                        Website takes >2 minutes to load [userid: 20056]
                      </h6>
                      <p className="description mt-3">
                        The mahfaztak wesbite takes ages to load, i tried it on
                        different devices
                      </p>
                      <div>
                        <Badge color="success" pill className="mr-1">
                          client-technical-issues
                        </Badge>
                        <Badge color="success" pill className="mr-1">
                          responsiveness-issues
                        </Badge>
                        <Badge color="success" pill className="mr-1">
                          resolved
                        </Badge>
                      </div>
                      <Button
                        className="mt-6"
                        color="warning"
                        onClick={(e) => alert("Issue re-opened successfully")}
                      >
                        Re-open issue
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;

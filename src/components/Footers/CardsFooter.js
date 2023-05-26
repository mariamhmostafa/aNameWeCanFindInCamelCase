import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/login-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/login.jpg")}
                    />
                  </Link>
                </Card>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/register-page">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/register.jpg")}
                    />
                  </Link>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for choosing Mahfaztak!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>

              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/software-engineering-2023/aNameWeCanFindInCamelCase"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <a
                  className="mb-0 font-weight-light"
                  href="/technical-issue-page"
                >
                  <small>Report technical issue</small>
                </a>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()} <a>Mahfaztak</a>.
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;

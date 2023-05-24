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
    Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

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
                                                Mahfaztak{" "}
                                                <span>An entire bank in your wallet.</span>
                                            </h1>
                                            <p className="lead text-white">
                                                Mahfaztak was established in 2023 as an online
                                                banking system by 5 smart young women.
                                                With over 0 branches worldwide!
                                                Learn more about our services.
                                            </p>
                                            <div className="btn-wrapper">
                                                <Button
                                                    className="btn-icon mb-3 mb-sm-0"
                                                    color="info"
                                                    href="/login-page"
                                                >
                                                    <span className="btn-inner--icon mr-1">
                                                        <i className="fa fa-sign-in" />
                                                    </span>
                                                    <span className="btn-inner--text">Sign In</span>
                                                </Button>
                                                <Button
                                                    className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                    color="default"
                                                    href="/register-page"
                                                >
                                                    <span className="btn-inner--icon mr-1">
                                                        <i className="fa fa-plus-square-o " />
                                                    </span>
                                                    <span className="btn-inner--text">
                                                        Register
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
                    <section className="section section-lg pt-lg-0 mt--200">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="ni ni-check-bold" />
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Bills
                                                    </h6>
                                                    <p className="description mt-3">
                                                        With Mahfaztak, you can keep track of your bills
                                                        and pay your bills anytime!
                                                    </p>

                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="ni ni-istanbul" />
                                                    </div>
                                                    <h6 className="text-success text-uppercase">
                                                        Loans
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Mahfaztak offers you the chance to turn your dream to reality!
                                                        You can now apply for personal OR car loans.
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="ni ni-planet" />
                                                    </div>
                                                    <h6 className="text-warning text-uppercase">
                                                        Credit Cards
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Applying for credit cards has never been easier.
                                                        Now you can apply for credit cards and have them delivered
                                                        at your doorstep the very next day!
                                                    </p>

                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
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

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

                    <section className="section section-lg">
                        <Container>
                            <Row className="justify-content-center text-center mb-lg">
                                <Col lg="8">
                                    <h2 className="display-3">The Amazing Team</h2>
                                    <p className="lead text-muted">
                                        ur fav SE team.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/theme/team-1-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Sara Ajmi</span>
                                                <small className="h6 text-muted">Scrum Master</small>
                                            </h5>
                                            <div className="mt-3">
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/theme/team-2-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Marwa Mohamed</span>
                                                <small className="h6 text-muted">
                                                    marmora
                                                </small>
                                            </h5>
                                            <div className="mt-3">

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/theme/team-3-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Farida Maheeb</span>
                                                <small className="h6 text-muted">frfr</small>
                                            </h5>
                                            <div className="mt-3">
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="7" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/theme/team-4-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Nairuz</span>
                                                <small className="h6 text-muted">nrz</small>
                                            </h5>
                                            <div className="mt-3">

                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="mb-5 mb-lg-0" lg="4" md="6">
                                    <div className="px-4">
                                        <img
                                            alt="..."
                                            className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                            src={require("assets/img/theme/team-4-800x800.jpg")}
                                            style={{ width: "200px" }}
                                        />
                                        <div className="pt-4 text-center">
                                            <h5 className="title">
                                                <span className="d-block mb-1">Mariam Mostafa</span>
                                                <small className="h6 text-muted">mrm</small>
                                            </h5>
                                            <div className="mt-3">

                                            </div>
                                        </div>
                                    </div>
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

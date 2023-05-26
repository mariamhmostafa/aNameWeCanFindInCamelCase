import React from 'react'
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
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import HomeNavBar from "components/Navbars/HomeNavBar.js";

class Admin extends React.Component {
    state = {};
    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
        document.title = "Mahfaztak";
    }
    render() {
        return (
            <>
                <div>
                    <HomeNavBar />
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
                                                </h1>
                                                <p className="lead text-white">
                                                    At our bank, we prioritize your financial well-being.
                                                    With a dedicated team of experts, we offer personalized
                                                    guidance and a wide range of banking services to help you
                                                    achieve your financial dreams. Experience a trusted partner
                                                    that puts you first. Open an account today and embark on
                                                    a brighter financial future.
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
                                                        <span className="btn-inner--text">Sign in</span>
                                                    </Button>
                                                    <Button
                                                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                                                        color="default"
                                                        href="/register-page"
                                                    >
                                                        <span className="btn-inner--icon mr-1">
                                                            <i className="fa fa-plus-square-o" />
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
                                                        <Row className="mb-5 mb-lg-0" lg="6" md="6">
                                                            <div className="px-7">
                                                                <img
                                                                    alt="..."
                                                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                                    src={require("assets/img/theme/team-1-800x800.jpg")}
                                                                    style={{ width: "100px" }}
                                                                />

                                                            </div>
                                                        </Row>
                                                        <div><p></p></div>
                                                        <Row>
                                                            <div className='px-3'>
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                            </div>
                                                        </Row>
                                                        <blockquote className="blockquote">
                                                            <p className="mb-0">
                                                                I've been a customer of Mahfaztak for several years now,
                                                                and I couldn't be happier with their services. The online banking
                                                                platform is user-friendly and convenient, allowing me to manage
                                                                my accounts and make transactions effortlessly.The customer support
                                                                team has always been prompt and helpful, addressing any concerns I've had.
                                                            </p>
                                                            <footer className="blockquote-footer">
                                                                <cite title="Source Title">Ryan Thompson</cite>
                                                            </footer>
                                                        </blockquote>

                                                        <h6 className="text-primary text-uppercase">

                                                        </h6>
                                                        <div>
                                                            <Badge color="success" pill className="mr-1">
                                                                review
                                                            </Badge>
                                                            <Badge color="success" pill className="mr-1">
                                                                amazing
                                                            </Badge>
                                                            <Badge color="success" pill className="mr-1">
                                                                wow
                                                            </Badge>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col lg="4">
                                                <Card className="card-lift--hover shadow border-0">
                                                    <CardBody className="py-5">
                                                        <Row className="mb-5 mb-lg-0" lg="6" md="6">
                                                            <div className="px-7">
                                                                <img
                                                                    alt="..."
                                                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                                    src={require("assets/img/theme/team-2-800x800.jpg")}
                                                                    style={{ width: "100px" }}
                                                                />

                                                            </div>
                                                        </Row>
                                                        <div><p></p></div>
                                                        <Row>
                                                            <div className='px-3'>
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                            </div>
                                                        </Row>
                                                        <blockquote className="blockquote">
                                                            <p className="mb-0">
                                                                Choosing Mahfaztak has been one of the best financial decisions
                                                                I've made. Their competitive interest rates have helped me grow my
                                                                savings significantly, and their loan options have been flexible and
                                                                affordable. What impresses me the most is their commitment to personalized
                                                                service.
                                                            </p>
                                                            <footer className="blockquote-footer">
                                                                <cite title="Source Title">Romina Hadid</cite>
                                                            </footer>
                                                        </blockquote>

                                                        <h6 className="text-primary text-uppercase">

                                                        </h6>
                                                        <div>
                                                            <Badge color="success" pill className="mr-1">
                                                                impressive
                                                            </Badge>
                                                            <Badge color="success" pill className="mr-1">
                                                                review
                                                            </Badge>
                                                            <Badge color="success" pill className="mr-1">
                                                                amazing
                                                            </Badge>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col lg="4">
                                                <Card className="card-lift--hover shadow border-0">
                                                    <CardBody className="py-5">
                                                        <Row className="mb-5 mb-lg-0" lg="6" md="6">
                                                            <div className="px-7">
                                                                <img
                                                                    alt="..."
                                                                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                                                                    src={require("assets/img/theme/team-3-800x800.jpg")}
                                                                    style={{ width: "100px" }}
                                                                />

                                                            </div>
                                                        </Row>
                                                        <div><p></p></div>
                                                        <Row>
                                                            <div className='px-3'>
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star yellow-icon" />
                                                                <i className="fa fa-star " />
                                                            </div>
                                                        </Row>
                                                        <blockquote className="blockquote">
                                                            <p className="mb-0">
                                                                I recently had the opportunity to open a business
                                                                account with Mahfaztak, and I couldn't be more pleased.
                                                                The account setup process was seamless, and the business banking
                                                                features provided have made managing my finances a breeze. What
                                                                truly sets Mahfaztak apart is their knowledgeable and proactive staff.
                                                            </p>
                                                            <footer className="blockquote-footer">
                                                                <cite title="Source Title">Jessice Smith</cite>
                                                            </footer>
                                                        </blockquote>

                                                        <h6 className="text-primary text-uppercase">

                                                        </h6>
                                                        <div>
                                                            <Badge color="success" pill className="mr-1">
                                                                wow
                                                            </Badge>
                                                            <Badge color="success" pill className="mr-1">
                                                                amazing
                                                            </Badge>
                                                            <Badge color="success" pill className="mr-1">
                                                                review
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
                    </main>
                </div>
                <SimpleFooter />
            </>
        )
    }
}

export default Admin;
import React, { createRef } from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import ReactDatetime from "react-datetime";
// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    Nav,
    Form,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Modal,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    DropdownItem,
    Progress,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Row,
    Col
} from "reactstrap";


// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import "assets/vendor/nucleo/css/nucleo.css";

// index page sections
import Download from "../IndexSections/Download.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";


class Client extends React.Component {
    constructor(props) {
        super(props);
        this.scollToRef1 = createRef();
        this.scollToRef2 = createRef();
    }

    state = {
        tabs: 1,
        defaultModal1: false,
        defaultModal2: false,
        defaultModal3: false,

    };


    toggleModal = state => {
        this.setState({
            [state]: !this.state[state]
        });
    };

    toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
            [state]: index
        });
    };

    handlePay = (e) => {
        alert("Bill paid successfully!")
    };

    handleRedeem = (e) => {
        alert("Points redeemed!")
    }
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
                                                Great to see you again, Basboosa{" "}
                                                <span>^^</span>
                                            </h1>
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
                                                        We are excited to announce that Mahfaztak will be implementing
                                                        a service upgrade to enhance your banking experience. This upgrade
                                                        is scheduled to take place on 20/6/2023 and will involve improvements to
                                                        our digital banking platform and additional features for your convenience.
                                                    </p>
                                                    <p className="description mt-3">
                                                        During the upgrade, there will be a temporary
                                                        interruption in some of our services. Online and mobile banking
                                                        services may be temporarily unavailable on 20/6/2023 from 22:00
                                                        to 23:00. We apologize for any inconvenience this may cause and
                                                        assure you that our team is working diligently to minimize the downtime and
                                                        complete the upgrade as quickly as possible.
                                                    </p>
                                                    <p className="description mt-3">
                                                        Once the upgrade is complete, you can look forward to a more seamless
                                                        and user-friendly online banking experience. The enhanced platform will provide
                                                        improved navigation, enhanced security measures, and additional functionalities
                                                        designed to simplify your financial management.
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
                    <section className="section bg-secondary">
                        <Container>
                            <Row className="row-grid align-items-center">
                                <Col md="6">
                                    <Card className="bg-default shadow border-0">
                                        <CardImg
                                            alt="..."
                                            src={require("assets/img/theme/bankoldppl.jpeg")}
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
                                                What would you like to do today?
                                            </h4>

                                        </blockquote>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <div className="pl-md-5">
                                        <Container>
                                            <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                                <i className="fa fa-hand-o-up" />
                                            </div>
                                            <h3 className="mb-1">Explore</h3>
                                            <p className="mt-0">
                                                Select...
                                            </p>
                                            <Button
                                                block
                                                className="btn-round"
                                                color="default"
                                                size="lg"
                                                type="button"
                                                onClick={() => this.scollToRef2.current.scrollIntoView({ behavior: 'smooth' })}

                                            >
                                                Account
                                            </Button>
                                            <Button
                                                block
                                                className="btn-round"
                                                color="default"
                                                size="lg"
                                                type="button"
                                                onClick={() => this.scollToRef1.current.scrollIntoView({ behavior: 'smooth' })}

                                            >
                                                Credit Card
                                            </Button>
                                            <Button
                                                block
                                                className="btn-round"
                                                color="default"
                                                size="lg"
                                                type="button"
                                            >
                                                Loan
                                            </Button>
                                            <Button
                                                block
                                                className="btn-round"
                                                color="default"
                                                size="lg"
                                                type="button"
                                            >
                                                Transaction
                                            </Button>
                                        </Container>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="section pb-0 bg-gradient-white" ref={this.scollToRef2}>
                        <Container className="d-flex"  >
                            <Col className="row-grid align-items-center" xs="5">
                                <Row className="order-lg-1" lg="6">
                                    <div className="d-flex px-3">
                                        <div>
                                            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                                <i className="ni ni-building text-primary" />
                                            </div>
                                        </div>
                                        <div className="pl-4">
                                            <h4 className="display-3 text-primary">Accounts </h4>
                                            <p className="text-primary">
                                                Open a Mahfaztak account today and unlock a world of convenient
                                                banking services tailored to your needs. Enjoy competitive interest
                                                rates, seamless online and mobile banking, and personalized support from
                                                our dedicated team of experts. Experience banking reimagined with Mahfaztak!
                                            </p>
                                        </div>
                                    </div>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                                                        <i className="fa fa-plus" />
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-success">
                                                        Open an account
                                                    </h5>
                                                    <p>
                                                        You can now open your bank account online with just one click!
                                                    </p>

                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Row>
                                <Row>
                                    <Card className="shadow shadow-lg--hover mt-5">
                                        <CardBody>
                                            <div className="d-flex px-3">
                                                <div>
                                                    <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                                        <i className="fa fa-ban" />
                                                    </div>
                                                </div>
                                                <div className="pl-4">
                                                    <h5 className="title text-warning">
                                                        Close an Account
                                                    </h5>
                                                    <p>
                                                        The Arctic Ocean freezes every winter and much of
                                                        the sea-ice then thaws every summer, and that
                                                        process will continue whatever.
                                                    </p>

                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Row>
                            </Col>
                            <Col xs="7">
                                <Card className="shadow shadow-lg--hover mt-5">
                                    <CardBody>
                                        <div className="d-flex px-3">
                                            <div>
                                                <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                                    <i className="fa fa-plus" />
                                                </div>
                                            </div>
                                            <div className="pl-4">
                                                <h5 className="title text-primary">
                                                    View Accounts
                                                </h5>
                                                <Row>
                                                    <Col xs="5">
                                                        Account number
                                                    </Col>
                                                    <Col xs="4">
                                                        Type
                                                    </Col>
                                                </Row>
                                                <Row><p></p></Row>
                                                <Row>
                                                    <Col xs="5">
                                                        9479
                                                    </Col>
                                                    <Col xs="5">
                                                        Savings
                                                    </Col>
                                                    <Col xs="1">
                                                        <Button
                                                            size="sm" color="warning"
                                                            type="button"
                                                        >
                                                            Close
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="5">
                                                        4872
                                                    </Col>
                                                    <Col xs="5">
                                                        Current
                                                    </Col>
                                                    <Col xs="1">
                                                        <Button
                                                            size="sm" color="warning"
                                                            type="button"
                                                        >
                                                            Close
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <p></p><p></p>
                                                </Row>
                                                <Row>
                                                    <h5 className="title text-success" >
                                                        Open a new Bank Account
                                                    </h5>
                                                </Row>
                                                <Row>
                                                    <Form>
                                                        <Row>
                                                            <FormGroup>
                                                                <Input
                                                                    id="exampleFormControlInput1"
                                                                    placeholder="Name"
                                                                    type="email"
                                                                />
                                                            </FormGroup>
                                                        </Row>
                                                        <Row>
                                                            <FormGroup>
                                                                <InputGroup className="input-group-alternative">
                                                                    <InputGroupAddon addonType="prepend">
                                                                        <InputGroupText>
                                                                            <i className="ni ni-calendar-grid-58" />
                                                                        </InputGroupText>
                                                                    </InputGroupAddon>
                                                                    <ReactDatetime
                                                                        inputProps={{
                                                                            placeholder: "Date of Birth"
                                                                        }}
                                                                        timeFormat={false}
                                                                        renderDay={(props, currentDate, selectedDate) => {
                                                                            let classes = props.className;
                                                                            if (
                                                                                this.state.startDate &&
                                                                                this.state.endDate &&
                                                                                this.state.startDate._d + "" === currentDate._d + ""
                                                                            ) {
                                                                                classes += " start-date";
                                                                            } else if (
                                                                                this.state.startDate &&
                                                                                this.state.endDate &&
                                                                                new Date(this.state.startDate._d + "") <
                                                                                new Date(currentDate._d + "") &&
                                                                                new Date(this.state.endDate._d + "") >
                                                                                new Date(currentDate._d + "")
                                                                            ) {
                                                                                classes += " middle-date";
                                                                            } else if (
                                                                                this.state.endDate &&
                                                                                this.state.endDate._d + "" === currentDate._d + ""
                                                                            ) {
                                                                                classes += " end-date";
                                                                            }
                                                                            return (
                                                                                <td {...props} className={classes}>
                                                                                    {currentDate.date()}
                                                                                </td>
                                                                            );
                                                                        }}
                                                                        onChange={e => this.setState({ startDate: e })}
                                                                    />
                                                                </InputGroup>
                                                            </FormGroup>
                                                        </Row>
                                                        <Row>
                                                            <FormGroup>
                                                                <Input
                                                                    id="exampleFormControlInput1"
                                                                    placeholder="Address"
                                                                    type="email"
                                                                />
                                                            </FormGroup>
                                                        </Row>
                                                        <Row>
                                                            <FormGroup>
                                                                <Input
                                                                    id="exampleFormControlInput1"
                                                                    placeholder="Phone Number"
                                                                    type="email"
                                                                />
                                                            </FormGroup>
                                                        </Row>
                                                        <Row>
                                                            <FormGroup>
                                                                <Input
                                                                    id="exampleFormControlInput1"
                                                                    placeholder="National ID"
                                                                    type="email"
                                                                />
                                                            </FormGroup>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <input
                                                                    className="custom-control-input"
                                                                    id="customCheck1"
                                                                    type="checkbox"
                                                                />
                                                                <label className="custom-control-label" htmlFor="customCheck1">
                                                                    Married
                                                                </label>
                                                            </Col>
                                                            <Col>
                                                                <input
                                                                    className="custom-control-input"
                                                                    id="customCheck1"
                                                                    type="checkbox"
                                                                />
                                                                <label className="custom-control-label" htmlFor="customCheck1">
                                                                    Married
                                                                </label>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Button
                                                                className="ml-auto"
                                                                color="success"
                                                                data-dismiss="modal"
                                                                type="button"
                                                            >
                                                                Open Now
                                                            </Button>
                                                        </Row>
                                                    </Form>
                                                </Row>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
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
                    <section className="section pb-0 bg-gradient-white">
                        <Container></Container>
                    </section>
                    <section className="section pb-0 bg-gradient-warning" ref={this.scollToRef1}>
                        <Container >
                            <Row className="row-grid align-items-center" >
                                <div className="d-flex px-3" >
                                    <div >
                                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                            <i className="fa fa-credit-card text-primary" />
                                        </div>
                                    </div>
                                    <div className="pl-4">
                                        <h4 className="display-3 text-white">Credit Cards</h4>
                                        <p className="text-white">
                                            Credit cards are versatile tools that offer numerous benefits.
                                            They provide a convenient and secure way to make purchases,
                                            both online and in-person, without the need for cash. Credit cards
                                            also offer rewards programs, allowing users to earn cashback,
                                            points, or miles on their transactions. They help build credit history and
                                            improve credit scores through responsible usage and timely payments.
                                            Additionally, credit cards provide financial protection against
                                            fraud and unauthorized transactions. Overall, credit cards are invaluable
                                            for efficient and secure financial management.
                                        </p>
                                    </div>
                                </div>
                                <section>
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
                                                        active: this.state.tabs === 1
                                                    })}
                                                    onClick={e => this.toggleNavs(e, "tabs", 1)}
                                                    href="#pablo"
                                                    role="tab"
                                                >
                                                    <i className="fa fa-credit-card-alt mr-2" />
                                                    View credit cards
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    aria-selected={this.state.tabs === 2}
                                                    className={classnames("mb-sm-3 mb-md-0", {
                                                        active: this.state.tabs === 2
                                                    })}
                                                    onClick={e => this.toggleNavs(e, "tabs", 2)}
                                                    href="#pablo"
                                                    role="tab"
                                                >
                                                    <i className="fa fa-user mr-2" />
                                                    Apply for a credit card
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    aria-selected={this.state.tabs === 3}
                                                    className={classnames("mb-sm-3 mb-md-0", {
                                                        active: this.state.tabs === 3
                                                    })}
                                                    onClick={e => this.toggleNavs(e, "tabs", 3)}
                                                    href="#pablo"
                                                    role="tab"
                                                >
                                                    <i className="fa fa-eye mr-2" />
                                                    View credit card requests
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    aria-selected={this.state.tabs === 4}
                                                    className={classnames("mb-sm-3 mb-md-0", {
                                                        active: this.state.tabs === 4
                                                    })}
                                                    onClick={e => this.toggleNavs(e, "tabs", 4)}
                                                    href="#pablo"
                                                    role="tab"
                                                >
                                                    <i className="fa fa-money mr-2" />
                                                    Pay bills
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    aria-selected={this.state.tabs === 5}
                                                    className={classnames("mb-sm-3 mb-md-0", {
                                                        active: this.state.tabs === 5
                                                    })}
                                                    onClick={e => this.toggleNavs(e, "tabs", 5)}
                                                    href="#pablo"
                                                    role="tab"
                                                >
                                                    <i className="fa fa-flag mr-2" />
                                                    Report
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    aria-selected={this.state.tabs === 6}
                                                    className={classnames("mb-sm-3 mb-md-0", {
                                                        active: this.state.tabs === 6
                                                    })}
                                                    onClick={e => this.toggleNavs(e, "tabs", 6)}
                                                    href="#pablo"
                                                    role="tab"
                                                >
                                                    <i className="fa fa-money mr-2" />
                                                    Redeem Points
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </div>
                                    <Card className="shadow">
                                        <CardBody>
                                            <TabContent activeTab={"tabs" + this.state.tabs}>
                                                <TabPane tabId="tabs1">
                                                    <Container>
                                                        <Row>
                                                            <Col xs="3">
                                                                <span>Name</span>
                                                            </Col>
                                                            <Col xs="4">
                                                                <span>Credit card number </span>
                                                            </Col>
                                                            <Col>
                                                                <span>Expiry date </span>
                                                            </Col>
                                                            <Col>
                                                                <p>
                                                                </p>
                                                                <p>
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <p>
                                                            </p>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="3">
                                                                <span>Basboosa el amoora</span>
                                                            </Col>
                                                            <Col xs="4">
                                                                <span>99999999999 </span>
                                                            </Col>
                                                            <Col>
                                                                <span>06/23 </span>
                                                            </Col>
                                                            <Col>
                                                                <Button
                                                                    block
                                                                    className="mb-3"
                                                                    size="sm"
                                                                    color="primary"
                                                                    type="button"
                                                                    onClick={() => this.toggleModal("defaultModal1")}
                                                                >
                                                                    <i className="ni ni-basket"></i>
                                                                    {" "}View transcations
                                                                </Button>
                                                                <Modal
                                                                    className="modal-dialog-centered"
                                                                    isOpen={this.state.defaultModal1}
                                                                    toggle={() => this.toggleModal("defaultModal1")}
                                                                >
                                                                    <div className="modal-header">
                                                                        <h6 className="modal-title" id="modal-title-default">
                                                                            Basboosa el amoora
                                                                        </h6>
                                                                        <button
                                                                            aria-label="Close"
                                                                            className="close"
                                                                            data-dismiss="modal"
                                                                            type="button"
                                                                            onClick={() => this.toggleModal("defaultModal1")}
                                                                        >
                                                                            <span aria-hidden={true}>×</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <Container>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>Transaction number</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>Amount </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>Date </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <p>

                                                                                </p>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>19843</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>150.00 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>18/05/2022 </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>297023</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>7500.00 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>15/05/2023 </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>98245</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>90.00 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>23/05/2023 </span>
                                                                                </Col>
                                                                            </Row>

                                                                        </Container>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <Button
                                                                            className="ml-auto"
                                                                            color="link"
                                                                            data-dismiss="modal"
                                                                            type="button"
                                                                            onClick={() => this.toggleModal("defaultModal1")}
                                                                        >
                                                                            Close
                                                                        </Button>
                                                                    </div>
                                                                </Modal>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="3">
                                                                <span>Basboosa a7la ota fl denya</span>
                                                            </Col>
                                                            <Col xs="4">
                                                                <span>100100100100 </span>
                                                            </Col>
                                                            <Col>
                                                                <span>02/27 </span>
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
                                                                    <i className="ni ni-basket"></i>
                                                                    {" "}View transcations
                                                                </Button>
                                                                <Modal
                                                                    className="modal-dialog-centered"
                                                                    isOpen={this.state.defaultModal2}
                                                                    toggle={() => this.toggleModal("defaultModal2")}
                                                                >
                                                                    <div className="modal-header">
                                                                        <h6 className="modal-title" id="modal-title-default">
                                                                            Basboosa a7la ota fl denya
                                                                        </h6>
                                                                        <button
                                                                            aria-label="Close"
                                                                            className="close"
                                                                            data-dismiss="modal"
                                                                            type="button"
                                                                            onClick={() => this.toggleModal("defaultModal2")}
                                                                        >
                                                                            <span aria-hidden={true}>×</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <Container>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>Transaction number</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>Amount </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>Date </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <p>

                                                                                </p>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>987432</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>340.00 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>12/03/2019 </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>47629</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>709.99 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>20/07/2020 </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>27846</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>5.50 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>28/05/2022 </span>
                                                                                </Col>
                                                                            </Row>

                                                                        </Container>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <Button
                                                                            className="ml-auto"
                                                                            color="link"
                                                                            data-dismiss="modal"
                                                                            type="button"
                                                                            onClick={() => this.toggleModal("defaultModal2")}
                                                                        >
                                                                            Close
                                                                        </Button>
                                                                    </div>
                                                                </Modal>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="3">
                                                                <span>Basboosy </span>
                                                            </Col>
                                                            <Col xs="4">
                                                                <span>123456789 </span>
                                                            </Col>
                                                            <Col>
                                                                <span>11/25 </span>
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
                                                                    <i className="ni ni-basket"></i>
                                                                    {" "}View transcations
                                                                </Button>
                                                                <Modal
                                                                    className="modal-dialog-centered"
                                                                    isOpen={this.state.defaultModal3}
                                                                    toggle={() => this.toggleModal("defaultModal3")}
                                                                >
                                                                    <div className="modal-header">
                                                                        <h6 className="modal-title" id="modal-title-default">
                                                                            Basboosa el amoora
                                                                        </h6>
                                                                        <button
                                                                            aria-label="Close"
                                                                            className="close"
                                                                            data-dismiss="modal"
                                                                            type="button"
                                                                            onClick={() => this.toggleModal("defaultModal3")}
                                                                        >
                                                                            <span aria-hidden={true}>×</span>
                                                                        </button>
                                                                    </div>
                                                                    <div className="modal-body">
                                                                        <Container>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>Transaction number</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>Amount </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>Date </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <p>

                                                                                </p>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>87524</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>983.07 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>06/03/2018 </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>34683</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>1950.34 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>5/11/2020 </span>
                                                                                </Col>
                                                                            </Row>
                                                                            <Row>
                                                                                <Col xs="6">
                                                                                    <span>25836</span>
                                                                                </Col>
                                                                                <Col xs="3">
                                                                                    <span>7389.50 </span>
                                                                                </Col>
                                                                                <Col xs="2">
                                                                                    <span>27/08/2021 </span>
                                                                                </Col>
                                                                            </Row>

                                                                        </Container>
                                                                    </div>
                                                                    <div className="modal-footer">
                                                                        <Button
                                                                            className="ml-auto"
                                                                            color="link"
                                                                            data-dismiss="modal"
                                                                            type="button"
                                                                            onClick={() => this.toggleModal("defaultModal3")}
                                                                        >
                                                                            Close
                                                                        </Button>
                                                                    </div>
                                                                </Modal>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </TabPane>
                                                <TabPane tabId="tabs2">
                                                    <Form>
                                                        <Row>
                                                            <Col md="6">
                                                                <FormGroup>
                                                                    Email:
                                                                    <Input
                                                                        id="exampleFormControlInput1"
                                                                        placeholder="name@example.com"
                                                                        type="email"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md="6">
                                                                <FormGroup>
                                                                    Your monthly salary:
                                                                    <Input
                                                                        id="exampleFormControlInput1"
                                                                        placeholder="$XXXX.XX"
                                                                        type="email"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col md="6">
                                                                <FormGroup>
                                                                    Card Name:
                                                                    <Input
                                                                        id="exampleFormControlInput1"
                                                                        placeholder="enter your name"
                                                                        type="email"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md="6">
                                                                <FormGroup>
                                                                    <p>

                                                                    </p>
                                                                    <Button block color="primary" size="lg" type="button">
                                                                        Apply Now!
                                                                    </Button>
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </TabPane>
                                                <TabPane tabId="tabs3">
                                                    <Container>
                                                        <Row>
                                                            <Col>
                                                                <span>Application Number</span>
                                                            </Col>
                                                            <Col >
                                                                <span>Issue Date </span>
                                                            </Col>
                                                            <Col>
                                                                <span>Status </span>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <p>

                                                            </p>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span>874</span>
                                                            </Col>
                                                            <Col>
                                                                <span>10/11/2020 </span>
                                                            </Col>
                                                            <Col>
                                                                <span> Accepted</span>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span>2593</span>
                                                            </Col>
                                                            <Col>
                                                                <span>19/07/2022 </span>
                                                            </Col>
                                                            <Col>
                                                                <span> Rejected</span>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span>46239</span>
                                                            </Col>
                                                            <Col>
                                                                <span> 23/05/2023</span>
                                                            </Col>
                                                            <Col>
                                                                <span> Pending</span>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </TabPane>
                                                <TabPane tabId="tabs4">
                                                    <Container>
                                                        <Row>
                                                            <Col xs="3">
                                                                <span>Bill Type</span>
                                                            </Col>
                                                            <Col xs="3">
                                                                <span>Amount </span>
                                                            </Col>
                                                            <Col xs="3">
                                                                <span>Card</span>
                                                            </Col>
                                                            <Col>
                                                                <span></span>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <p>

                                                            </p>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span>Water</span>
                                                            </Col>
                                                            <Col>
                                                                <span>1900.00 </span>
                                                            </Col>
                                                            <Col>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle caret color="secondary" placeholder="Choose">
                                                                        Choose card
                                                                    </DropdownToggle>
                                                                    <DropdownMenu>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosa el amoora
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosa a7la ota fl denya
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosy
                                                                        </DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </Col>
                                                            <Col>
                                                                <Button
                                                                    className="ml-auto"
                                                                    color="primary"
                                                                    data-dismiss="modal"
                                                                    type="button"
                                                                    onClick={() => this.handlePay()}
                                                                >
                                                                    Pay Now
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span>Electricity</span>
                                                            </Col>
                                                            <Col>
                                                                <span>3207.50 </span>
                                                            </Col>
                                                            <Col>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle caret color="secondary" placeholder="Choose">
                                                                        Choose card
                                                                    </DropdownToggle>
                                                                    <DropdownMenu>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosa el amoora
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosa a7la ota fl denya
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosy
                                                                        </DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </Col>
                                                            <Col>
                                                                <Button
                                                                    className="ml-auto"
                                                                    color="primary"
                                                                    data-dismiss="modal"
                                                                    type="button"
                                                                    onClick={() => this.handlePay()}
                                                                >
                                                                    Pay Now
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span>Gas</span>
                                                            </Col>
                                                            <Col>
                                                                <span>30.50 </span>
                                                            </Col>
                                                            <Col>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle caret color="secondary" placeholder="Choose">
                                                                        Choose card
                                                                    </DropdownToggle>
                                                                    <DropdownMenu>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosa el amoora
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosa a7la ota fl denya
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosy
                                                                        </DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </Col>
                                                            <Col>
                                                                <Button
                                                                    className="ml-auto"
                                                                    color="primary"
                                                                    data-dismiss="modal"
                                                                    type="button"
                                                                    onClick={() => this.handlePay()}
                                                                >
                                                                    Pay Now
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span>Telephone</span>
                                                            </Col>
                                                            <Col>
                                                                <span>999.99 </span>
                                                            </Col>
                                                            <Col>
                                                                <UncontrolledDropdown>
                                                                    <DropdownToggle caret color="secondary" placeholder="Choose">
                                                                        Choose card
                                                                    </DropdownToggle>
                                                                    <DropdownMenu>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosa el amoora
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosa a7la ota fl denya
                                                                        </DropdownItem>
                                                                        <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                                                                            Basboosy
                                                                        </DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </Col>
                                                            <Col>
                                                                <Button
                                                                    className="ml-auto"
                                                                    color="primary"
                                                                    data-dismiss="modal"
                                                                    type="button"
                                                                    onClick={() => this.handlePay()}
                                                                >
                                                                    Pay Now
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </TabPane>
                                                <TabPane tabId="tabs5">
                                                    <Container>
                                                        <Card className="bg-gradient-secondary shadow">
                                                            <CardBody className="p-lg-5">
                                                                <h4 className="mb-1">Report credit card</h4>
                                                                <p className="mt-0">
                                                                    Your issue is very important to us.
                                                                </p>
                                                                <FormGroup
                                                                    className={classnames("mt-5", {
                                                                        focused: this.state.nameFocused
                                                                    })}
                                                                >
                                                                    <InputGroup className="input-group-alternative">
                                                                        <InputGroupAddon addonType="prepend">
                                                                            <InputGroupText>
                                                                                <i className="ni ni-user-run" />
                                                                            </InputGroupText>
                                                                        </InputGroupAddon>
                                                                        <Input
                                                                            placeholder="Credit Card number"
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
                                                                <FormGroup>
                                                                    <InputGroup className="input-group-alternative">
                                                                        <InputGroupAddon addonType="prepend">
                                                                            <InputGroupText>
                                                                                <i className="ni ni-calendar-grid-58" />
                                                                            </InputGroupText>
                                                                        </InputGroupAddon>
                                                                        <ReactDatetime
                                                                            inputProps={{
                                                                                placeholder: "Issue Date"
                                                                            }}
                                                                            timeFormat={false}
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
                                                                        color="primary"
                                                                        size="lg"
                                                                        type="button"
                                                                    >
                                                                        Send Report
                                                                    </Button>
                                                                </div>
                                                            </CardBody>
                                                        </Card>
                                                    </Container>
                                                </TabPane>
                                                <TabPane tabId="tabs6">
                                                    <Container>
                                                        <Row>
                                                            <Col xs="3">
                                                                <span>Credit Card Name</span>
                                                            </Col>
                                                            <Col xs="3">
                                                                <span>Credit Card Number</span>
                                                            </Col>
                                                            <Col xs="3">
                                                                <span>Points Available </span>
                                                            </Col>
                                                            <Col xs="2">
                                                                <span> </span>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <p>
                                                            </p>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="3">
                                                                <span>Basboosa el amoora</span>
                                                            </Col>
                                                            <Col xs="3">
                                                                <span>99999999999</span>
                                                            </Col>
                                                            <Col xs="3">
                                                                <span>500 </span>
                                                            </Col>
                                                            <Col xs="2">
                                                                <Button
                                                                    className="ml-auto"
                                                                    color="primary"
                                                                    data-dismiss="modal"
                                                                    type="button"
                                                                    onClick={() => this.handleRedeem()}
                                                                >
                                                                    Redeem
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="7">
                                                                <div className="progress-wrapper">
                                                                    <div className="progress-info">
                                                                        <div className="progress-label">
                                                                            <span>Next Points</span>
                                                                        </div>
                                                                        <div className="progress-percentage">
                                                                            <span>60%</span>
                                                                        </div>
                                                                    </div>
                                                                    <Progress max="100" value="60" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <p>

                                                            </p>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="3">
                                                                <span>Basboosy</span>
                                                            </Col>
                                                            <Col xs="3">
                                                                <span>123456789</span>
                                                            </Col>
                                                            <Col xs="3">
                                                                <span>78 </span>
                                                            </Col>
                                                            <Col xs="2">
                                                                <Button
                                                                    className="ml-auto"
                                                                    color="primary"
                                                                    data-dismiss="modal"
                                                                    type="button"
                                                                    onClick={() => this.handleRedeem()}
                                                                >
                                                                    Redeem
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xs="7">
                                                                <div className="progress-wrapper">
                                                                    <div className="progress-info">
                                                                        <div className="progress-label">
                                                                            <span>Next Points</span>
                                                                        </div>
                                                                        <div className="progress-percentage">
                                                                            <span>30%</span>
                                                                        </div>
                                                                    </div>
                                                                    <Progress max="100" value="30" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </TabPane>
                                            </TabContent>
                                        </CardBody>
                                    </Card>
                                </section>
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

                </main>
                <SimpleFooter />
            </>
        );
    }
}

export default Client;

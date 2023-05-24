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

class Client extends React.Component {

    state = {
        tabs: 1,
        defaultModal1: false,
        defaultModal2: false,
        defaultModal3: false
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
        alert("bill paid successfully!")
    };

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
                                        <i className="ni ni-cloud-upload-96 mr-2" />
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
                                        <i className="ni ni-bell-55 mr-2" />
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
                                        <i className="ni ni-calendar-grid-58 mr-2" />
                                        View pending credit card requests
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
                                        <i className="ni ni-calendar-grid-58 mr-2" />
                                        Pay bills
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
                                                        color="link"
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
                                                        color="link"
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
                                                        color="link"
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
                                                        color="link"
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
                                </TabContent>
                            </CardBody>
                        </Card>
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
                                                    focused: this.state.emailFocused
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

export default Client;

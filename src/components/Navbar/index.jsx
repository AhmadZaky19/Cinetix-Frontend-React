import React, { Component } from "react";
import { Search } from "react-bootstrap-icons";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import TickitzPurple from "../../assets/img/tickitz purple.png";
import "./index.css";

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">
              {" "}
              <img
                alt=""
                src={TickitzPurple}
                width="120"
                height="50"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="nav__collapse">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link href="#" className="nav__item">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="nav__item">
                  Payment
                </Nav.Link>
                <Nav.Link href="#" className="nav__item">
                  Profile
                </Nav.Link>
              </Nav>
              <NavDropdown title="Location" id="navbarScrollingDropdown" className="nav__dropdown">
                <NavDropdown.Item href="#">Jakarta</NavDropdown.Item>
                <NavDropdown.Item href="#">Bandung</NavDropdown.Item>
                <NavDropdown.Item href="#">Semarang</NavDropdown.Item>
              </NavDropdown>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 search__form"
                  aria-label="Search"
                />
              </Form>
              <Search />
              <Button variant="outline-success" className="button__signup">
                Sign Up
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navigation;

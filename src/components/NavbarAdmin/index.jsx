import React, { Component } from "react";
import { Search } from "react-bootstrap-icons";
import { Link, withRouter } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image
} from "react-bootstrap";
import TickitzPurple from "../../assets/img/tickitz purple.png";
import user from "../../assets/img/user_icon.png";
import "./index.css";

class NavAdmin extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/home");
  };

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
                width="140"
                height="60"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="nav__collapse">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link href="/dashboard" className="nav__item">
                  Dashboard
                </Nav.Link>
                <Nav.Link href="/manage-movie" className="nav__item">
                  Manage Movie
                </Nav.Link>
                <Nav.Link href="/manage-schedule" className="nav__item">
                  Manage Schedule
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
              <Search size={24} />
              <Image src={user} className="user__image" roundedCircle />
              <Button className="logout__button" onClick={this.handleLogout}>
                Logout
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavAdmin);

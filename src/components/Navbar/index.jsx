import React, { Component } from "react";
import { Search } from "react-bootstrap-icons";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
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
import { getDataUser } from "../../stores/actions/user";
import TickitzPurple from "../../assets/img/tickitz purple.png";
import user from "../../assets/img/user_icon.png";
import "./index.css";

class Navigation extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/home");
  };
  render() {
    const token = localStorage.getItem("token");
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
                <Nav.Link href="/home" className="nav__item">
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="nav__item">
                  Payment
                </Nav.Link>
                <Nav.Link href="/profile" className="nav__item">
                  Profile
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 search__form"
                  aria-label="Search"
                />
              </Form>
              <Search size={24} />
              {token !== null ? (
                <Image
                  src={
                    this.props.user.dataUser.image
                      ? `${process.env.REACT_APP_URL_BACKEND}/uploads/user/${this.props.user.dataUser.image}`
                      : user
                  }
                  className="user__image"
                  roundedCircle
                />
              ) : (
                <Button variant="outline-success" className="button__signup">
                  Sign Up
                </Button>
              )}
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

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  getDataUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

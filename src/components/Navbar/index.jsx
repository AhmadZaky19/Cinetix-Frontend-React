import React, { Component } from "react";
import { Search } from "react-bootstrap-icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Container, Nav, Form, FormControl, Button, Image } from "react-bootstrap";
import { getDataUser } from "../../stores/actions/user";
import { getDataMovie } from "../../stores/actions/movie";
import TickitzPurple from "../../assets/img/tickitz purple.png";
import user from "../../assets/img/user_icon.png";
import "./index.css";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      searchMenu: false,
      search: "",
      movies: [],
      message: "",
      isError: false
    };
  }

  handleSearch = () => {
    this.setState({
      searchMenu: true
    });
  };

  handleFindMovie = (event) => {
    this.props.getDataMovie("", this.state.search, "", "", "", "").then((response) => {
      if (response.value.data.data.length > 0) {
        this.setState({
          movies: response.value.data.data,
          isError: false,
          message: response.value.data.msg
        });
      } else {
        this.setState({
          isError: true,
          message: response.value.data.msg
        });
      }
    });
    this.setState({
      search: event.target.value
    });
  };

  handleDetailSearchMovie = (id) => {
    this.props.history.push(`/movie-detail/${id}`);
  };

  handleToRegister = () => {
    this.props.history.push("/register");
  };

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/");
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
                <Nav.Link href="/" className="nav__item">
                  Home
                </Nav.Link>
                <Nav.Link href="/profile" className="nav__item">
                  Profile
                </Nav.Link>
              </Nav>

              <Button className="button__search" onClick={this.handleSearch}>
                {this.state.searchMenu ? (
                  <>
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Search movie..."
                        className="me-2 d-none d-md-flex search__input"
                        onChange={this.handleFindMovie}
                      />
                    </Form>
                    {this.state.search ? (
                      <div className="navigation__homepage-search-movie">
                        <p className="text-dark fw-bold">Search: {this.state.search}</p>
                        <hr className="text-dark" />
                        {!this.state.isError ? (
                          this.state.movies.map((item) => (
                            <div key={item.id}>
                              <button
                                className="navigation__homepage-search-movie-link text-decoration-none"
                                onClick={() => this.handleDetailSearchMovie(item.id)}
                              >
                                {item.name}
                              </button>
                            </div>
                          ))
                        ) : (
                          <p className="text-dark fw-bold mx-5">{this.state.message}</p>
                        )}
                        <hr />
                      </div>
                    ) : null}
                  </>
                ) : (
                  <Search size={24} style={{ color: "black" }} />
                )}
              </Button>
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
                <Button
                  variant="outline-success"
                  className="button__signup"
                  onClick={this.handleToRegister}
                >
                  Sign Up
                </Button>
              )}
              {token !== null ? (
                <Button className="logout__button" onClick={this.handleLogout}>
                  Logout
                </Button>
              ) : null}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  movie: state.movie
});

const mapDispatchToProps = {
  getDataUser,
  getDataMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));

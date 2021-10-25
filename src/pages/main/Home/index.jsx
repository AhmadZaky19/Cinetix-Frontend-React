import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Navbar from "../../../components/Navbar";
import CardMovieNow from "../../../components/Card/MovieNow";
import CardMovieUpcoming from "../../../components/Card/MovieUpcoming";
import axios from "../../../utils/axios";
import Footer from "../../../components/Footer";
import GroupMovie from "../../../assets/img/group movie.png";
import "./index.css";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      page: 1,
      limit: 5,
      sort: "releaseDate",
      order: "DESC"
      // pageInfo: {}
    };
  }

  componentDidMount() {
    this.getDataMovie();
    // this.getDataMovieUpcoming();
  }

  getDataMovie = () => {
    axios
      .get(`movie?page=${this.state.page}&limit=${this.state.limit}`)
      .then((res) => {
        this.setState({
          data: res.data.data
        });
      })
      .catch((err) => {
        this.setState({
          msg: err.response.data.msg
        });
      });
  };

  // getDataMovieUpcoming = () => {
  //   axios
  //     .get(
  //       `movie?sort=${this.state.sort}&order=${this.state.order}&page=${this.state.page}&limit=${this.state.limit}`
  //     )
  //     .then((res) => {
  //       this.setState({
  //         data: res.data.data
  //         // pageInfo: res.data.pagination
  //       });
  //     })
  //     .catch((err) => {
  //       this.setState({
  //         msg: err.response.data.msg
  //       });
  //     });
  // };

  handlePagination = () => {
    this.setState(
      {
        limit: 10
      },
      () => {
        this.getDataMovie();
      }
    );
  };

  handleDetail = (data) => {
    this.props.history.push(`/movie-detail/${data}`);
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Navbar />
        <Container fluid className="homePage">
          <Row className="jumbotron">
            <Col sm={12} md={6} className="jumbotron__quote">
              <p>Nearest Cinema, Newest Movie,</p>
              <h1>Find out now!</h1>
            </Col>
            <Col sm={12} md={6} className="jumbotron__image">
              <img src={GroupMovie} alt="" className="jumbotron__image" />
            </Col>
          </Row>
          <Row className="movie__now">
            <div className="movie__now--title">
              <h4>Now Showing</h4>
              <h6 onClick={this.handlePagination}>view all</h6>
            </div>
            {data.map((item) => (
              <div className="col-md-2 card__movie" key={item.id}>
                <CardMovieNow data={item} handleDetail={() => this.handleDetail(item.id)} />
              </div>
            ))}
          </Row>
          <Row className="movie__upcoming">
            <div className="movie__upcoming--title">
              <h4>Upcoming Movies</h4>
              <h6>view all</h6>
            </div>
            <div className="movie__upcoming--month">
              <Button className="movie__upcoming--month-button">September</Button>
              <Button className="movie__upcoming--month-button">October</Button>
              <Button className="movie__upcoming--month-button">November</Button>
              <Button className="movie__upcoming--month-button">December</Button>
              <Button className="movie__upcoming--month-button">January</Button>
              <Button className="movie__upcoming--month-button">February</Button>
              <Button className="movie__upcoming--month-button">March</Button>
              <Button className="movie__upcoming--month-button">April</Button>
              <Button className="movie__upcoming--month-button">May</Button>
              {/* <Button className="movie__upcoming--month-button">June</Button> */}
            </div>
            {data.map((item) => (
              <div className="col-md-2 card__movie" key={item.id}>
                <CardMovieUpcoming data={item} handleDetail={this.handleDetail} />
              </div>
            ))}
          </Row>
          <Row>
            <div className="moviegoers">
              <h4>Be the vanguard of the</h4>
              <h1>Moviegoers</h1>
              <div className="moviegoers__join">
                <Form.Control
                  type="text"
                  placeholder="Type your email"
                  className="moviegoers__join--form"
                />
                <Button variant="primary" className="moviegoers__join--button">
                  Join now
                </Button>{" "}
              </div>
              <div className="moviegoers__join--caption">
                <p>
                  By joining you as a Tickitz member, <br />
                  we will always send you the latest updates via email .
                </p>
              </div>
            </div>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default HomePage;

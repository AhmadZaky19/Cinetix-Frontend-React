import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import Pagination from "react-paginate";
import { useHistory } from "react-router-dom";
import { getDataMovieById } from "../../../stores/actions/movie";
// import { schedule } from "../../../stores/actions/schedule";
import axios from "../../../utils/axios";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import EbvId from "../../../assets/img/ebuid.png";
import CineOne21 from "../../../assets/img/cineone.png";
import Hiflix from "../../../assets/img/hiflix.png";
import "./index.css";

const MovieDetail = (props) => {
  const dispatch = useDispatch();
  const dateNow = new Date().toISOString().split("T")[0];
  const history = useHistory();

  const [data, setData] = useState({});
  const [schedules, setSchedules] = useState([]);
  const [cities, setCities] = useState([
    "",
    "Jakarta Selatan",
    "Bandung",
    "Semarang",
    "Jakarta Utara",
    "Jakarta Timur"
  ]);
  const [selectedCity, setSelectedCity] = useState("");
  const [filter, setFilter] = useState({
    movieId: props.match.params.id,
    city: ""
  });
  const [paginate, setPaginate] = useState({ limit: 3, totalPage: 1 });
  const [page, setPage] = useState(1);
  const [selectedTime, setSelectedTime] = useState({
    time: "",
    id_schedule: "",
    premiere: "",
    location: ""
  });
  const [date, setDate] = useState(dateNow);

  const { movieId, city } = filter;

  const getSchedule = () => {
    axios
      .get(
        `schedule/?location=${city}&movieId=${movieId}&order=DESC&page=${page}&limit=${paginate.limit}`
      )
      .then((res) => {
        setSchedules(res.data.data);
        setPaginate({ ...paginate, totalPage: res.data.pagination.totalPage });
      })
      .catch((err) => {
        setSchedules([]);
      });
  };

  const handleLocation = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    getSchedule();
  };

  const getMovieById = () => {
    dispatch(getDataMovieById(props.match.params.id)).then((res) => {
      setData(res.value.data.data[0]);
    });
  };

  const handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    setFilter({ ...filter, page: selectedPage });
    setPage(selectedPage);
    getSchedule();
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleToOrder = () => {
    const { movieId } = filter;
    const { time, id_schedule, premiere, location } = selectedTime;
    history.push("/order", {
      time,
      id_schedule,
      premiere,
      movieId,
      date,
      location
    });
  };

  useEffect(() => {
    getMovieById();
    getSchedule();
    document.title = "Movie Detail";
  }, [filter]);

  return (
    <>
      <Navbar />
      <Container>
        <Row className="movieDetail">
          <Col md={3} sm={12} className="img">
            <img
              src={`${process.env.REACT_APP_URL_BACKEND}uploads/movie/${data.image}`}
              alt=""
              className="img-thumbnail"
            />
          </Col>
          <Col md={9} sm={12} className="movieDetail__desc">
            {" "}
            <h1>{data.name}</h1>
            <h6 className="movieDetail__desc--category">{data.category}</h6>
            <div className="movieDetail__desc--section">
              <p>Release date</p>
              <h6>{new Date(data.releaseDate).toDateString()}</h6>
            </div>
            <div className="movieDetail__desc--section">
              <p>Duration</p>
              <h6>
                {data.durationHour} hours {data.durationMinute} minutes
              </h6>
            </div>
            <div className="movieDetail__desc--section">
              <p>Directed by</p>
              <h6>{data.director}</h6>
            </div>
            <div className="movieDetail__desc--section">
              <p>Casts</p>
              <h6>{data.casts}</h6>
            </div>
          </Col>
        </Row>
        <Row className="movieSyn">
          <h5>Synopsis</h5>
          <p>{data.synopsis}</p>
        </Row>
        <Row className="showtime">
          <h4>Showtimes and Tickets</h4>
          <div className="showtime__filter">
            {" "}
            <input type="date" className="form-control" value={date} onChange={handleDate} />
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleLocation}
              value={filter.city}
              name="city"
            >
              {cities.map((item) => (
                <option key={item} value={item}>
                  {item === "" ? "All locations" : item}
                </option>
              ))}
            </select>
          </div>
        </Row>
        <Row>
          {schedules.length > 0 ? (
            schedules.map((item) => (
              <Col className="showtime__card" key={item.id} xs={1} sm={1} md={4}>
                <Card className="showtime__schedule">
                  <Row>
                    <Col>
                      {" "}
                      <Card.Img
                        variant="top"
                        src={
                          item.premiere === "ebu.id"
                            ? EbvId
                            : item.premiere === "hiflix"
                            ? Hiflix
                            : CineOne21
                        }
                        className="showtime__schedule--image"
                      />
                    </Col>
                    <Col className="showtime__schedule--location">
                      <h4>{item.premiere}</h4>
                      <p>{item.location}</p>
                    </Col>
                  </Row>
                  <hr />
                  <Card.Body>
                    {item.time.map((time) => (
                      <Button
                        key={time}
                        variant="light"
                        size="sm"
                        className="showtime__schedule--time"
                        onClick={() => {
                          setSelectedTime({
                            time: time,
                            id_schedule: item.id,
                            premiere: item.premiere,
                            location: item.location
                          });
                        }}
                      >
                        {time}
                      </Button>
                    ))}
                  </Card.Body>
                  <div className="showtime__schedule--ticket">
                    <div className="showtime__schedule--ticket__info">
                      <h5>Price</h5>
                    </div>
                    <div className="showtime__schedule--ticket__price">
                      <h5>${item.price}/seat</h5>
                    </div>
                  </div>
                  <div className="px-4">
                    <Button
                      as="input"
                      type="submit"
                      value="Book now"
                      className="showtime__schedule--book"
                      onClick={handleToOrder}
                    />{" "}
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <h1 className="noSchedule">No Schedule</h1>
          )}
        </Row>
        <Row>
          <Col className="page">
            <div className="pagination-nav mt-5 d-flex justify-content-center">
              {" "}
              <Pagination
                previousLabel={null}
                nextLabel={null}
                breakLabel={"..."}
                pageCount={paginate.totalPage}
                onPageChange={handlePagination}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                disabledClassName={"disabled"}
                activeClassName={"active"}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie
  // schedule: state.schedule
});

const mapDispatchToProps = {
  getDataMovieById
  // schedule
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

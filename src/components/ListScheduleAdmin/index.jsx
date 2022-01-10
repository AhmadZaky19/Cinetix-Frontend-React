import React, { useState, useEffect } from "react";
import { Row, Card, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Pagination from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import { getDataMovie } from "../../stores/actions/movie";
import {
  getSchedule,
  updateSchedule,
  deleteSchedule,
  setDataUpdate
} from "../../stores/actions/schedule";
import CineOne from "../../assets/img/cineone.png";
import Ebv from "../../assets/img/ebuid.png";
import Hiflix from "../../assets/img/hiflix.png";
import axios from "../../utils/axios";
import "./index.css";

const ListScheduleAdmin = (props) => {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [idSelected, setIdSelected] = useState("");
  const [cities, setCities] = useState([
    "",
    "Jakarta Selatan",
    "Bandung",
    "Semarang",
    "Jakarta Utara",
    "Jakarta Timur"
  ]);
  const [selectedSchedule, setSelectedSchedule] = useState({});
  const [allMovies, setAllMovies] = useState([]);
  const [allSchedule, setAllSchedule] = useState([]);
  const [filter, setFilter] = useState({
    location: "",
    movieId: "",
    sort: "",
    order: "ASC",
    page: 1,
    limit: 6,
    totalPage: 0
  });

  const [sort, setSort] = useState("");

  const getAllSchedule = () => {
    props.getSchedule("", "", sort, filter.order, filter.page, filter.limit).then((res) => {
      setAllSchedule(res.value.data.data);
      // setFilter({ ...filter, totalPage: res.data.pagination.totalPage });
    });
  };

  const updateSelectedSchedule = (data) => {
    props.selectedSchedule(data);
  };

  const handleDeleteSchedule = () => {
    const userClick = confirm("Confirm delete schedule?");
    if (userClick) {
      props.deleteSchedule(id).then(() => {
        props
          .getSchedule("", "", filter.sort, filter.order, filter.page, filter.limit)
          .then((res) => {
            setAllSchedule(res.value.data.data);
            toast.success("Delete movie success");
          });
      });
    } else {
      toast.error("Delete schedule unsuccessful");
      return false;
    }
  };

  const getAllMovie = () => {
    props.getDataMovie().then((res) => {
      setAllMovies(res.value.data.data);
    });
  };

  // const handlePagination = (e) => {
  //   const { limit, location, sort, movie_id } = filter;
  //   const selectedPage = e.selected + 1;
  //   setFilter({ ...filter, page: selectedPage });
  //   getAllSchedule(selectedPage, limit, location, sort, movie_id);
  // };

  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSort(sortValue);
    history.push(`/manage-schedule?sort=${e.target.value}`);

    // const { page, limit, location, sort, movie_id } = filter;
    // setFilter({ ...filter, sort: val });
    // getAllSchedule(page, limit, location, val, movie_id);
  };

  const handleLocation = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    getAllSchedule();
  };

  console.log(filter);

  const handleMovieId = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    getAllSchedule();
  };

  useEffect(() => {
    props.dataAllSchedule.length > 0 ? setAllSchedule(props.dataAllSchedule) : null;
    getAllSchedule();
    getAllMovie();
  }, []);

  return (
    <>
      <ToastContainer />
      <Row className="schedule__admin">
        <div className="schedule__admin--h2">
          <h2>Data Schedule</h2>
          <div className="schedule__admin--sort">
            <select
              className="form-select form-select-sm schedule__admin__sort--sort"
              aria-label=".form-select-sm example"
              onChange={handleSort}
            >
              <option value="">Sort</option>
              <option value="premiere">Premiere</option>
              <option value="price">Price</option>
            </select>
            <select
              className="form-select form-select-sm schedule__admin__sort--sort"
              aria-label=".form-select-sm example"
              onChange={handleLocation}
              value={filter.location}
              name="location"
            >
              {cities.map((item) => (
                <option key={item} value={item}>
                  {item === "" ? "Location" : item}
                </option>
              ))}
            </select>
            <select
              className="form-select form-select-sm schedule__admin__sort--sort"
              aria-label=".form-select-sm example"
              name="movieId"
              value={filter.movieId}
              onChange={handleMovieId}
            >
              <option>Movie</option>
              {allMovies.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Card className="schedule__admin-section">
          <Row>
            {allSchedule.length > 0 ? (
              allSchedule.map((item) => (
                <Col className="schedule__admin--card" key={item.id} xs={1} sm={1} md={4}>
                  <Card className="showtime__schedule">
                    <Row>
                      <Col>
                        {" "}
                        <Card.Img
                          variant="top"
                          src={
                            item.premiere === "ebu.id"
                              ? Ebv
                              : item.premiere === "hiflix"
                              ? Hiflix
                              : CineOne
                          }
                          className="schedule__admin--image"
                        />
                      </Col>
                      <Col className="schedule__admin--location">
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
                          className="schedule__admin--time mx-3"
                          disabled
                        >
                          {time}
                        </Button>
                      ))}
                      <div className="schedule__admin--ticket">
                        <div className="schedule__admin--ticket__info">
                          <h5>Price</h5>
                        </div>
                        <div className="schedule__admin--ticket__price">
                          <h5>${item.price}.00/seat</h5>
                        </div>
                      </div>
                      <div className="schedule__admin--button2">
                        <Button
                          className="button2__update mx-2"
                          onClick={() => updateSelectedSchedule(item)}
                        >
                          Update
                        </Button>
                        <Button
                          className="button2__delete mx-2"
                          onClick={() => handleDeleteSchedule(id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <h1 className="noSchedule">No Schedule</h1>
            )}
          </Row>
        </Card>
        <div className="mt-3 d-flex justify-content-center">
          {" "}
          <Pagination
            previousLabel={null}
            nextLabel={null}
            breakLabel={"..."}
            // pageCount={paginate.totalPage}
            // onPageChange={handlePagination}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            disabledClassName={"disabled"}
            activeClassName={"active"}
          />
        </div>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  schedule: state.schedule
});

const mapDispatchToProps = {
  getSchedule,
  getDataMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScheduleAdmin);

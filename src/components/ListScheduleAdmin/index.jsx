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
import "./index.css";

const ListScheduleAdmin = (props) => {
  const history = useHistory();

  const [locations, setLocations] = useState([
    "",
    "Jakarta Selatan",
    "Bandung",
    "Semarang",
    "Jakarta Utara",
    "Jakarta Timur"
  ]);
  const [allMovies, setAllMovies] = useState([]);
  const [allSchedule, setAllSchedule] = useState({ ...props.schedule.data });
  const [page, setPage] = useState(1);
  const [paginate, setPaginate] = useState({ limit: 6, totalPage: 1 });
  const [sort, setSort] = useState("");
  const [location, setLocation] = useState("");
  const [movieId, setMovieId] = useState("");

  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSort(sortValue);
    history.push(`/manage-schedule?sort=${e.target.value}`);
  };

  const handleLocation = (e) => {
    const locationValue = e.target.value;
    setLocation(locationValue);
    history.push(`/manage-schedule?location=${e.target.value}`);
  };

  const handleMovieId = (e) => {
    const movieIdValue = e.target.value;
    setMovieId(movieIdValue);
    history.push(`/manage-schedule?movieId=${e.target.value}`);
  };

  const getAllSchedule = () => {
    props.getSchedule(location, movieId, sort, "ASC", page, paginate.limit).then((res) => {
      setAllSchedule(res.value.data.data);
      setPaginate({ ...paginate, totalPage: res.value.data.pagination.totalPage });
    });
  };

  const handlePagination = (e) => {
    const selectedPage = e.selected + 1;
    setPage(selectedPage);
    getAllSchedule();
  };

  const handleDeleteSchedule = (id) => {
    const userClick = confirm("Confirm delete schedule?");
    if (userClick) {
      props.deleteSchedule(id).then(() => {
        props.getSchedule(location, movieId, sort, "ASC", page, paginate.limit).then((res) => {
          setAllSchedule(res.value.data.data);
          toast.success("Delete schedule success");
        });
      });
    } else {
      toast.error("Delete schedule unsuccessful");
      return false;
    }
  };

  const getAllMovie = () => {
    props.getDataMovie("", "", "", "", "", 30).then((res) => {
      setAllMovies(res.value.data.data);
    });
  };

  useEffect(() => {
    getAllMovie();
    getAllSchedule();
  }, [location, movieId, sort, page, paginate.limit]);

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
              value={location}
              name="location"
            >
              {locations.map((item) => (
                <option key={item} value={item}>
                  {item === "" ? "Location" : item}
                </option>
              ))}
            </select>
            <select
              className="form-select form-select-sm schedule__admin__sort--sort"
              aria-label=".form-select-sm example"
              name="movieId"
              value={movieId}
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
            {props.schedule.data.length > 0 ? (
              props.schedule.data.map((item) => {
                const setNewDate1 = new Date(item.dateStart).toISOString().split("T")[0];
                const setNewDate2 = new Date(item.dateEnd).toISOString().split("T")[0];
                const setNewDataSchedule = {
                  ...item,
                  dateStart: setNewDate1,
                  dateEnd: setNewDate2
                };
                return (
                  <Col
                    className="schedule__admin--card"
                    key={setNewDataSchedule.id}
                    xs={1}
                    sm={1}
                    md={4}
                  >
                    <Card className="showtime__schedule">
                      <Row>
                        <Col>
                          {" "}
                          <Card.Img
                            variant="top"
                            src={
                              setNewDataSchedule.premiere === "ebu.id"
                                ? Ebv
                                : setNewDataSchedule.premiere === "hiflix"
                                ? Hiflix
                                : CineOne
                            }
                            className="schedule__admin--image"
                          />
                        </Col>
                        <Col className="schedule__admin--location">
                          <h4>{setNewDataSchedule.premiere}</h4>
                          <p>{setNewDataSchedule.location}</p>
                        </Col>
                      </Row>
                      <hr />
                      <Card.Body>
                        {setNewDataSchedule.time.map((time) => (
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
                            <h5>${setNewDataSchedule.price}.00/seat</h5>
                          </div>
                        </div>
                        <div className="schedule__admin--button2">
                          <Button
                            className="button2__update mx-2"
                            onClick={() => props.setDataUpdate(setNewDataSchedule)}
                          >
                            Update
                          </Button>
                          <Button
                            className="button2__delete mx-2"
                            onClick={() => handleDeleteSchedule(item.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
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
            pageCount={paginate.totalPage}
            onPageChange={handlePagination}
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
  updateSchedule,
  deleteSchedule,
  setDataUpdate,
  getDataMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScheduleAdmin);

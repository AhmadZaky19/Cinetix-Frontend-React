import React, { useState, useEffect } from "react";
import { Row, Card, Col, Form, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { getDataMovie, getDataMovieById } from "../../../stores/actions/movie";
import { getSchedule, postSchedule, updateSchedule } from "../../../stores/actions/schedule";
import CineOne from "../../../assets/img/cineone.png";
import Ebv from "../../../assets/img/ebuid.png";
import Hiflix from "../../../assets/img/hiflix.png";
import "./index.css";

const premiereList = [
  { id_premiere: 1, premiere: "ebu.id", img_premiere: Ebv },
  { id_premiere: 2, premiere: "hiflix", img_premiere: Hiflix },
  { id_premiere: 3, premiere: "cineone21", img_premiere: CineOne }
];

const FormManageSchedule = (props) => {
  const [showInput, setShowInput] = useState(false);
  const [cities, setCities] = useState([
    "",
    "Jakarta Selatan",
    "Bandung",
    "Semarang",
    "Jakarta Utara",
    "Jakarta Timur"
  ]);
  // const { dataMovie } = props;
  const [movieList, setMovieList] = useState([]);
  const [imagePreview, setImagePreview] = useState("");
  const imageUpdate = props.schedule.data.map((item) => item.image);
  const [form, setForm] = useState({
    movieId: "",
    premiere: "",
    price: "",
    location: "",
    dateStart: "",
    dateEnd: "",
    time: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === "movieId") {
      props.getDataMovieById(value).then((res) => {
        setImagePreview(res.value.data.data[0].image);
      });
    }
  };

  const postSchedule = () => {
    for (const item in form) {
      if (!form[item]) {
        toast.error("All input must be fiiled");
        return;
      }
    }
    const data = { ...form, time: form.time.join(",") };
    props.postSchedule(data).then((res) => {
      toast.success("Success add schedule");
      handleResetForm();
      props.getSchedule("", "", "", "ASC", 1, 6);
    });
  };

  const updateSchedule = () => {
    const data = { ...form, time: form.time.join(",") };
    props.updateSchedule(form.id, data).then((res) => {
      toast.success("Success update schedule");
      handleResetForm();
      props.getSchedule("", "", "", "ASC", 1, 6);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      props.schedule.isUpdate = false;
    });
  };

  const handleResetForm = () => {
    setForm({
      movieId: "",
      premiere: "",
      price: "",
      location: "",
      dateStart: "",
      dateEnd: "",
      time: []
    });
    setImagePreview("");
    props.schedule.isUpdate = false;
  };

  const getAllMovie = () => {
    props.getDataMovie("", "", "", "", "", 30).then((res) => {
      setMovieList(res.value.data.data);
    });
  };

  const selectPremiere = (data) => {
    setForm({ ...form, premiere: data });
  };

  const handleTime = (e) => {
    if (e.key === "Enter") {
      setForm({ ...form, time: [...form.time, e.target.value] });
    }
    setShowInput(false);
  };

  useEffect(() => {
    getAllMovie();
    setForm({ ...form, ...props.schedule.schedules });
  }, [props.schedule.schedules]);

  return (
    <>
      <ToastContainer />
      <Row className="schedule__admin">
        <h2 className="schedule__admin--h2">Form Schedule</h2>
        <Card>
          <Row>
            <Col md={3}>
              <Image
                src={
                  imagePreview
                    ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${imagePreview}`
                    : form.image
                    ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${form.image}`
                    : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                }
                className="schedule__admin--img"
                thumbnail
              />
            </Col>
            <Col md={9}>
              <Form className="schedule__admin--form">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail" className="form__schedule--left">
                    <Form.Label>Movie</Form.Label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="movieId"
                      value={form.movieId}
                      onChange={handleChange}
                    >
                      <option>Select movie</option>
                      {movieList.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Location</Form.Label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                    >
                      {cities.map((item, index) => (
                        <option key={index} value={item}>
                          {item === "" ? "Select Location" : item}
                        </option>
                      ))}
                    </select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    className="form__ticket--price form__schedule--left"
                  >
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Input ticket price"
                      name="price"
                      value={form.price}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Col className="schedule__date--range">
                    <Form.Group as={Col} controlId="formGridZip" className="schedule__date--start">
                      <Form.Label>Date Start</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateStart"
                        value={form.dateStart}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Date End</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateEnd"
                        value={form.dateEnd}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity" className="form__schedule--left">
                    <Form.Label>Premiere</Form.Label>
                    <Col className="schedule__premiere">
                      {premiereList.map((item, index) => (
                        <Button
                          className={`schedule__premiere--button ${
                            item.premiere === form.premiere
                              ? "schedule__premiere--button--select"
                              : ""
                          }`}
                          onClick={() => selectPremiere(item.premiere)}
                          key={item.id}
                          // type="submit"
                        >
                          <img
                            src={item.img_premiere}
                            alt=""
                            className="schedule__premiere__button--img"
                          />
                        </Button>
                      ))}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label className="mx-2">Time</Form.Label>
                    <Col>
                      {showInput ? (
                        <input onKeyPress={handleTime} type="time"></input>
                      ) : (
                        <Button
                          className="schedule__premiere--add mx-2"
                          onClick={() => setShowInput(true)}
                        >
                          +
                        </Button>
                      )}
                      {form.time?.length > 0
                        ? form.time.map((item, index) => (
                            <Button className="schedule__premiere--time mx-2" key={index}>
                              {item}
                            </Button>
                          ))
                        : null}
                    </Col>
                  </Form.Group>
                </Row>
              </Form>
            </Col>
          </Row>
          <div className="schedule__admin--button">
            <Button className="schedule__admin__button--reset" onClick={handleResetForm}>
              Reset
            </Button>
            <Button
              className="schedule__admin__button--submit"
              onClick={props.schedule.isUpdate ? updateSchedule : postSchedule}
            >
              {props.schedule.isUpdate ? "Update" : "Submit"}
            </Button>
          </div>
        </Card>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  dataMovie: state.getDataMovie,
  schedule: state.schedule
});

const mapDispatchToProps = {
  getSchedule,
  postSchedule,
  updateSchedule,
  getDataMovie,
  getDataMovieById
};

export default connect(mapStateToProps, mapDispatchToProps)(FormManageSchedule);

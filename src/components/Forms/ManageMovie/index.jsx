import React, { useState, useEffect, useRef } from "react";
import { Row, Card, Col, Form, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { postMovie, getDataMovie, updateMovie } from "../../../stores/actions/movie";
import "./index.css";

const FormManageMovie = (props) => {
  const [imageMovie, setImageMovie] = useState("");
  const [movieData, setMovieData] = useState({
    id: "",
    name: "",
    category: "",
    director: "",
    casts: "",
    releaseDate: "",
    durationHour: "",
    durationMinute: "",
    synopsis: "",
    image: null
  });
  const target = useRef(movieData.image);

  const handleFile = (e) => {
    setImageMovie(URL.createObjectURL(e.target.files[0]));
    setMovieData({ ...movieData, image: e.target.files[0] });
  };

  const handleChangeText = (e) => {
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateMovie = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const item in movieData) {
      formData.append(item, movieData[item]);
    }

    props
      .updateMovie(movieData.id, formData)
      .then(() => {
        setMovieData({
          name: "",
          category: "",
          director: "",
          casts: "",
          releaseDate: "",
          durationHour: "",
          durationMinute: "",
          synopsis: "",
          image: null
        });
        setImageMovie("");
        toast.success("Success update movie");
        props.getDataMovie("", "", "name", "ASC", 1, 4);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 1500);
        props.movie.isUpdate = false;
      })
      .catch((err) => {
        toast.error("Update movie unsuccessful");
      });
  };

  const handlePostMovie = (e) => {
    e.preventDefault();
    const {
      name,
      category,
      director,
      casts,
      releaseDate,
      durationHour,
      durationMinute,
      synopsis,
      image
    } = movieData;
    const setData = {
      name,
      category,
      director,
      casts,
      releaseDate,
      durationHour,
      durationMinute,
      synopsis,
      image
    };
    const formImage = new FormData();
    for (const item in setData) {
      formImage.append(item, setData[item]);
    }
    for (const data in setData) {
      if (!setData[data]) {
        toast.error("All input must be filled");
        return false;
      }
    }
    props.postMovie(formImage).then(() => {
      setMovieData({
        name: "",
        category: "",
        director: "",
        casts: "",
        releaseDate: "",
        durationHour: "",
        durationMinute: "",
        synopsis: "",
        image: null
      });
      setImageMovie("");
      toast.success("Success post movie");
      props.getDataMovie("", "", "name", "ASC", 1, 4);
    });
  };

  const handleResetForm = () => {
    setMovieData({
      name: "",
      category: "",
      director: "",
      casts: "",
      releaseDate: "",
      durationHour: "",
      durationMinute: "",
      synopsis: ""
    });
    props.movie.isUpdate = false;
  };

  const handleChangeFile = () => {
    target.current.click();
  };

  useEffect(() => {
    setMovieData({ ...props.movie.movies });
  }, [props.movie.movies]);

  return (
    <>
      <Row className="movie__admin">
        <h2 className="movie__admin--h2">Form Movie</h2>
        <ToastContainer />
        <Form onSubmit={props.movie.isUpdate ? handleUpdateMovie : handlePostMovie} className="p-0">
          <Card>
            <Row>
              <Col md={3}>
                <div onClick={handleChangeFile}>
                  <Image
                    src={
                      imageMovie
                        ? imageMovie
                        : movieData.image
                        ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${movieData.image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    className="movie__admin--img"
                    thumbnail
                  />
                  <input
                    type="file"
                    name="image"
                    ref={target}
                    style={{ display: "none" }}
                    onChange={handleFile}
                  />
                </div>
              </Col>
              <Col md={9}>
                <div className="movie__admin--form">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" className="form__left">
                      <Form.Label>Movie Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type movie name"
                        name="name"
                        onChange={handleChangeText}
                        value={movieData.name}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type movie category"
                        name="category"
                        onChange={handleChangeText}
                        value={movieData.category}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" className="form__left">
                      <Form.Label>Director</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type movie director"
                        name="director"
                        onChange={handleChangeText}
                        value={movieData.director}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Casts</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Type movie casts"
                        name="casts"
                        onChange={handleChangeText}
                        value={movieData.casts}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity" className="form__left">
                      <Form.Label>Release date</Form.Label>
                      <Form.Control
                        type="date"
                        name="releaseDate"
                        onChange={handleChangeText}
                        value={movieData.releaseDate}
                      />
                    </Form.Group>
                    <Col className="movie__duration--time">
                      <Form.Group
                        as={Col}
                        controlId="formGridZip"
                        className="movie__duration--hour"
                      >
                        <Form.Label>Duration Hour</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Hour..."
                          name="durationHour"
                          onChange={handleChangeText}
                          value={movieData.durationHour}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Duration Minute</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Minute..."
                          name="durationMinute"
                          onChange={handleChangeText}
                          value={movieData.durationMinute}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Form>
                <Form.Group
                  className="mb-3 movie__duration--synopsis"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Synopsis</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type movie synopsis"
                    name="synopsis"
                    onChange={handleChangeText}
                    value={movieData.synopsis}
                  />
                </Form.Group>
              </Form>
            </Row>
            <div className="movie__admin--button">
              <Button className="movie__admin__button--reset" onClick={handleResetForm}>
                Reset
              </Button>
              <Button className="movie__admin__button--submit" type="submit">
                {props.movie.isUpdate ? "Update" : "Submit"}
              </Button>
            </div>
          </Card>
        </Form>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie
});

const mapDispatchToProps = {
  postMovie,
  getDataMovie,
  updateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(FormManageMovie);

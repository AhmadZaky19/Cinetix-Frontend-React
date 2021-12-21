import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { getDataMovie } from "../../../stores/actions/movie";
import { connect } from "react-redux";
import "../index.css";

const CardMovieNow = (props) => {
  const [data, setData] = useState([]);

  const [month, setMonth] = useState(new Date().toISOString().split("T")[0].split("-")[1]);

  const getShowingMovie = () => {
    props.getDataMovie(month, "", "", "", "", 5).then((res) => {
      setData(res.value.data.data);
    });
  };

  useEffect(() => {
    getShowingMovie();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((item) => (
          <Card className="cardMovie__now" key={item.id}>
            <Card.Img
              variant="top"
              className="cardMovie__now--img"
              src={
                item.image
                  ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${item.image}`
                  : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
              }
            />
            <Card.Body className="cardMovie__now--desc">
              <Card.Title className="cardMovie__now--title">{item.name}</Card.Title>
              <Card.Text className="cardMovie__now--genre">{item.category}</Card.Text>
              <Button
                variant="primary"
                className="cardMovie__now--detail"
                onClick={() => this.props.handleDetail(id)}
              >
                Details
              </Button>
              <Button variant="primary" className="cardMovie__now--book">
                Book now
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div className="coming-soon text-center">
          <h1>Coming Soon</h1>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie
});

const mapDispatchToProps = {
  getDataMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMovieNow);

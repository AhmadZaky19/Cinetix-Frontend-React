import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getDataMovie } from "../../../stores/actions/movie";
import "../index.css";

const CardMovieUpcoming = (props) => {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState("");

  const getUpcomingMovie = () => {
    props
      .getDataMovie(month, "", "", "", "", 5)
      .then((res) => {
        setData(res.value.data.data);
      })
      .catch(() => {
        setData([]);
      });
  };

  useEffect(() => {
    getUpcomingMovie();
  }, [month]);

  const changeMonth = (event) => {
    setMonth(event);
  };

  return (
    <>
      <div className="movie__upcoming--month">
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(1)}
          id={month === 1 ? "active" : null}
        >
          January
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(2)}
          id={month === 2 ? "active" : null}
        >
          February
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(3)}
          id={month === 3 ? "active" : null}
        >
          March
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(4)}
          id={month === 4 ? "active" : null}
        >
          April
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(5)}
          id={month === 5 ? "active" : null}
        >
          May
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(6)}
          id={month === 6 ? "active" : null}
        >
          June
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(7)}
          id={month === 7 ? "active" : null}
        >
          July
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(8)}
          id={month === 8 ? "active" : null}
        >
          August
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(9)}
          id={month === 9 ? "active" : null}
        >
          September
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(10)}
          id={month === 10 ? "active" : null}
        >
          October
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(11)}
          id={month === 11 ? "active" : null}
        >
          November
        </Button>
        <Button
          className="movie__upcoming--month-button"
          onClick={() => changeMonth(12)}
          id={month === 12 ? "active" : null}
        >
          December
        </Button>
      </div>
      <div className="d-flex">
        {data.length > 0 ? (
          data.map((item) => (
            <Card className="cardMovie__upcoming" key={item.id}>
              <Card.Img
                variant="top"
                className="cardMovie__now--img"
                src={
                  item.image
                    ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${item.image}`
                    : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                }
              />
              <Card.Body className="cardMovie__upcoming--desc">
                <Card.Title className="cardMovie__upcoming--title">{item.name}</Card.Title>
                <Card.Text className="cardMovie__upcoming--genre">{item.category}</Card.Text>
                <Button
                  variant="primary"
                  className="cardMovie__upcoming--detail"
                  // onClick={() => this.props.handleDetail(id)}
                >
                  Details
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="coming-soon">
            <h1>Coming Soon</h1>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie
});

const mapDispatchToProps = {
  getDataMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(CardMovieUpcoming);

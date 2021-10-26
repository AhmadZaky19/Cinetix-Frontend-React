import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../index.css";

class CardMovieUpcoming extends Component {
  render() {
    const { id, name, category, image } = this.props.data;
    return (
      <>
        <Card className="cardMovie__upcoming">
          <Card.Img
            variant="top"
            className="cardMovie__now--img"
            src={
              image
                ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
          />
          <Card.Body className="cardMovie__upcoming--desc">
            <Card.Title className="cardMovie__upcoming--title">{name}</Card.Title>
            <Card.Text className="cardMovie__upcoming--genre">{category}</Card.Text>
            <Button
              variant="primary"
              className="cardMovie__upcoming--detail"
              onClick={() => this.props.handleDetail(id)}
            >
              Details
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardMovieUpcoming;

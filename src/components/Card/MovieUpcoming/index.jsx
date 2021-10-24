import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../index.css";
import LionKing from "../../../assets/img/Lionking.png";

class CardMovieUpcoming extends Component {
  render() {
    return (
      <>
        <Card className="cardMovie__upcoming">
          <Card.Img variant="top" src={LionKing} />
          <Card.Body className="cardMovie__upcoming--desc">
            <Card.Title className="cardMovie__upcoming--title">The Lion king</Card.Title>
            <Card.Text className="cardMovie__upcoming--genre">Adventure, Slice of Life</Card.Text>
            <Button variant="primary" className="cardMovie__upcoming--detail">
              Details
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardMovieUpcoming;

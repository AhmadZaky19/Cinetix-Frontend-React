import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "../index.css";
import LionKing from "../../../assets/img/Lionking.png";

class CardMovieNow extends Component {
  render() {
    return (
      <>
        <Card className="cardMovie__now">
          <Card.Img variant="top" src={LionKing} />
          <Card.Body className="cardMovie__now--desc">
            <Card.Title className="cardMovie__now--title">The Lion king</Card.Title>
            <Card.Text className="cardMovie__now--genre">Adventure, Slice of Life</Card.Text>
            <Button variant="primary" className="cardMovie__now--detail">
              Details
            </Button>
            <Button variant="primary" className="cardMovie__now--book">
              Book now
            </Button>
          </Card.Body>
        </Card>
        <Card className="cardMovie__now">
          <Card.Img
            variant="top"
            src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
          />
          <Card.Body className="cardMovie__now--desc">
            <Card.Title className="cardMovie__now--title">The Lion king</Card.Title>
            <Card.Text className="cardMovie__now--genre">Adventure, Slice of Life</Card.Text>
            <Button variant="primary" className="cardMovie__now--detail">
              Details
            </Button>
            <Button variant="primary" className="cardMovie__now--book">
              Book now
            </Button>
          </Card.Body>
        </Card>
        <Card className="cardMovie__now">
          <Card.Img variant="top" src={LionKing} />
          <Card.Body className="cardMovie__now--desc">
            <Card.Title className="cardMovie__now--title">The Lion king</Card.Title>
            <Card.Text className="cardMovie__now--genre">Adventure, Slice of Life</Card.Text>
            <Button variant="primary" className="cardMovie__now--detail">
              Details
            </Button>
            <Button variant="primary" className="cardMovie__now--book">
              Book now
            </Button>
          </Card.Body>
        </Card>
        <Card className="cardMovie__now">
          <Card.Img variant="top" src={LionKing} />
          <Card.Body className="cardMovie__now--desc">
            <Card.Title className="cardMovie__now--title">The Lion king</Card.Title>
            <Card.Text className="cardMovie__now--genre">Adventure, Slice of Life</Card.Text>
            <Button variant="primary" className="cardMovie__now--detail">
              Details
            </Button>
            <Button variant="primary" className="cardMovie__now--book">
              Book now
            </Button>
          </Card.Body>
        </Card>
        <Card className="cardMovie__now">
          <Card.Img variant="top" src={LionKing} />
          <Card.Body className="cardMovie__now--desc">
            <Card.Title className="cardMovie__now--title">The Lion king</Card.Title>
            <Card.Text className="cardMovie__now--genre">Adventure, Slice of Life</Card.Text>
            <Button variant="primary" className="cardMovie__now--detail">
              Details
            </Button>
            <Button variant="primary" className="cardMovie__now--book">
              Book now
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default CardMovieNow;

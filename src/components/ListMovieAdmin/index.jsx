import React from "react";
import { Row, Card, Col, Form, Button, Image } from "react-bootstrap";
import LionKing from "../../assets/img/Lionking.png";
import "./index.css";

const ListMovieAdmin = () => {
  return (
    <>
      <Row className="movie__admin">
        <div className="movie__admin--h2">
          <h2>Data Movie</h2>
          <div className="movie__admin--sort">
            <select
              className="form-select form-select-sm movie__admin__sort--sort"
              aria-label=".form-select-sm example"
            >
              <option selected>Sort</option>
              <option value="1">A - Z</option>
              <option value="2">Z - A</option>
            </select>
            <input
              className="form-control form-control-sm movie__admin__sort--search"
              type="text"
              placeholder="Search Movie Name ..."
            />
          </div>
        </div>
        <Card className="movie__admin-section">
          <Row>
            <Card className="cardMovie__admin">
              <Card.Img variant="top" className="cardMovie__admin--img" src={LionKing} />
              <Card.Body className="cardMovie__admin--desc">
                <Card.Title className="cardMovie__admin--title">The Lion King</Card.Title>
                <Card.Text className="cardMovie__admin--genre">Adventure</Card.Text>
                <Button variant="primary" className="cardMovie__admin--update">
                  Update
                </Button>
                <Button variant="primary" className="cardMovie__admin--delete">
                  Delete
                </Button>
              </Card.Body>
            </Card>
            <Card className="cardMovie__admin">
              <Card.Img variant="top" className="cardMovie__admin--img" src={LionKing} />
              <Card.Body className="cardMovie__admin--desc">
                <Card.Title className="cardMovie__admin--title">The Lion King</Card.Title>
                <Card.Text className="cardMovie__admin--genre">Adventure</Card.Text>
                <Button variant="primary" className="cardMovie__admin--update">
                  Update
                </Button>
                <Button variant="primary" className="cardMovie__admin--delete">
                  Delete
                </Button>
              </Card.Body>
            </Card>
            <Card className="cardMovie__admin">
              <Card.Img variant="top" className="cardMovie__admin--img" src={LionKing} />
              <Card.Body className="cardMovie__admin--desc">
                <Card.Title className="cardMovie__admin--title">The Lion King</Card.Title>
                <Card.Text className="cardMovie__admin--genre">Adventure</Card.Text>
                <Button variant="primary" className="cardMovie__admin--update">
                  Update
                </Button>
                <Button variant="primary" className="cardMovie__admin--delete">
                  Delete
                </Button>
              </Card.Body>
            </Card>
            <Card className="cardMovie__admin">
              <Card.Img variant="top" className="cardMovie__admin--img" src={LionKing} />
              <Card.Body className="cardMovie__admin--desc">
                <Card.Title className="cardMovie__admin--title">The Lion King</Card.Title>
                <Card.Text className="cardMovie__admin--genre">Adventure</Card.Text>
                <Button variant="primary" className="cardMovie__admin--update">
                  Update
                </Button>
                <Button variant="primary" className="cardMovie__admin--delete">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Card>
      </Row>
    </>
  );
};

export default ListMovieAdmin;

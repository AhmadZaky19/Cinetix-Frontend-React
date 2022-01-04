import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { Row, Col, Button, Card } from "react-bootstrap";
import { getDataBookingByUserId } from "../../../stores/actions/booking";
import CineOne21 from "../../../assets/img/cineone.png";
import Hiflix from "../../../assets/img/hiflix.png";
import EbvId from "../../../assets/img/ebuid.png";
import "./index.css";

const History = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [data, setData] = useState([]);

  const getBookingByUserId = () => {
    dispatch(getDataBookingByUserId(props.user.dataUser.id)).then((res) => {
      setData(res.value.data.data);
    });
  };

  useEffect(() => {
    getBookingByUserId();
  }, []);
  return (
    <>
      <div className="user__data--orderHistory">
        {data.length > 0 ? (
          data.map((item) => (
            <>
              <Card className="order__history" key={item.id}>
                <Row className="mx-4">
                  <Col md={9} className="order__history--desc">
                    <p style={{ color: "#AAAAAA" }}>
                      {moment(item.dateBooking).format("dddd, MMMM Do YYYY")} -{" "}
                      {item.timeBooking.substring(0, 5)}
                    </p>
                    <h4>{item.name}</h4>
                  </Col>
                  <Col md={3}>
                    {" "}
                    <div className="order__history--image">
                      <Card.Img
                        variant="top"
                        src={
                          item.premiere === "ebu.id"
                            ? EbvId
                            : item.premiere === "hiflix"
                            ? Hiflix
                            : CineOne21
                        }
                      />
                    </div>
                  </Col>
                </Row>
                <hr />
                <Card.Body>
                  <div className="order__history--ticket">
                    {item.statusUsed === "active" ? (
                      <Button className="order__history--button1 mx-2" disabled>
                        Ticket in active
                      </Button>
                    ) : (
                      <Button className="order__history--button2 mx-2" disabled>
                        Ticket used
                      </Button>
                    )}

                    <div className="order__history--details">
                      <h5>Show Details</h5>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <br />
            </>
          ))
        ) : (
          <div className="coming-soon">
            <h1>No Order History</h1>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  booking: state.booking,
  user: state.user
});

const mapDispatchToProps = {
  getDataBookingByUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

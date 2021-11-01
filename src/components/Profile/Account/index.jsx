import React from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "./index.css";

const Account = () => {
  return (
    <>
      <div className="user__data--account">
        <h6>Details Information</h6>
        <hr />
        <Form className="user__data--form">
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text style={{ backgroundColor: "white" }}>+62</InputGroup.Text>
                <Form.Control type="text" />
              </InputGroup>{" "}
            </Form.Group>
          </Row>
          <Button className="user__data--button">Update Changes</Button>
        </Form>
        <h6 style={{ paddingTop: "90px" }}>Account and Privacy</h6>
        <hr />
        <Form className="user__data--form">
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="Write your password" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm your password" />
            </Form.Group>
          </Row>
          <Button className="user__data--button">Update Changes</Button>
        </Form>
      </div>
    </>
  );
};

export default Account;

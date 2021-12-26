import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { getDataUser, updateDataUser, updatePassword } from "../../../stores/actions/user";
import "./index.css";

const Account = (props) => {
  const [getUser, setGetUser] = useState({
    firstName: props.user.dataUser.firstName,
    lastName: props.user.dataUser.lastName,
    email: props.user.dataUser.email,
    phoneNumber: props.user.dataUser.phoneNumber
  });
  const [newPass, setNewPass] = useState({ newPassword: "", confirmPassword: "" });
  console.log(newPass);

  const handleUpdateInformation = async () => {
    try {
      const response = await props.updateDataUser(getUser);
      props.getDataUser(props.user.dataUser.id);
      toast.success(`${response.value.data.msg}`);
    } catch (error) {
      toast.error(`${error.response.data.msg}`);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      const response = await props.updatePassword(newPass);
      toast.success(`${response.value.data.msg}`);
      handleReset();
    } catch (error) {
      error.response.data.msg && toast.error(`${error.response.data.msg}`);
    }
  };

  const changeText = (event) => {
    setGetUser({
      ...getUser,
      [event.target.name]: event.target.value
    });
    setNewPass({
      ...newPass,
      [event.target.name]: event.target.value
    });
  };

  const handleReset = () => {
    setNewPass({ newPassword: "", confirmPassword: "" });
  };

  return (
    <>
      <div className="user__data--account">
        <h6>Details Information</h6>
        <hr />
        <ToastContainer />
        <Form className="user__data--form">
          <Row className="mb-3">
            <Form.Group as={Col} className="me-4">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="inputForm"
                type="text"
                placeholder="Enter first name"
                name="firstName"
                defaultValue={getUser.firstName}
                onChange={changeText}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                defaultValue={getUser.lastName}
                onChange={changeText}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} className="me-4">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
                defaultValue={getUser.email}
                disabled
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text style={{ backgroundColor: "white" }}>+62</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  defaultValue={getUser.phoneNumber}
                  onChange={changeText}
                />
              </InputGroup>{" "}
            </Form.Group>
          </Row>
          <Button className="user__data--button update--info" onClick={handleUpdateInformation}>
            Update Changes
          </Button>
        </Form>
        <h6 style={{ paddingTop: "90px" }}>Account and Privacy</h6>
        <hr />
        <Form className="user__data--form">
          <Row className="mb-3">
            <Form.Group as={Col} className="me-4">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Write your password"
                name="newPassword"
                onChange={changeText}
                value={newPass.newPassword}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                onChange={changeText}
                value={newPass.confirmPassword}
              />
            </Form.Group>
          </Row>
          <Button className="user__data--button" onClick={handleUpdatePassword}>
            Update Changes
          </Button>
        </Form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = {
  getDataUser,
  updateDataUser,
  updatePassword
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavAdmin from "../../../components/NavbarAdmin";
import FormManageSchedule from "../../../components/Forms/ManageSchedule";
import ListScheduleAdmin from "../../../components/ListScheduleAdmin";
import Footer from "../../../components/Footer";
import "./index.css";

const ManageMovie = () => {
  useEffect(() => {
    document.title = "Manage Schedule";
  }, []);
  return (
    <>
      <NavAdmin />
      <Container fluid className="schedule__admin--page">
        <FormManageSchedule />
        <ListScheduleAdmin />
      </Container>
      <Footer />
    </>
  );
};

export default ManageMovie;

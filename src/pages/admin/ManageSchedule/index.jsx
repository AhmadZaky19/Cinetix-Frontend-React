import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavAdmin from "../../../components/NavbarAdmin";
import FormManageSchedule from "../../../components/Forms/ManageSchedule";
import ListScheduleAdmin from "../../../components/ListScheduleAdmin";
import Footer from "../../../components/Footer";
import "./index.css";

const ManageSchedule = () => {
  // const [schedule, setSchedule] = useState({});
  // const [dataAllSchedule, setAllSchedule] = useState([]);

  // const getAllSchedule = (data) => {
  //   setAllSchedule(data);
  // };

  // const getSelectedSchedule = (data) => {
  //   setSchedule(data);
  // };

  useEffect(() => {
    document.title = "Manage Schedule";
  }, []);

  return (
    <>
      <NavAdmin />
      <Container fluid className="schedule__admin--page">
        <FormManageSchedule
        // allSchedule={getAllSchedule} schedule={schedule}
        />
        <ListScheduleAdmin
        // dataAllSchedule={dataAllSchedule}
        // selectedSchedule={getSelectedSchedule}
        />
      </Container>
      <Footer />
    </>
  );
};

export default ManageSchedule;

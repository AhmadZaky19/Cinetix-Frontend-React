import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Chart } from "react-google-charts";
import NavbarAdmin from "../../../components/NavbarAdmin";
import Footer from "../../../components/Footer";
import "./index.css";

const Dashboard = () => {
  return (
    <>
      <NavbarAdmin />
      <Container fluid className="dashboard__page">
        <Row className="dashboard">
          <Col md={9}>
            <h2 className="dashboard__section">Dashboard</h2>
            <div style={{ display: "flex", maxWidth: 900 }}>
              <Chart
                width={900}
                height={340}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  [
                    { type: "number", label: "x" },
                    { type: "number", label: "values" },
                    { id: "i0", type: "number", role: "interval" },
                    { id: "i1", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" },
                    { id: "i2", type: "number", role: "interval" }
                  ],
                  [1, 100, 90, 110, 85, 96, 104, 120],
                  [2, 120, 95, 130, 90, 113, 124, 140],
                  [3, 130, 105, 140, 100, 117, 133, 139],
                  [4, 90, 85, 95, 85, 88, 92, 95],
                  [5, 70, 74, 63, 67, 69, 70, 72],
                  [6, 30, 39, 22, 21, 28, 34, 40],
                  [7, 80, 77, 83, 70, 77, 85, 90],
                  [8, 100, 90, 110, 85, 95, 102, 110]
                ]}
                options={{
                  intervals: { style: "sticks" },
                  legend: "none"
                }}
              />
            </div>
          </Col>
          <Col md={3}>
            <h2 className="dashboard__section">Filtered</h2>
            <div className="filter__dashboard">
              <select
                className="form-select filter__dashboard--item"
                aria-label="Default select example"
              >
                <option selected>Select Movie</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select filter__dashboard--item"
                aria-label="Default select example"
              >
                <option selected>Select Premiere</option>
                <option value="ebu.id">Ebv.id</option>
                <option value="cineone21">CineOne21</option>
                <option value="hiflix">Hiflix</option>
              </select>
              <select
                className="form-select filter__dashboard--item"
                aria-label="Default select example"
              >
                <option selected>Select Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <Button className="dashboard__filter">Filter</Button>
              <Button className="dashboard__reset">Reset</Button>
            </div>
          </Col>
        </Row>
      </Container>
      ;
      <Footer />
    </>
  );
};

export default Dashboard;

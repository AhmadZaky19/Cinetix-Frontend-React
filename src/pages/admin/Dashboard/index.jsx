import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Title
} from "chart.js";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDashboard } from "../../../stores/actions/dashboard";
import { getDataMovie } from "../../../stores/actions/movie";
import NavbarAdmin from "../../../components/NavbarAdmin";
import Footer from "../../../components/Footer";
import "./index.css";

const Dashboard = () => {
  const history = useHistory();
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const [queryMovie, setQueryMovie] = useState({
    month: "",
    search: "",
    sort: "name",
    order: "ASC",
    page: 1,
    limit: 1000
  });
  const [payloadData, setPayloadData] = useState({
    movieId: "",
    location: "",
    premiere: ""
  });
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)"
      }
    ]
  });
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const changeText = (event) => {
    setPayloadData({
      ...payloadData,
      [event.target.name]: event.target.value
    });
  };

  const handleReset = () => {
    setPayloadData({
      movieId: "",
      location: "",
      premiere: ""
    });
    console.log(payloadData);
    Dashboard(payloadData);
  };

  const handleFilter = () => {
    Dashboard(payloadData);
  };

  const Dashboard = (params) => {
    console.log(params);
    history.push(
      `/dashboard?movieId=${params.movieId}&location=${params.location}&premiere=${params.premiere}`
    );
    dispatch(getDashboard(params))
      .then((res) => {
        let newData = {
          ...data,
          labels: [],
          datasets: [
            {
              ...data.datasets[0],
              data: []
            }
          ]
        };
        res.value.data.data.map((item) => {
          newData.labels.push(item.month);
          newData.datasets[0].data.push(item.total);
        });
        setData(newData);
        // console.log(res);
        // console.log(newData);
      })
      .catch((err) => {
        // console.log(err.response);
      });
  };

  useEffect(() => {
    const { month, search, sort, order, page, limit } = queryMovie;
    dispatch(getDataMovie(month, search, sort, order, page, limit));
    Dashboard(payloadData);
    document.title = "Dashboard";
  }, []);

  return (
    <>
      <NavbarAdmin />
      <Container fluid className="dashboard__page">
        <Row className="dashboard">
          <Col md={9}>
            <h2 className="dashboard__section">Dashboard</h2>
            <div className="dashboard__graphic--comp">
              <Line data={data} options={options} />
            </div>
          </Col>
          <Col md={3}>
            <h2 className="dashboard__section">Filtered</h2>
            <div className="filter__dashboard">
              <select
                className="form-select filter__dashboard--item"
                aria-label="Default select example"
                defaultValue=""
                name="movieId"
                onChange={changeText}
              >
                <option value="">Select Movie</option>
                {movie.data.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <select
                className="form-select filter__dashboard--item"
                aria-label="Default select example"
                defaultValue=""
                name="premiere"
                onChange={changeText}
              >
                <option value="">Select Premiere</option>
                <option value="ebu.id">Ebv.id</option>
                <option value="cineone21">CineOne21</option>
                <option value="hiflix">Hiflix</option>
              </select>
              <select
                className="form-select filter__dashboard--item"
                aria-label="Default select example"
                defaultValue=""
                name="location"
                onChange={changeText}
              >
                <option value="">Select Location</option>
                <option value="Jakarta Utara">Jakarta Utara</option>
                <option value="Jakarta Timur">Jakarta Timur</option>
                <option value="Jakarta Selatan">Jakarta Selatan</option>
                <option value="Bandung">Bandung</option>
                <option value="Semarang">Semarang</option>
              </select>
              <Button className="dashboard__filter" onClick={handleFilter}>
                Filter
              </Button>
              <Button className="dashboard__reset" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;

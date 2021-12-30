import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import NavAdmin from "../../../components/NavbarAdmin";
import FormManageMovie from "../../../components/Forms/ManageMovie";
import ListMovieAdmin from "../../../components/ListMovieAdmin";
import Footer from "../../../components/Footer";
import "./index.css";

const ManageMovie = () => {
  useEffect(() => {
    document.title = "Manage Movie";
  }, []);
  return (
    <>
      <NavAdmin />
      <Container fluid className="movie__admin--page">
        <FormManageMovie />
        <ListMovieAdmin />
      </Container>
      <Footer />
    </>
  );
};

export default ManageMovie;

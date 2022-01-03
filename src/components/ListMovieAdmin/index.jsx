import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Pagination from "react-paginate";
import { getDataMovie, updateMovie, deleteMovie, setDataUpdate } from "../../stores/actions/movie";
import "./index.css";

const ListMovieAdmin = (props) => {
  const history = useHistory();

  const [movieData, setMovieData] = useState(props.movie.data);
  const [page, setPage] = useState(1);
  const [paginate, setPaginate] = useState({ limit: 4, totalPage: 1 });
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");

  const getAllMovie = () => {
    props
      .getDataMovie("", "", "name", order, page, paginate.limit)
      .then((res) => {
        setMovieData(res.value.data.data);
        setPaginate({ ...paginate, totalPage: res.value.data.pagination.totalPage });
      })
      .catch((error) => new Error(error));
  };

  const handleDeleteMovie = (id) => {
    const userClick = confirm("Confirm delete movie?");
    if (userClick) {
      props.deleteMovie(id).then(() => {
        props.getDataMovie("", "", "name", "", page, paginate.limit).then((response) => {
          setMovieData(response.value.data.data);
          toast.success("Delete movie success");
        });
      });
    } else {
      toast.error("Delete movie unsuccessful");
      return false;
    }
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    if (event.key === "Enter") {
      props
        .getDataMovie("", search, "", "", "", "")
        .then((response) => {
          const newData = response.value.data.data;
          props.movie.data = newData;
          history.push(`/manage-movie?search=${searchValue}`);
        })
        .catch((error) => new Error(error.message));
    }
    setSearch(searchValue);
  };

  const handleSort = (event) => {
    const sortValue = event.target.value;
    setOrder(sortValue);
    history.push(`/manage-movie?sort=${event.target.value}`);
  };

  const handlePagination = (event) => {
    const selectedPage = event.selected + 1;
    setPage(selectedPage, () => {
      getAllMovie();
    });
  };

  useEffect(() => {
    getAllMovie();
  }, [order, page, paginate.limit]);

  console.log(props.movie.data);

  return (
    <>
      <Row className="movie__admin">
        <ToastContainer />
        <div className="movie__admin--h2">
          <h2>Data Movie</h2>
          <div className="movie__admin--sort">
            <select
              className="form-select form-select-sm movie__admin__sort--sort"
              aria-label=".form-select-sm example"
              onChange={handleSort}
            >
              <option hidden>Sort</option>
              <option value="ASC">A - Z</option>
              <option value="DESC">Z - A</option>
            </select>
            <input
              className="form-control form-control-sm movie__admin__sort--search"
              type="text"
              placeholder="Search Movie Name ..."
              name="search"
              onKeyPress={handleSearch}
            />
          </div>
        </div>
        <Card className="movie__admin-section">
          <Row className="movie__list--admin">
            {props.movie.data.length > 0 ? (
              props.movie.data.map((item) => {
                const setDate = item.releaseDate;
                const setNewDate = new Date(setDate).toISOString().split("T")[0];
                const setNewDataMovie = { ...item, releaseDate: setNewDate };
                delete setNewDataMovie.createdAt;
                return (
                  <Card className="cardMovie__admin" key={setNewDataMovie.id}>
                    <Card.Img
                      variant="top"
                      className="cardMovie__admin--img"
                      src={
                        item.image
                          ? `${process.env.REACT_APP_URL_BACKEND}uploads/movie/${item.image}`
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                    />
                    <Card.Body className="cardMovie__admin--desc">
                      <Card.Title className="cardMovie__admin--title">
                        {setNewDataMovie.name}
                      </Card.Title>
                      <Card.Text className="cardMovie__admin--genre">
                        {setNewDataMovie.category}
                      </Card.Text>
                      <Button
                        variant="primary"
                        className="cardMovie__admin--update"
                        onClick={() => props.setDataUpdate(setNewDataMovie, setNewDataMovie.id)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="primary"
                        className="cardMovie__admin--delete"
                        onClick={() => handleDeleteMovie(setNewDataMovie.id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })
            ) : (
              <h1 className="text-center mb-5 pb-4">No movie right now</h1>
            )}
          </Row>
          <Row>
            <div className="mb-4 d-flex justify-content-center">
              {" "}
              <Pagination
                previousLabel={null}
                nextLabel={null}
                breakLabel={"..."}
                pageCount={paginate.totalPage}
                onPageChange={handlePagination}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                disabledClassName={"disabled"}
                activeClassName={"active"}
              />
            </div>
          </Row>
        </Card>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie
});

const mapDispatchToProps = {
  getDataMovie,
  updateMovie,
  deleteMovie,
  setDataUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovieAdmin);

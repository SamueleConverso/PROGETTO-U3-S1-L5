/* eslint-disable react/prop-types */
import { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";

class MyGallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
    errorMessage: "",
  };

  getMovies = async () => {
    try {
      let response = await fetch(this.props.query);
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
        this.setState({ movies: data.Search });
        this.setState({ isLoading: false });
        //console.log(this.state.movies);
      } else {
        throw new Error("ERRORE");
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        isError: true,
      });
      console.log(error);
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Spinner animation="grow" variant="light" />}
        <div className="container-fluid mb-3">
          <h4>{this.props.galleryName}</h4>
        </div>
        {this.state.isError && (
          <Alert variant="danger" className="w-50 text-danger">
            ❌ An error has occurred.
          </Alert>
        )}
        <div className="container-fluid mb-5">
          <div
            id={this.props.carousel}
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row g-1">
                  {this.state.movies.length > 6
                    ? this.state.movies.slice(0, 6).map((movie) => {
                        return (
                          <img
                            key={movie.imdbID}
                            src={movie.Poster}
                            className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                            alt="..."
                          />
                        );
                      })
                    : this.state.movies.map((movie) => {
                        return (
                          <img
                            key={movie.imdbID}
                            src={movie.Poster}
                            className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                            alt="..."
                          />
                        );
                      })}

                  {/* <img
                    src="assets/img/media1.jpg"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media2.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media3.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media4.jpg"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media5.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  /> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row g-1">
                  {this.state.movies.length > 6
                    ? this.state.movies.slice(0, 6).map((movie) => {
                        return (
                          <img
                            key={movie.imdbID}
                            src={movie.Poster}
                            className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                            alt="..."
                          />
                        );
                      })
                    : this.state.movies}
                  {/* <img
                    src="assets/img/media0.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media1.jpg"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media2.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media3.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media4.jpg"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  />
                  <img
                    src="assets/img/media5.webp"
                    className="col-12 col-md-2 h-auto mb-1 mb-md-0"
                    alt="..."
                  /> */}
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={"#" + this.props.carousel}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={"#" + this.props.carousel}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default MyGallery;

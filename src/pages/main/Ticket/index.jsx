import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Tickitz from "../../../assets/img/tickitz white.png";
import { Download, Printer } from "react-bootstrap-icons";
import moment from "moment";
import QRCode from "../../../assets/img/QRCode.png";
import "./index.css";

const TicketResult = (props) => {
  const data = props.history.location.state;

  useEffect(() => {
    document.title = "Ticket";
  }, []);

  return (
    <>
      <Navbar />
      <main className="ticket__result-main">
        <section className="ticket__result-container">
          <section className="ticket__result-card">
            <h5 className="ticket__result-title">Proof of Payment</h5>
            <div className="ticket__result-header">
              <div className="ticket__result-header-column">
                <img src={Tickitz} className="ticket__result-image img-fluid" alt="Tickitz" />
                <h6>Admit One</h6>
                <img src={Tickitz} className="ticket__result-image img-fluid" alt="Tickitz" />
              </div>
            </div>
            <img
              src={QRCode}
              alt="Barcode"
              className="ticket__result-image-barcode img-fluid d-block d-md-none"
            />
            <div className="ticket__result-body">
              <div className="ticket__result-body-space mb-4">
                <h6>Movie</h6>
                <span>{data.movie.name}</span>
              </div>
              <div className="row ticket__result-body-desc">
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Date</h6>
                  <span>{moment(data.date).format("ddd, MMMM Do YYYY")}</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Time</h6>
                  <span>{data.timeBooking}</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Category</h6>
                  <span>-</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Count </h6>
                  <span>{data.seat.length} Pieces</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Seats</h6>
                  <span>{data.seat.join(", ")}</span>
                </div>
                <div className="col-md-3 me-2 ticket__result-body-space mb-3">
                  <h6>Price</h6>
                  <span>${data.totalPayment}.00</span>
                </div>
              </div>
              <div className="ticket__result-body-total d-flex d-md-none">
                <span>Total</span>
                <span className="fw-bold">${data.totalPayment}.00</span>
              </div>
            </div>
            <div className="ticket__result-choose">
              <button className="ticket__result-button">
                <div className="d-flex align-items-center">
                  <Download />
                  Download
                </div>
              </button>
              <button className="ticket__result-button">
                <div className="d-flex align-items-center">
                  <Printer />
                  Print
                </div>
              </button>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TicketResult;

import React, { useState } from "react";
import { MDBTypography, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

export default function Contact() {
  return (
    <section id="contact" className="py-5 mt-5">
      <h2 className="mb-5 text-center section-heading">Kontakt</h2>
      <MDBContainer className="d-flex justify-content-center pt-3">
        <MDBTypography listUnStyled>
          <li className="fs-5 pb-4">
            <MDBIcon fas icon="phone-alt" className="me-2" />{" "}
            <a className="text-dark" href="tel:+48603512179">
              603-512-179
            </a>
          </li>
          <li className="fs-5 pb-4">
            <MDBIcon far icon="envelope" className="me-2" />{" "}
            <a className="text-dark" href="mailto:jraczynska11@gmail.com">
              jraczynska11@gmail.com
            </a>
          </li>
          <li className="fs-5 pb-4">
            <MDBIcon fas icon="map-marked-alt" className="me-2" />
            Ul. Gliwicka 32d/5, <br></br>47-246 Kotlarnia (woj. opolskie)
          </li>
        </MDBTypography>
      </MDBContainer>
    </section>
  );
}

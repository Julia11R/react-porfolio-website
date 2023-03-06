import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-2">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-2"
            href="https://www.linkedin.com/in/julia-raczy%C5%84ska-1bb187248/"
            target="_blank"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-2"
            target="_blank"
            href="https://github.com/Julia11R"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:{" "}
        <a className="text-white" href="https:/juliar.pl">
          JuliaR.pl
        </a>
      </div>
    </MDBFooter>
  );
}

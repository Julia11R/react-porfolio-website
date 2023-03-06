import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";

import heroBg from "../images/hero-bg.jpg";
import cvFile from "../images/Julia_Raczynska_CV.pdf";

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="light" className="py-1 fixed-top">
        <MDBContainer>
          <MDBNavbarBrand className=" special-font fs-2" href="#">
            Julia Raczyńska
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav
              right
              fullWidth={false}
              className="mr-auto mb-2 mb-lg-0 text-uppercase"
            >
              <MDBNavbarItem className="pe-4">
                <MDBNavbarLink
                  href="#about"
                  onClick={() => setShowBasic(false)}
                >
                  O mnie
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="pe-4">
                <MDBNavbarLink
                  href="#portfolio"
                  onClick={() => setShowBasic(false)}
                >
                  Portfolio
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className="pe-4">
                <MDBNavbarLink href="#cv" onClick={() => setShowBasic(false)}>
                  CV
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#contact"
                  onClick={() => setShowBasic(false)}
                >
                  Kontakt
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${heroBg})`,
          height: "100vh",
        }}
      >
        {" "}
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <div className="text-dark px-3 px-md-5">
              <h1 className="display-2 pb-3 mb-3">
                Junior Front-end Developer, <br></br>Junior Webmaster
              </h1>
              <h4 className="lead mb-4 lh-base">
                "Tworzę proste strony w technologiach <strong>HTML</strong>,{" "}
                <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
                <strong>React</strong> oraz w oparciu o CMS{" "}
                <strong>WordPress</strong>."
              </h4>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                color="dark"
                size="lg"
                rel="nofollow"
                href="#portfolio"
              >
                Zobacz portfolio
              </MDBBtn>
              <MDBBtn
                className="m-2"
                tag="a"
                outline
                color="dark"
                size="lg"
                target="_blank"
                download
                href={cvFile}
              >
                Pobierz CV
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

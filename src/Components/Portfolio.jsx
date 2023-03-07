import React, { useState } from "react";
import {
  MDBBtn,
  MDBTypography,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import reditumImg1 from "../images/strona-reditum.png";
import reditumImg2 from "../images/strona-reditum-wydajnosc.png";
import geodezjaImg1 from "../images/strona-geodezja.png";
import geodezjaImg2 from "../images/strona-geodezja-wydajnosc.png";
import uslugiGraficzneImg1 from "../images/strona-uslugi-graficzne.png";
import uslugiGraficzneImg2 from "../images/uslugi-graficzne-wydajnosc.png";
import portfolioImg1 from "../images/strona-portfolio.png";
import portfolioImg2 from "../images/strona-portfolio-wydajnosc.png";

function Portfolio() {
  const [scrollableOneModal, setScrollableOneModal] = useState(false);
  const [scrollableTwoModal, setScrollableTwoModal] = useState(false);
  const [scrollableThreeModal, setScrollableThreeModal] = useState(false);
  const [scrollableFourModal, setScrollableFourModal] = useState(false);
  return (
    <section id="portfolio" className="pt-5">
      <h2 className="mb-4 text-center section-heading">Portfolio</h2>
      <MDBRow className="mb-3 text-dark py-5 justify-content-center g-4">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardImage src={geodezjaImg1} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>
                Strona internetowa geodezja-rakowiecki.pl
              </MDBCardTitle>
              <MDBCardText>
                Prosta, lekka strona internetowa typu one-page zbudowawana przy
                użyciu HTML, CSS i czystego JavaScriptu.
              </MDBCardText>
              <MDBBtn
                tag="a"
                role="button"
                onClick={() => setScrollableOneModal(!scrollableOneModal)}
                className="m-1 d-block d-sm-inline-block"
                color="dark"
                outline
              >
                Więcej szczegółów
              </MDBBtn>
              <MDBBtn
                className="m-1 text-light d-block d-sm-inline-block"
                color="dark"
                tag="a"
                role="button"
                target="_blank"
                href="https://geodezja-rakowiecki.pl"
              >
                Zobacz na żywo
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBModal
            show={scrollableOneModal}
            setShow={setScrollableOneModal}
            tabIndex="-1"
          >
            <MDBModalDialog scrollable size="xl">
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>
                    Strona internetowa geodezja-rakowiecki.pl
                  </MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={() => setScrollableOneModal(!scrollableOneModal)}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <img
                          src={geodezjaImg1}
                          className="w-100 img-fluid "
                          alt=""
                        />
                        <img
                          src={geodezjaImg2}
                          className="w-100 img-fluid "
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Opis projektu:</h5>
                        <p>
                          Zadaniem było zaprojektowanie i zakodowanie lekkiej
                          responsywnej strony internetowej bez cms-a oraz
                          opracowanie wszystkich treści.
                        </p>
                        <p>
                          Ważną kwestią była także optymalizacja SEO, ponieważ
                          wcześniej domena została wyindeksowana z Google.
                        </p>
                        <p>
                          W efekcie powstała wydajna strona poprawnie
                          zaindeksowana w wyszukiwarce Google i sprawnie
                          działająca na urządzeniach mobilnych.
                        </p>
                        <p>
                          Projekt został stworzony bez użycia żadnych
                          dodatkowych bilbiotek.
                        </p>
                        <h5>Użyte Technologie:</h5>
                        <MDBTypography listUnStyled className="mb-3 ">
                          <li>
                            {" "}
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>HTML</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>CSS/Sass</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>JavaScript</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>PHP - do obsługi formularza</span>
                          </li>
                        </MDBTypography>
                        <h5>Link do repozytorium projketu na GitHubie:</h5>
                        <a
                          href="https://github.com/Julia11R/simple-html-css-js-website"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/Julia11R/simple-html-css-js-website
                        </a>
                      </div>
                    </div>
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    className="m-1"
                    color="dark"
                    outline
                    onClick={() =>
                      setScrollableOneModal(!setScrollableOneModal)
                    }
                  >
                    Zamknij
                  </MDBBtn>
                  <MDBBtn
                    className="m-1 text-light"
                    color="dark"
                    tag="a"
                    target="_blank"
                    href="https://geodezja-rakowiecki.pl"
                  >
                    Zobacz na żywo
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard>
            <MDBCardImage src={reditumImg1} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>Strona internetowa reditum.pl</MDBCardTitle>
              <MDBCardText>
                Responsywna strona internetowa gabinetu fizjoterapii utworzona
                na WordPressie z użyciem motywu Astra.
              </MDBCardText>
              <MDBBtn
                onClick={() => setScrollableTwoModal(!scrollableTwoModal)}
                className="m-1 d-block d-sm-inline-block"
                color="dark"
                outline
                tag="a"
                role="button"
              >
                Więcej szczegółów
              </MDBBtn>

              <MDBBtn
                className="m-1 text-light d-block d-sm-inline-block"
                color="dark"
                tag="a"
                role="button"
                target="_blank"
                href="https://reditum.pl"
              >
                Zobacz na żywo
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBModal
            show={scrollableTwoModal}
            setShow={setScrollableTwoModal}
            tabIndex="-1"
          >
            <MDBModalDialog scrollable size="xl">
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Strona internetowa reditum.pl</MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={() => setScrollableTwoModal(!scrollableTwoModal)}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <img
                          src={reditumImg1}
                          className="w-100 img-fluid "
                          alt=""
                        />
                        <img
                          src={reditumImg2}
                          className="w-100 img-fluid "
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Opis projektu:</h5>
                        <p>
                          Zadaniem było zaprojektowanie i wykonanie responsywnej
                          strony internetowej z łatwym w obsłudze cms-em, który
                          umożliwia sukcesywne dodawanie wpisów i artykułów do
                          modułu bloga.
                        </p>
                        <p>
                          Istotna była także optymalizacja SEO (strona
                          wcześnbiej została wyindeksowana z Google).
                        </p>
                        <p>
                          W rezultacie powstała szybka i wydajna strona
                          internetowa zoptymalizowana pod kątem wyszukiwarki
                          Google.{" "}
                        </p>
                        <h5>Użyte Technologie:</h5>
                        <MDBTypography listUnStyled className="mb-3 ">
                          <li>
                            {" "}
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>WordPreess z darmowym motywem Astra</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>CSS</span>
                          </li>
                        </MDBTypography>
                      </div>
                    </div>
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    className="m-1"
                    color="dark"
                    outline
                    onClick={() =>
                      setScrollableTwoModal(!setScrollableTwoModal)
                    }
                  >
                    Zamknij
                  </MDBBtn>
                  <MDBBtn
                    className="m-1 text-light"
                    color="dark"
                    tag="a"
                    target="_blank"
                    href="https://reditum.pl"
                  >
                    Zobacz na żywo
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard>
            <MDBCardImage src={portfolioImg1} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>
                Strona internetowa - portfolio - juliar.pl
              </MDBCardTitle>
              <MDBCardText>
                Responsywna strona internetowa typu portfolio utworzona przy
                użyciu React.js oraz MDBootstrap.
              </MDBCardText>

              <MDBBtn
                onClick={() => setScrollableThreeModal(!scrollableThreeModal)}
                className="m-1 d-block d-sm-inline-block"
                color="dark"
                outline
                tag="a"
                role="button"
              >
                Więcej szczegółów
              </MDBBtn>
              <MDBBtn
                className="m-1 text-light d-block d-sm-inline-block"
                color="dark"
                tag="a"
                role="button"
                target="_blank"
                href="https://juliar.pl"
              >
                Zobacz na żywo
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBModal
            show={scrollableThreeModal}
            setShow={setScrollableThreeModal}
            tabIndex="-1"
          >
            <MDBModalDialog scrollable size="xl">
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>
                    Strona internetowa - portfolio - juliar.pl
                  </MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={() =>
                      setScrollableThreeModal(!scrollableThreeModal)
                    }
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <img
                          src={portfolioImg1}
                          className="w-100 img-fluid "
                          alt=""
                        />
                        <img
                          src={portfolioImg2}
                          className="w-100 img-fluid "
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Opis projektu:</h5>
                        <p>
                          Zadaniem było zaprojektowanie i zakodowanie
                          responsywnej strony internetowej typu portfolio.
                        </p>
                        <p>Projekt jest cały czas rozwijany.</p>
                        <h5>Użyte Technologie:</h5>
                        <MDBTypography listUnStyled className="mb-3 ">
                          <li>
                            {" "}
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>HTML</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>CSS</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>React.js</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>Boodstrap/MDBootstrap</span>
                          </li>
                        </MDBTypography>
                        <h5>Link do repozytorium projketu na GitHubie:</h5>
                        <a
                          href="https://github.com/Julia11R/react-porfolio-website"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/Julia11R/react-porfolio-website
                        </a>
                      </div>
                    </div>
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    className="m-1"
                    color="dark"
                    outline
                    onClick={() =>
                      setScrollableThreeModal(!scrollableThreeModal)
                    }
                  >
                    Zamknij
                  </MDBBtn>
                  <MDBBtn
                    className="m-1 text-light"
                    color="dark"
                    tag="a"
                    target="_blank"
                    href="https://juliar.pl"
                  >
                    Zobacz na żywo
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardImage src={uslugiGraficzneImg1} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>
                Szablon strony internetowej - usługi graficzne
              </MDBCardTitle>
              <MDBCardText>
                Przykładowa responsywna strona internetowa stworzona z użyciem
                HTML, CSS, Javascript i Bootsrapa.
              </MDBCardText>

              <MDBBtn
                onClick={() => setScrollableFourModal(!scrollableFourModal)}
                className="m-1 d-block d-sm-inline-block"
                color="dark"
                outline
                tag="a"
                role="button"
              >
                Więcej szczegółów
              </MDBBtn>
              <MDBBtn
                className="m-1 text-light d-block d-sm-inline-block"
                color="dark"
                tag="a"
                role="button"
                target="_blank"
                href="https://uslugi-graficzne.juliar.pl"
              >
                Zobacz na żywo
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBModal
            show={scrollableFourModal}
            setShow={setScrollableFourModal}
            tabIndex="-1"
          >
            <MDBModalDialog scrollable size="xl">
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>
                    Strona internetowa - portfolio - juliar.pl
                  </MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={() => setScrollableFourModal(!scrollableFourModal)}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <img
                          src={uslugiGraficzneImg1}
                          className="w-100 img-fluid "
                          alt=""
                        />
                        <img
                          src={uslugiGraficzneImg2}
                          className="w-100 img-fluid "
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6">
                        <h5>Opis projektu:</h5>
                        <p>
                          Zadaniem było zaprojektowanie i zakodowanie
                          responsywnej strony internetowej z sekcją portfolio.
                        </p>
                        <p></p>
                        <h5>Użyte Technologie:</h5>
                        <MDBTypography listUnStyled className="mb-3 ">
                          <li>
                            {" "}
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>HTML</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>CSS</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>JavaScript</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>Boodstrap</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>Slick-carousel</span>
                          </li>
                          <li>
                            <MDBIcon
                              icon="check-circle"
                              className="me-2 text-dark"
                            />
                            <span>Saas</span>
                          </li>
                        </MDBTypography>
                        <h5>Link do repozytorium projketu na GitHubie:</h5>
                        <a
                          href="https://github.com/Julia11R/one-page-website-html-css-js"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://github.com/Julia11R/one-page-website-html-css-js
                        </a>
                      </div>
                    </div>
                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn
                    className="m-1"
                    color="dark"
                    outline
                    onClick={() => setScrollableFourModal(!scrollableFourModal)}
                  >
                    Zamknij
                  </MDBBtn>
                  <MDBBtn
                    className="m-1 text-light"
                    color="dark"
                    tag="a"
                    target="_blank"
                    href="https://uslugi-graficzne.juliar.pl"
                  >
                    Zobacz na żywo
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
export default Portfolio;

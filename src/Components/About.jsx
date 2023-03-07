import React from "react";
import { MDBRow, MDBCol, MDBRipple, MDBIcon } from "mdb-react-ui-kit";

import img_about from "../images/zdjecie-na-rowerze-monitor.png";
export default function About() {
  return (
    <section id="about" className="pt-5">
      <h2 className="mb-4 text-center section-heading">O mnie</h2>
      <MDBRow className="mt-5 mb-3 align-items-center">
        <MDBCol lg="6" className="px-4 text-center">
          <MDBRipple
            className="bg-image hover-overlay "
            rippleTag="div"
            rippleColor="light"
          >
            <img
              src={img_about}
              className="w-100 img-fluid "
              alt="Zdjęcie Julii Raczyńskiej"
            />

            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </MDBRipple>
          <p className="text-center text-uppercase mt-3 mb-4">
            Dopiero się rozkręcam
          </p>
        </MDBCol>
        <MDBCol lg="6" className="px-4">
          <h5 className="fw-bold">Umiejętności</h5>
          <p className="my-3">
            Tworzę strony internetowe w oparciu o{" "}
            <strong className="special-color">WordPressa</strong>, a także przy
            użyciu <strong>HTML-a</strong>, <strong>CSS-a </strong> (w tym Sass)
            i <strong>JavaScritpu</strong>. Znam podstawy <strong>SEO</strong>,{" "}
            <strong>Google Analytics</strong>, jak również frameworka{" "}
            <strong>React</strong> i biblioteki <strong>Bootstrap</strong>.
          </p>
          <p>
            Stale poszerzam wiedzę z zakresu <strong>UX i UI Designu</strong> -
            bardzo mnie te zagadnienia interesują i korzystam z tej wiedzy na
            codzień.{" "}
          </p>
          <p>
            W niedalekiej przyszłości planuję nauczyć się PHP, node.js i baz
            danych oraz pogłębić tematy związane z innymi technologiami
            backendowymi.
          </p>
          <h5 className="fw-bold">Wartości</h5>
          <p>
            <strong>Odpowiedzialność</strong>, <strong>autentyczność</strong> i{" "}
            <strong>uczciwość</strong> - zwłaszcza w stonsunku do samego siebie
            - to wartości bardzo mi bliskie. W zgodzie z nimi staram się żyć i
            pracować. Znajomi, współpracownicy, klienci i szefowie mówią, że{" "}
            <strong>"można na mnie liczyć"</strong>.
          </p>
          <p>
            Ważne są dla mnie także <strong>dystans</strong>,{" "}
            <strong>poczucie humoru</strong> i <strong>elastyczność</strong>,
            które pomagają mi w przyjmowaniu różnych perspektyw i znajdowaniu
            nowych rozwiązań.
          </p>
        </MDBCol>
      </MDBRow>
      <h4 className="text-center py-4 mt-4">
        Technologie, których używam w projektach
      </h4>
      <div className="d-flex flex-wrap justify-content-evenly pb-5">
        <MDBIcon fab icon="html5" size="4x" className="m-3" />
        <MDBIcon fab icon="css3-alt" size="4x" className="m-3" />
        <MDBIcon fab icon="sass" size="4x" className="m-3" />
        <MDBIcon fab icon="js" size="4x" className="m-3" />
        <MDBIcon fab icon="react" size="4x" className="m-3" />
        <MDBIcon fab icon="wordpress" size="4x" className="m-3" />
        <MDBIcon fab icon="bootstrap" size="4x" className="m-3" />
        <MDBIcon fab icon="git" size="4x" className="m-3" />
      </div>
    </section>
  );
}

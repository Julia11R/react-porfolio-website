import React from "react";
import {
  MDBBtn,
  MDBTypography,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import cvFile from "../images/Julia_Raczynska_CV.pdf";

export default function Cv() {
  return (
    <section id="cv" className="pt-5">
      <h2 className="mb-4 text-center section-heading">CV</h2>
      <MDBRow className="mt-4 mb-lg-5">
        <p className="text-center mt-3 mb-5 special-color fw-bolder">
          Każde moje dotychczasowe doświadczenie zawodowe ma dla mnie ogromną
          wartość, bo pozwoliło mi na rozwijanie moich umiejęności i zdobywanie
          cennych kompetencji. W każdej pracy znaleźli się wspaniali przełożeni,
          klienci i koledzy - za co jestem bardzo wdzięczna.
        </p>
        <MDBCol lg="6" className="px-4">
          <p>
            Od ponad 10 lat jestem związana z branżą internetową, głównie
            reklamą. Przygodę tę zaczęłam w 2009 roku, w firmie Eniro, gdzie
            pracowałam, jako konsultant do spraw sprzedaży w wyszukiwarce{" "}
            <strong>pf.pl</strong>. To właśnie tam{" "}
            <strong>
              nauczyłam się przyjmować perspektywę klienta, który prowadzi
              biznes
            </strong>{" "}
            i przekonałam się, jak ogromną rolę odgrywa w Internet w prowadzeniu
            działalności.
          </p>
          <p>
            Później była praca nad portalem <strong>edusiec.pl</strong>, gdzie
            po raz pierwszy <strong>współpracowałam z programistami</strong> z
            agencji interaktywnej przy{" "}
            <strong>tworzeniu wyszukiwarki szkół</strong>, przedszkoli i innych
            instytucji edukacyjnych.
          </p>
          <p>
            Następnie przyszła kolej na zdobywanie nowych umiejętności z
            marketingu internetowego (między innymi z prowadzenia kampanii
            <strong>Google Ads</strong>, korzystania z narzędzi{" "}
            <strong>Google Analytics</strong>,{" "}
            <strong>Google Search Console</strong>, podstaw{" "}
            <strong>UX i UI</strong>) podczas pracy w agencjach Business Sense i
            Echo - które są partnerami Google. Wtedy też zaczęłam tworzyć
            pierwsze <strong>strony na WordPressie</strong>.
          </p>
        </MDBCol>
        <MDBCol lg="6" className="px-4">
          <p>
            Do rozpoczęcia <strong>nauki kodowania</strong>, skłoniła mnie chęć
            uniezależnienia się do gotowych motywów WordPressa. Mam trochę
            doświadczenia w budowaniu stron na motywach, ale praktycznie za
            każdym razem napotykam na jakieś ograniczenia, które trzeba obejść
            przez dodawanie własnego kodu.{" "}
          </p>
          <p>
            Drugim ważnym czynnikiem, który miał wpływ na podjęcie decyzji o
            wybraniu tego kierunku rozwoju była{" "}
            <strong>przerwa w karierze zawodowej</strong> (spowodowana zmianą
            miejsca zamieszkania i urodzeniem córki), którą postanowiłam
            wykorzystać właśnie na naukę.
          </p>
          <p>
            Zdaję sobie sprawę, że jestem na początku drogi i bardzo dużo pracy
            jeszcze przede mną - ale bardzo lubię się uczyć. Moje ostatnie
            projekty można obejrzeć w sekcji{" "}
            <a href="#portfolio" className="text-dark fv-bolder">
              Portfolio
            </a>
            .
          </p>
          <p>
            Chciałabym podkreślić, że obecnie zależy mi na możliwości
            wykonywania pracy <strong>zdalnie</strong>. Jestem otwarta na różne
            rozwiązania dotyczące zarówno formy, jak i wymiaru zatrudnienia
            (jeśli chodzi o moje preferencje, to idealna byłaby umowa o pracę
            lub zlecenie na 3/4 lub 1/2 etatu).
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol lg="6" className="px-4">
          <h5 className="py-3">Informacje podstawowe</h5>
          <div className="cv-item mb-4">
            <h6>Julia Raczyńska</h6>
            <p className=" mt-2">
              Początkujący Front-end Developer i Webmaster z wieloletnim
              doświadczeniem przy obsłudze klientów w agencjach marketignowych.
            </p>
            <p>
              Tel.:{" "}
              <a className="text-dark" href="tel:+48603512179">
                603-512-179
              </a>{" "}
            </p>
            <p>
              E-mail:{" "}
              <a className="text-dark" href="mailto:jraczynska11@gmail.com">
                jraczynska11@gmail.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                className="text-dark"
                href="https://github.com/Julia11R"
                target="_blank"
              >
                https://github.com/Julia11R
              </a>
            </p>
          </div>
          <h5 className="py-3">Edukacja</h5>
          <div className="cv-item">
            <h6>Magister filologii polskiej</h6>
            <div className="cv-years">
              <span>2000-2005</span>
            </div>
            <p className=" mt-2">
              Uniwersytet Pedagogiczny im. Komisji Edukacji Narodowej w
              Krakowie.
            </p>
          </div>
          <MDBBtn
            className="text-light mb-3 mt-1 mt-lg-5 d-block d-sm-inline-block"
            color="dark"
            tag="a"
            target="_blank"
            download
            size="lg"
            href={cvFile}
          >
            Pobierz CV
          </MDBBtn>
        </MDBCol>
        <MDBCol lg="6" className="px-4">
          <h5 className="py-3">Doświadczenie zawodowe</h5>
          <div className="cv-item pb-5">
            <h6>Account manager, Koordynator projektów</h6>
            <div className="pb-2">
              <span className="cv-years">2014-2017</span>
              <span className="fst-italic ms-2">Agencja ECHO, Łódź</span>
            </div>
            <MDBTypography listUnStyled className="mb-0 ">
              <li>
                <MDBIcon
                  icon="long-arrow-alt-right"
                  className="me-2 text-dark"
                />{" "}
                pozyskiwanie i obsługa klientów w zakresie prowadzenia kampanii
                w wyszukiwarce Google, tworzenia stron www, sklepów
                internetowych, kreacji graficznych ( prowadzenie rozmów
                handlowych, przygotowywanie ofert i umów, nadzorowanie
                rozliczeń,);
              </li>
              <li>
                <MDBIcon
                  icon="long-arrow-alt-right"
                  className="me-2 text-dark"
                />{" "}
                przygotowywanie kampanii reklamowych Google Ads oraz
                monitorowanie ich skuteczności przy wykorzystaniu Google
                Analytics, a także sporządzanie raportów dla klientów;
              </li>
              <li>
                <MDBIcon
                  icon="long-arrow-alt-right"
                  className="me-2 text-dark"
                />{" "}
                projektowanie stron internetowych na podstawie motywów
                WordPress;
              </li>
              <li>
                <MDBIcon
                  icon="long-arrow-alt-right"
                  className="me-2 text-dark"
                />{" "}
                współpraca z grafikami i programistami przy tworzeniu stron www,
                sklepów internetowych i banerów.
              </li>
            </MDBTypography>
          </div>
          <div className="cv-item ">
            <h6>Specjalista ds. sprzedaży</h6>
            <div className="pb-2">
              <span className="cv-years">2012-2014</span>
              <span className="fst-italic ms-2">Business Sense, Łódź</span>
            </div>
            <MDBTypography listUnStyled className="mb-0 ">
              <li>
                <MDBIcon
                  icon="long-arrow-alt-right"
                  className="me-2 text-dark"
                />{" "}
                wywiązywanie się z planów sprzedażowych oraz koordynowanie
                kampanii reklamowych w wyszukiwarce Google
              </li>
              <li>
                <MDBIcon
                  icon="long-arrow-alt-right"
                  className="me-2 text-dark"
                />{" "}
                kontakt z grafikami i programistami przy tworzeniu stron
                internetowych, kreacji graficznych itd.
              </li>
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

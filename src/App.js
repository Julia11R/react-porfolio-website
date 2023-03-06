import React from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Cv from "./Components/Cv";
import Contact from "./Components/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="light bg-light">
        <MDBContainer>
          <About />
          <Portfolio />
          <Cv />
          <Contact />
        </MDBContainer>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

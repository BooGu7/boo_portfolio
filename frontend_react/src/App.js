import React from "react";

// import container
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

// import components
import { Navbar } from "./components";

// import styles
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;

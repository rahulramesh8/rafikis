import React, { Component } from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Routes from "../../routes";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes />
        <Footer />
      </>
    );
  }
}

export default App;

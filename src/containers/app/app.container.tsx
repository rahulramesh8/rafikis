import React, { Component } from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Routes from "../../routes";

import "./app.styles.scss";

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="routes">
          <Routes />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </>
    );
  }
}

export default App;

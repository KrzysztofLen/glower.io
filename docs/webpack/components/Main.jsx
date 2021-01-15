import React, { Component } from "react";
import SideNav from "./SideNav.jsx";
import ButtonsSection from "./ButtonsSection.jsx";
import BadgeSection from "./BadgeSection.jsx";
import Hero from "./Hero.jsx";
import "./../../assets/css/main.css";
import "./../../../css/main.css";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <nav className="nav">
            <h1 className="glower-text-pink header">Glower.io</h1>
          </nav>

          <Hero />

          <main className="content">
            <div className="content__leftSide">
              <ButtonsSection />
              <BadgeSection />
            </div>
            <div className="content__rightSide">
              <SideNav />
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

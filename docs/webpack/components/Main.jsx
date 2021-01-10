import React, { Component } from "react";
import SideNav from "./SideNav.jsx";
import ButtonsSection from "./ButtonsSection.jsx";
import BadgeSection from "./BadgeSection.jsx";
import "./../../assets/css/main.css";
import "./../../../css/main.css";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <nav className="nav">
          <h1 className="glower-text-pink header">Glower</h1>
        </nav>

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
    );
  }
}

export default Main;

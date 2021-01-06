import React, { Component } from "react";
import "./../../assets/css/main.css";
import "./../../../css/main.css";

class Main extends Component {
  render() {
    return (
      <div className="container">
        <nav className="nav">
          <h1 className="glower-text-pink header">Glower</h1>
          <div>
            <h2 className="buttons__header"># Buttons - outlined (default)</h2>
            <p>
              The button is available in all the different colors defined by the
              $colors Sass map.
            </p>
            <div className="buttons">
              <div className="buttons__left">
                <button className="glower-button aqua">Info</button>
                <button className="glower-button green">Success</button>
                <button className="glower-button red">Danger</button>
                <button className="glower-button orange">Warning</button>
              </div>
              <div className="buttons__right">
                <code className="code-snippet" data-lang="html">
                  {`<button className="glower-button aqua">Info</button>
                  <button className="glower-button green">Success</button>
                  <button className="glower-button red">Danger</button>
                  <button className="glower-button orange">Warning</button>`}
                </code>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Main;

import React, { Component } from "react";

class SideNav extends Component {
  render() {
    return (
      <div className="sideNav">
        <ul>
          <li className="sideNav__element">Getting started</li>
          <ul>
            <li className="sideNav__subElement">
              <a className="sideNav__anchor" href="#buttons">
                Installation
              </a>
            </li>
          </ul>
          <li className="sideNav__element">Elements</li>
          <ul>
            <li className="sideNav__subElement">
              <a className="sideNav__anchor" href="#buttons">
                Buttons
              </a>
            </li>
            <li className="sideNav__subElement">
              <a className="sideNav__anchor" href="#badges">
                Badges
              </a>
            </li>
            <li className="sideNav__subElement">
              <a className="sideNav__anchor" href="#notifications">
                Notifications
              </a>
            </li>
            <li className="sideNav__subElement">
              <a className="sideNav__anchor" href="#toggle">
                Toggle button
              </a>
            </li>
          </ul>
          <li className="sideNav__element">Components</li>
          <ul>
            <li className="sideNav__subElement">Coming soon</li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default SideNav;

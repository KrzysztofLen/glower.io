import React, { Component } from "react";

class ToggleSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section">
          <h2 id="toggle" className="section__header">
            Toggle button
          </h2>
          <p className="section__description">
            Toggle buttons makes you possibility to change some behaviour
            depending on true/false flag.
          </p>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <label className="glower-switch aqua">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
            <label className="glower-switch green">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
            <label className="glower-switch red">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
            <label className="glower-switch orange">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;label className="glower-switch aqua"&gt;&lt;input
                type="checkbox" className="glower-switch__check" defaultChecked
                &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
                &lt;label className="glower-switch green"&gt;&lt;input
                type="checkbox" className="glower-switch__check" defaultChecked
                &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
                &lt;label className="glower-switch red"&gt;&lt;input
                type="checkbox" className="glower-switch__check" defaultChecked
                &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
                &lt;label className="glower-switch orange"&gt;&lt;input
                type="checkbox" className="glower-switch__check" defaultChecked
                &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
              </code>
            </pre>
          </div>
        </div>

        <div className="buttons">
          <div className="buttons__left">
            <label className="glower-switch">
              <input type="checkbox" className="glower-switch__check" />
              <span className="glower-switch__slider"></span>
            </label>
            <label className="glower-switch yellow">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
            <label className="glower-switch blue">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
            <label className="glower-switch magenta">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
            <label className="glower-switch pink">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
            <label className="glower-switch purple">
              <input
                type="checkbox"
                className="glower-switch__check"
                defaultChecked
              />
              <span className="glower-switch__slider"></span>
            </label>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;label className="glower-switch"&gt;&lt;input type="checkbox"
                className="glower-switch__check" &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
                &lt;label className="glower-switch yellow"&gt;&lt;input
                type="checkbox" className="glower-switch__check" &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
                &lt;label className="glower-switch blue"&gt;&lt;input
                type="checkbox" className="glower-switch__check" &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
                &lt;label className="glower-switch magenta"&gt;&lt;input
                type="checkbox" className="glower-switch__check" &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
                &lt;label className="glower-switch pink"&gt;&lt;input
                type="checkbox" className="glower-switch__check" &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
                &lt;label className="glower-switch purple"&gt;&lt;input
                type="checkbox" className="glower-switch__check" &gt;&lt;span
                className="glower-switch__slider"&gt;&lt;span&gt;&lt;label&gt;
                <br />
              </code>
            </pre>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ToggleSection;

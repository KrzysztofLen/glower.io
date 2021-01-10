import React, { Component } from "react";

class ButtonsSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section">
          <h2 id="buttons" className="section__header">
            Buttons
          </h2>
          <h4 className="section__subHeader">outlined (default)</h4>
          <p className="section__description">
            The button is an primary element of any design.
            <br />
            The button is available in all the glowers colors.
          </p>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <button className="glower-button aqua">Info</button>
            <button className="glower-button green">Success</button>
            <button className="glower-button red">Danger</button>
            <button className="glower-button orange">Warning</button>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;button class="glower-button aqua"&gt;Info&lt;button&gt;
                <br />
                &lt;button class="glower-button green"&gt;Success&lt;button&gt;
                <br />
                &lt;button class="glower-button red"&gt;Danger&lt;button&gt;
                <br />
                &lt;button class="glower-button orange"&gt;Warning&lt;button&gt;
              </code>
            </pre>
          </div>
        </div>

        <div className="buttons">
          <div className="buttons__left">
            <button className="glower-button">Outlined</button>
            <button className="glower-button yellow">Outlined</button>
            <button className="glower-button blue">Outlined</button>
            <button className="glower-button magenta">Outlined</button>
            <button className="glower-button pink">Outlined</button>
            <button className="glower-button purple">Outlined</button>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;button class="glower-button"&gt;Outlined&lt;button&gt;
                <br />
                &lt;button class="glower-button
                yellow"&gt;Outlined&lt;button&gt;
                <br />
                &lt;button class="glower-button blue"&gt;Outlined&lt;button&gt;
                <br />
                &lt;button class="glower-button
                magenta"&gt;Outlined&lt;button&gt;
                <br />
                &lt;button class="glower-button pink"&gt;Outlined&lt;button&gt;
                <br />
                &lt;button class="glower-button
                purple"&gt;Outlined&lt;button&gt;
                <br />
              </code>
            </pre>
          </div>
        </div>
        <div className="section">
          <h2 id="buttons" className="section__header">
            Buttons
          </h2>
          <h4 className="section__subHeader">fullfilled</h4>
          <p className="section__description">
            This is a fullfilled version of button.
          </p>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <button className="glower-button aqua full">Info</button>
            <button className="glower-button green full">Success</button>
            <button className="glower-button red full">Danger</button>
            <button className="glower-button orange full">Warning</button>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;button class="glower-button aqua full"&gt;Info&lt;button&gt;
                <br />
                &lt;button class="glower-button green
                full"&gt;Success&lt;button&gt;
                <br />
                &lt;button class="glower-button red
                full"&gt;Danger&lt;button&gt;
                <br />
                &lt;button class="glower-button orange
                full"&gt;Warning&lt;button&gt;
              </code>
            </pre>
          </div>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <button className="glower-button full">Fullfilled</button>
            <button className="glower-button yellow full">Fullfilled</button>
            <button className="glower-button blue full">Fullfilled</button>
            <button className="glower-button magenta full">Fullfilled</button>
            <button className="glower-button pink full">Fullfilled</button>
            <button className="glower-button purple full">Fullfilled</button>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;button class="glower-button
                full"&gt;Fullfilled&lt;button&gt;
                <br />
                &lt;button class="glower-button yellow
                full"&gt;Fullfilled&lt;button&gt;
                <br />
                &lt;button class="glower-button blue
                full"&gt;Fullfilled&lt;button&gt;
                <br />
                &lt;button class="glower-button magenta
                full"&gt;Fullfilled&lt;button&gt;
                <br />
                &lt;button class="glower-button pink
                full"&gt;Fullfilled&lt;button&gt;
                <br />
                &lt;button class="glower-button purple
                full"&gt;Fullfilled&lt;button&gt;
                <br />
              </code>
            </pre>
          </div>
        </div>
        <div className="section">
          <h2 id="buttons" className="section__header">
            Buttons
          </h2>
          <h4 className="section__subHeader">loading</h4>
          <p className="section__description">
            This is a loading version of button.
          </p>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <button className="glower-button aqua loading">Info</button>
            <button className="glower-button green loading">Success</button>
            <button className="glower-button red loading">Danger</button>
            <button className="glower-button orange loading">Warning</button>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;button class="glower-button aqua
                loading"&gt;Info&lt;button&gt;
                <br />
                &lt;button class="glower-button green
                loading"&gt;Success&lt;button&gt;
                <br />
                &lt;button class="glower-button red
                loading"&gt;Danger&lt;button&gt;
                <br />
                &lt;button class="glower-button orange
                loading"&gt;Warning&lt;button&gt;
              </code>
            </pre>
          </div>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <button className="glower-button loading">Loading</button>
            <button className="glower-button yellow loading">Loading</button>
            <button className="glower-button blue loading">Loading</button>
            <button className="glower-button magenta loading">Loading</button>
            <button className="glower-button pink loading">Loading</button>
            <button className="glower-button purple loading">Loading</button>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;button class="glower-button
                loading"&gt;Loading&lt;button&gt;
                <br />
                &lt;button class="glower-button yellow
                loading"&gt;Loading&lt;button&gt;
                <br />
                &lt;button class="glower-button blue
                loading"&gt;Loading&lt;button&gt;
                <br />
                &lt;button class="glower-button magenta
                loading"&gt;Loading&lt;button&gt;
                <br />
                &lt;button class="glower-button pink
                loading"&gt;Loading&lt;button&gt;
                <br />
                &lt;button class="glower-button purple
                loading"&gt;Loading&lt;button&gt;
                <br />
              </code>
            </pre>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonsSection;

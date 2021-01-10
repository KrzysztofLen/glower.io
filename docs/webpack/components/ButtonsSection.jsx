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
            The button is an essential element of any design. It's meant to look
            and behave as an interactive element of your page.
            <br />
            The button is available in all the different colors defined by the
            $colors Sass map.
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
      </React.Fragment>
    );
  }
}

export default ButtonsSection;

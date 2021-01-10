import React, { Component } from "react";

class BadgeSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section">
          <h2 id="badges" className="section__header">
            Badge
          </h2>
          {/* <h4 className="section__subHeader">outlined (default)</h4> */}
          <p className="section__description">
            The Glower badge is a small but versatile element. It's very useful
            as a way to attach information to a block or other component. Its
            size makes it also easy to display in numbers, making it appropriate
            for long lists of items.
          </p>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <span className="glower-badge aqua">Info</span>
            <span className="glower-badge green">Success</span>
            <span className="glower-badge red">Danger</span>
            <span className="glower-badge orange">Warning</span>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;span class="glower-badge aqua"&gt;Info&lt;span&gt;
                <br />
                &lt;span class="glower-badge green"&gt;Success&lt;span&gt;
                <br />
                &lt;span class="glower-badge red"&gt;Danger&lt;span&gt;
                <br />
                &lt;span class="glower-badge orange"&gt;Warning&lt;span&gt;
              </code>
            </pre>
          </div>
        </div>

        <div className="buttons">
          <div className="buttons__left">
            <span className="glower-badge">Default</span>
            <span className="glower-badge yellow">Yellow</span>
            <span className="glower-badge blue">Blue</span>
            <span className="glower-badge magenta">Magenta</span>
            <span className="glower-badge pink">Pink</span>
            <span className="glower-badge purple">Purple</span>
          </div>
          <div className="buttons__right">
            <pre>
              <code className="language-html" data-lang="html">
                &lt;span class="glower-badge"&gt;Default&lt;span&gt;
                <br />
                &lt;span class="glower-badge yellow"&gt;Yellow&lt;span&gt;
                <br />
                &lt;span class="glower-badge blue"&gt;Blue&lt;span&gt;
                <br />
                &lt;span class="glower-badge magenta"&gt;Magenta&lt;span&gt;
                <br />
                &lt;span class="glower-badge pink"&gt;Pink&lt;span&gt;
                <br />
                &lt;span class="glower-badge purple"&gt;Purple&lt;span&gt;
                <br />
              </code>
            </pre>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeSection;

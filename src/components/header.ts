import { LitElement, css, customElement, html, property } from "lit-element";

import "./lazy";

@customElement("my-header")
class Header extends LitElement {
  render() {
    return html`
      <header>This is a header</header>
    `;
  }
}

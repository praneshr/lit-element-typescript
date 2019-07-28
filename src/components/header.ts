import {
  LitElement, customElement, html,
} from 'lit-element';

@customElement('my-header')
class Header extends LitElement {
  render() {
    return html`
      <header>This is a header</header>
    `;
  }
}

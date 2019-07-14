import { LitElement, html, customElement, property } from "lit-element";

@customElement("x-lazy")
export default class extends LitElement {
  @property({ type: Object }) component = null;
  @property({ type: Boolean }) loading = true;

  connectedCallback() {
    super.connectedCallback();
    if (this.component instanceof Promise) {
      this.component.then(() => (this.loading = false));
    }
  }
  render() {
    return html`
      <slot name=${this.loading ? "loading" : null}></slot>
      <slot name="content"></slot>
    `;
  }
}

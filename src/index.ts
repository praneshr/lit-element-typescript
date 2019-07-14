import { html, css, LitElement, customElement, property } from "lit-element";
import { connect, installRouter } from "pwa-helpers";

import "./components/header.ts";
import store from "./store";
import router from "./router";

@customElement("my-app")
export default class extends connect(store as any)(LitElement) {
  @property({ type: Number }) _router;

  static get styles() {
    return css`
      :host {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
      }
    `;
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    router();
  }

  stateChanged({ sample, router }): void {
    this._router = router;
  }

  render() {
    console.log(this._router);
    return html`
      <my-header></my-header>
      <main>
        This is the main content.
      </main>
    `;
  }
}

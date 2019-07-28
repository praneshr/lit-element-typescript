import {
  html, css, LitElement, customElement, property, CSSResult, TemplateResult,
} from 'lit-element';
import { connect } from 'pwa-helpers';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './components/header.ts';
import store from './store';
import router from './router';

OfflinePluginRuntime.install({
  onInstalled: () => {
    console.log('Service Worker installed');
  },
  onUpdating: () => {
    console.log('SW Event:', 'onUpdating');
  },
  onUpdateReady: () => {
    console.log('SW Event:', 'onUpdateReady');
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: () => {
    console.log('SW Event:', 'onUpdated');
  },
  onUpdateFailed: () => {
    console.log('SW Event:', 'onUpdateFailed');
  }
});

@customElement('my-app')
export default class extends connect(store as any)(LitElement) {
  @property({ type: Number }) router: any;

  public static get styles(): CSSResult {
    return css`
      :host {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }
    `;
  }

  public connectedCallback(): void {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    router();
  }

  public stateChanged({ sample, router: r }): void {
    this.router = r;
  }

  public render(): TemplateResult {
    return html`
      <my-header></my-header>
      <main>
        This is content.
      </main>
    `;
  }
}

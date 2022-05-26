import { LitElement, html, css } from 'lit';
import './components/player-card';
import './components/highest-rated';
//import './components/has-changed-test';

export class FutDb extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static styles = css``; 

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>
        <highest-rated></highest-rated>
      </main>
    `;
  }
}

customElements.define('fut-db', FutDb);
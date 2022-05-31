import { LitElement, html, css } from "lit";

class MyElement extends LitElement {
  static get properties() {
    return {
      hidden: {type: Boolean},
      state: {type: Number}
    }
  }

  constructor() {
    super();
    this.hidden = false,
    this.state = 0
  }

  handleClock(e) {
    this.hidden = !this.hidden;
    this.state += (2 + this.hidden)
    console.log(this.hidden + " CLOCK " + this.state)

  }

  handleClick(e) {
    this.hidden = !this.hidden;
    this.state += (1 + this.hidden)
    console.log(this.hidden + " CLICK " + this.state)

  }

  render() {
    return html`
      ${this.hidden ?
      html`<button @click="${this.handleClick}">Cambio de boton I</button>`
      : html`<button @click="${this.handleClock}">Cambio de boton O</button>`
      }
    `
  }
    /*static properties = {
      value: {
        // only update for odd values of newVal.
        hasChanged(newVal, oldVal) {
          const hasChanged = newVal % 2 == 1;
          console.log(`${newVal}, ${oldVal}, ${hasChanged}`);
          return hasChanged;
        },
      },
    };
  
    constructor() {
      super();
      this.value = 1;
    }
  
    render() {
      return html`
        <p>${this.value}</p>
        <button @click="${this.getNewVal}">Get new value</button>
      `;
    }
  
    getNewVal() {
      this.value = Math.floor(Math.random() * 100);
    }
  }*/
}
customElements.define('my-element', MyElement);
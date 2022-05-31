import { LitElement, html, css } from "lit";
import "../controller/api-data";
import "../controller/api-image";
import { choose } from "lit/directives/choose.js";

export class PlayerCard extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      playerId: { type: Number, attribute: 'player-id' },
      name: { type: String },
      position: { type: String },
      club: { type: Number },
      nation: { type: Number },
      rarity: { type: Number },
      rating: { type: Number },
      pace: { type: Number },
      shooting: { type: Number },
      passing: { type: Number },
      dribbling: { type: Number },
      defending: { type: Number },
      physicality: { type: Number },
    };
  }

  static styles = css`
  .card {
    display: inline-block;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    text-transform: uppercase;
    text-align: center;
    width: 20rem;
    height: 30rem;
    background-image: url(https://futhead.cursecdn.com/static/img/22/cards/large/1_5_0.png);
    color: white;
  }

  .player,.nation,.club,.rating,.position,.name,
  .pace,.shooting,.passing,.dribbling,.defending,.physicality,
  .divider-nat,.divider-bad,.divider-nam,.divider-att,.divider-che,.divider-special {
    position: absolute;
    background-image: url('./css/lol.png')
  }

  span {
    display: inline-block
  }

  .player {
    top: 11%;
    left: 25%;
    width: 65%;
  }

  .rating {
    top: 12%;
    left: 20%;
    font-size: 3.5rem;
    font-weight: bold;
  }

  .nation {
    top: 33%;
    left: 22%;
    width: 2.8rem;
  }

  .club {
    top: 41%;
    left: 23%;
    width: 2.5rem;
  }

  .position {
    top: 25%;
    left: 16%;
    font-size: 1.5rem;
    font-weight: bold;
    min-width: 5rem;  
  }

  .name {
    width: 91.3%;
    top: 53%;
    left: 4%;
    letter-spacing: 0.06rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .pace, .shooting, .passing, .dribbling, .defending, .physicality {
    text-align: left;
    font-size: 1.6rem;
  }

   .pace, .shooting, .passing {
    left: 20%;
  }

  .dribbling, .defending, .physicality {
    left: 56%;
  }

  .pace, .dribbling {
    top: 61%;
  }

  .shooting, .defending {
    top: 68%;
  }

  .passing, .physicality {
    top: 75%;
  }

  .pace::after {
    content: " PAC";
  }

  .shooting::after {
    content: " SHO";
  }

  .passing::after {
    content: " PAS";
  }

  .dribbling::after {
    content: " DRI";
  }

  .defending::after {
    content: " DEF";
  }

  .physicality::after {
    content: " PHY";
  }
  `;
  

  render() {
    return html`
      <div class="card" style="font-family: Barlow, sans-serif">
        <div class="card-header">
          <span class="rating">${this.rating}</span>
          <span class="position">${this.position}</span>
          <api-image class="player" type="players" item-id="${this.playerId}"></api-image>
          <api-image class="nation" type="nations" item-id="${this.nation}"></api-image>
          <api-image class="club" type="clubs" item-id="${this.club}"></api-image>
        </div>
        <div class="card-name">
          <span class="name">${this.name}</span>
        </div>
        <div class="card-attributes">
          <div class="card-attributes-column">
            <span class="pace">${this.pace}</span>
            <span class="shooting">${this.shooting}</span>
            <span class="passing">${this.passing}</span>
          </div>
          <div class="card-attributes-column">
            <span class="dribbling">${this.dribbling}</span>
            <span class="defending">${this.defending}</span>
            <span class="physicality">${this.physicality}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("player-card", PlayerCard);

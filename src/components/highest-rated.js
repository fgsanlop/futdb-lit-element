import { LitElement, html, css } from "lit";
import '../controller/api-data';
import '../controller/api-image';
import './player-card';

export class HighestRated extends LitElement {
    static get properties() {
        return {
            players: { type: Array, attribute: false }
        }
    }
    
    constructor() {
        super();
        this.players = [];
        this.addEventListener('futResponse', (e) => {
            console.log(e.detail.data.items);   
            this.players = e.detail.data.items;
            this.players = this.players.splice(0,10)
        });
    }

    render() {
        return html`
            <api-data type="players"></api-data>

            ${this.players.map((player) =>
                html`
                    <player-card 
                        player-id=${player.id}
                        name=${player.common_name}
                        position=${player.position}
                        club=${player.club}
                        nation=${player.nation}
                        rating=${player.rating}
                        pace=${player.pace}
                        shooting=${player.shooting}
                        passing=${player.passing}
                        dribbling=${player.dribbling}
                        defending=${player.defending}
                        physicality=${player.physicality}
                    >
                    </player-card>
                `
            )}            
        `;
    }
}

customElements.define('highest-rated', HighestRated)
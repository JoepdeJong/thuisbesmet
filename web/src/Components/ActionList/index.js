import React, { Component } from 'react'

import './index.scss'

export default class ActionList extends Component {
    constructor(props){
        super(props)

        this.lists = [
            {
                name: 'general',
                title: 'Wat kan jij doen?',
                button: 'in het algemeen',
                items: [
                    "Probeer zo veel mogelijk buiten af te spreken, waarbij de anderhalve meter in acht gehouden wordt. ",
                    "Kom niet bij andere huizen binnen, tenzij het echt niet anders kan.",
                    "Heb je (milde) klachten? Ga in isolatie en wacht niet met testen!",
                    "Heeft er iemand in je huis klachten? Ga met je huis in quarantaine als deze klachten koorts- of benauwdheidsklachten zijn.",
                    "Positief testresultaat? Blijf in isolatie! Huisgenoten gaan ook in quarantaine als ze dat niet al waren!",
                    "Reis niet naar je ouders als je gezondheidsklachten hebt!",
                    "Probeer studentenactiviteiten of samenkomsten in andere steden zoveel mogelijk te vermijden.",
                    "Boodschappenochtend: probeer tussen 8.00 en 12.00 's ochtends de supermarkten niet te bezoeken."
                ]
            },
            {
                name: 'corona',
                title: 'Wat kan jij doen als je corona hebt?',
                button: 'als je corona hebt',
                items: [
                    "Blijf in isolatie!",
                    "Luister naar de adviezen van de GGD.",
                    "Heb het erover met je huis en nauwe contacten, zij moeten ook in quarantaine!"
                ]

            },
            {
                name: 'isolation',
                title: 'Wat kan jij doen als je in isolatie zit?',
                button: 'als je in isolatie zit',
                items: [
                    "Verlaat je kamer niet! Laat huisgenoten eten en drinken achter de deur klaarzetten.",
                    "Laat huisgenoten boodschappen voor je doen.",
                    "Laat indien mogelijk huisgenoten een speciale corona badkamer (en wc) maken!",
                    "Tip: Gebruik Zoom en Discord om toch nog je vrienden en familie te kunnen zien!",
                ]
            }
        ]

        this.state = {
            currentList: this.lists[0],
        }
    }
    render() {
        return (
            <div className="ActionList">
                <div className="ActionList__buttons">
                    {
                        this.lists.map((v, k) => <div className={`Button `+(this.state.currentList.name === v.name?' active':'')} onClick={() => this.setState({'currentList': v})}>{v.button}</div>)
                    }
                </div>
                <ol className="List">
                    {
                        this.state.currentList.items.map((v, k)=> <li key={k}>{v}</li>)
                    }
                </ol>
            </div>
        )
    }
}

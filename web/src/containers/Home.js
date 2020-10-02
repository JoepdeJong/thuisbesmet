import React, { Component } from 'react'
import ActionList from '../Components/ActionList'
import Block from '../Components/Block'

export default class Home extends Component {
    render() {
        return (

            <div>
                <section>
                    <h2>Enquête</h2>
                    <p>Om de befoeften, het bewustzijn en de bereidheid van de studenten te peilen hebben wij een enquête gemaakt. Het zou ons veel helpen als jij deze invult! De enquête bestaat voornamelijk uit meerkeuzevragen, dus het invullen is maar enkele minuten werk!</p>
                    <a className="Button" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdtIs-dKH4aFBnO4--tbdCwN5bzbBai2eM1JDWB-igo6I3cSA/viewform">Vul in!</a>
                </section>
                <h2>Videoboodschap</h2>
                <div className="Video">
                    <iframe title="Videomessage Mayor Marja van Bijsterveldt &amp; Vice Rector Magnificus Rob Mudde" src="https://www.youtube-nocookie.com/embed/2pfSO6nfUwc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <Block title="Het is 5 voor 12">
                    <p>Het is 5 voor 12 in Delft. Het aantal coronabesmettingen stijgt onvoorstelbaar hard. Voornamelijk gebeurt dit onder ons, de studentenpopulatie, 80% van de positief geteste Delftenaren is namelijk student.</p>
                    <p>Aan ons, studenten, de taak om het tij te keren. Samen kunnen wij iets doen tegen Corona. <b>De meeste besmettingen vinden in een thuissituatie plaats</b>, dus jij kunt hier iets in betekenen! Als we <b>nu</b> drastische veranderingen aanbrengen in ons gedrag is een Delftse <b>lockdown</b> nog te voorkomen.</p>
                    <p>Deze website is opgericht voor én door studenten. Je vindt hier meer belangrijke informatie over typische studenten vraagstukken rondom corona.</p>
                </Block>

                <h2>Wat kan jij doen?</h2>
                <ActionList/>
                
                <h2>Wat zijn de gevolgen als we ons niet aan de regels houden?</h2>

                <div className="SideToSide">
                    <Block title="Huidige situatie" secundary>
                        <p>Je staat ‘s ochtends op en volgt over het algemeen veel digitaal onderwijs. Af en toe krijg je de mogelijkheid om een fysiek college bij te wonen en daarnaast organiseert de universiteit (kleinschalige) activiteiten. Na je studiedag kan je sporten op de universiteit of bij een sportschool, waarna je gezellig met je huisgenoten een maaltijd neerzet om vervolgens lekker een drankje te gaan doen op de Markt, Beestenmarkt of het Doelenplein.</p>
                    </Block>

                    <Block title="Indien er geen verandering komt" secundary>
                        <p>Op het moment dat Delftenaren (jij dus ook!) in een lokale lockdown moeten, is het onder andere afgelopen met het fysieke onderwijs, het sporten en het pakken van terrasjes op de Bema. We verliezen onze vrijheden weer die we de afgelopen maanden hebben gekregen en gaan terug naar de intelligente lockdown van aan het begin van de corona crisis. Reden te meer om jezelf, vrienden en huisgenoten te stimuleren om je echt aan de maatregelen te houden!</p>
                    </Block>
                </div>

                <section>
                    <h2>Boodschappenochtend</h2>
                    <p>Naar aanleiding van de naar voren geschoven persconferentie van 18 september en de mogelijk komende maatregelen, willen wij graag een student-vrije boodschappenochtend faciliteren. Wij willen jou, de Delftse student, vragen om de supermarkten in Delft te mijden in de ochtenduren (specifiek van 8:00-12:00). Dit is met nadruk een oproep aan jou en dus niet een verplichting. Het is een kleine moeite en kan in ieder geval geen kwaad, maar het kan wél een groot statement zijn. Omdat het geen verplichting is, kan je dus nog steeds in de ochtend naar de supermarkt als het nodig is, maar vragen we je dan een mondkapje te dragen.</p>
                    <a className="Button" target="_blank" rel="noopener noreferrer" href="https://thuisbesmet.nl/media/poster-boodschappenochtend.pdf">Bekijk de oproep (NL)</a> <a className="Button" target="_blank" rel="noopener noreferrer" href="https://thuisbesmet.nl/media/poster-groceries.pdf">Bekijk de oproep (EN)</a>
                </section>
                <section>
                <h2>Hoe kan jij helpen?</h2>
                <p>We hebben een poster gemaakt die je kan verspreiden, bijvoorbeeld binnen je huis of je sportclub. De meest doeltreffende manier om te helpen is uiteraard dat jij je goed aan de maatregelen houdt! Voel je niet bezwaard elkaar op onverstandig gedrag aan te spreken, samen kunnen we zorgen voor het bewustzijn, en daarmee kunnen we een <b>lokale lockdown</b> voorkomen.</p>
                <a className="Button" target="_blank" rel="noopener noreferrer" href="https://thuisbesmet.nl/media/poster-corona-spelregels.pdf">Download de poster (NL)</a> <a className="Button" target="_blank" rel="noopener noreferrer" href="https://thuisbesmet.nl/media/poster-corona-measures.pdf">Download de poster (EN)</a>
                <p><i>Ben jij initiatiefnemer van een andere stad, en wil je de poster verspreiden met eigen logo's? Neem dan contact op via poster@thuisbesmet.nl en voeg eigen (witte) logos in vector-format bij.</i></p>

                <h2>Meedenken?</h2>
                <p>Mocht je graag nog meer willen helpen, dan nodigen we je graag uit voor een van onze nederlands- of engelstalige denktanks. Hierin willen we in een klein groepje gaan brainstormen over wat juiste vervolgstappen zijn voor de kortetermijn campagne en hoe we op lange termijn er bijvoorbeeld voor kunnen zorgen dat studenten hun sociale leven kunnen voortzetten terwijl zij alle maatregelen in acht nemen. Een leuke casus om alvast over na te denken is het volgende.</p> 
                <p><i>Hoe kunnen we ervoor zorgen dat studenten hun doorgaans sociale leven kunnen voortzetten als het straks kouder wordt? Welke mogelijkheden zijn er dan voor buiten, want bij elkaar in huis afspreken moet juist nu voorkomen worden.</i></p> 
                
                <p>Voel jij je geroepen mee te denken?</p>
                <a className="Button" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLScgaxZs06AUcp4tKFUeCLPamuDgsVF1s7MNHqm1nUmcOXDhYQ/viewform">Aanmelden</a>
                </section>
            </div>
        )
    }
}

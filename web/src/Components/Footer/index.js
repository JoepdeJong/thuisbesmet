import React from 'react'

import LogoVera from '../../assets/img/logo-vera.svg'
import LogoTuDelft from '../../assets/img/logo-tudelft.svg'
import LogoGgd from '../../assets/img/logo-ggd-haaglanden.png'
import LogoGemeenteDelft from '../../assets/img/logo-gemeente-delft.svg'

import { useTranslation, Trans } from 'react-i18next';

import './index.scss'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <div>
            <h2>{t('contact.title')}</h2>
            <div>
                <a href="mailto:geencontact@thuisbesmet.nl" className="Button">geencontact@thuisbesmet.nl</a>
                {/*<a href="https://wa.me/31623487791" className="Button">0623487791 (whatsapp)</a>*/}
                <a href="https://www.instagram.com/thuisbesmet/" target="_blank" rel="noopener noreferrer" className="Button">@thuisbesmet (instagram)</a>
            </div>

            <Trans i18nKey="contact.collab"></Trans>
            <div className="Footer__logos">
                <img src={LogoTuDelft} alt="TU Delft"/>
                <img src={LogoGgd} alt="GGD Haaglanden"/>
                <img src={LogoGemeenteDelft} alt="Gemeente Delft"/>
                <img src={LogoVera} alt="Verenigingen Raad"/>
            </div>
        </div>
    )
}

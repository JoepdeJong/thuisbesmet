import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import './Data.scss';
const Vacatures = () => {
    const { t } = useTranslation()

    return (
        <div className="vacatures">
            <section>
                <h2>{t('vacatures.title')}</h2>
                <br></br>
                <a href="https://thuisbesmet.nl/media/vacatures/B1_Vacature_werkstudent_VERGEVEN.pdf" className="Button">{t('vacatures.label')} 1</a>
                <a href="https://thuisbesmet.nl/media/vacatures/B2_Vacature_werkstudent.pdf" className="Button">{t('vacatures.label')} 2</a>
                <a href="https://thuisbesmet.nl/media/vacatures/B3_Vacature_werkstudent.pdf" className="Button">{t('vacatures.label')} 3</a>
                <a href="https://thuisbesmet.nl/media/vacatures/B4_Vacature_werkstudent.pdf" className="Button">{t('vacatures.label')} 4</a>
                <a href="https://thuisbesmet.nl/media/vacatures/B5_Vacature_werkstudent.pdf" className="Button">{t('vacatures.label')} 5</a>
            </section>
        </div>
    );
};

export default Vacatures;
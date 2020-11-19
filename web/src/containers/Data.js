import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import './Data.scss';
const Data = () => {
    const { t } = useTranslation()

    return (
        <div className="Data">
            <section>
                <h2>{t('dashboard.title')}</h2>
                <iframe title="Thuisbesmet.nl Data" src="https://app.powerbi.com/view?r=eyJrIjoiZjAyYWYxZWYtYmI5Yi00MzllLTg0OGEtNmNlNDk4MmIyY2U5IiwidCI6IjA5NmU1MjRkLTY5MjktNDAzMC04Y2QzLThhYjQyZGUwODg3YiIsImMiOjh9&pageName=ReportSection" frameborder="0" allowFullScreen="true"/>
            </section>
            <section>
                <h2>{t('report.title')}</h2>
                <Trans i18nKey="report.text"></Trans>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('report.btnNl.url')}>{t('report.btnNl.title')}</a>
            </section>
        </div>
    );
};

export default Data;
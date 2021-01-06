import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import './Data.scss';
const DataDelft = () => {
    const { t } = useTranslation()

    return (
        <div className="Data">
            <section>
                <h2>{t('dashboard.title')}</h2>
                <iframe width="800" height="636" title="Thuisbesmet.nl Data Delft" src="https://app.powerbi.com/view?r=eyJrIjoiZjAyYWYxZWYtYmI5Yi00MzllLTg0OGEtNmNlNDk4MmIyY2U5IiwidCI6IjA5NmU1MjRkLTY5MjktNDAzMC04Y2QzLThhYjQyZGUwODg3YiIsImMiOjh9&pageName=ReportSection" frameborder="0" allowFullScreen="true"/>
            </section>
        </div>
    );
};

export default DataDelft;
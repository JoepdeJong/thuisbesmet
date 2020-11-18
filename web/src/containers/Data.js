import React from 'react';
import { useTranslation } from 'react-i18next';

import './Data.scss';
const Data = () => {
    const { t } = useTranslation()

    return (
        <div className="Data">
            <h2>{t('data.title')}</h2>
            <iframe title="Thuisbesmet.nl data" src="https://app.powerbi.com/view?r=eyJrIjoiZjAyYWYxZWYtYmI5Yi00MzllLTg0OGEtNmNlNDk4MmIyY2U5IiwidCI6IjA5NmU1MjRkLTY5MjktNDAzMC04Y2QzLThhYjQyZGUwODg3YiIsImMiOjh9&pageName=ReportSection" frameborder="0" allowFullScreen="true"/>
        </div>
    );
};

export default Data;
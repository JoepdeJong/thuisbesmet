import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import './Data.scss';
const DataLeiden = () => {
    const { t } = useTranslation()

    return (
        <div className="Data">
            <section>
                <h2>{t('dashboard.title')}</h2>
                <iframe width="800" height="636" title="Thuisbesmet.nl Data Leiden" src="https://app.powerbi.com/view?r=eyJrIjoiZjJlZDhkMzktZjZkZS00NTMyLTk1YWQtMmJjZDIyM2M0ZmI4IiwidCI6IjA5NmU1MjRkLTY5MjktNDAzMC04Y2QzLThhYjQyZGUwODg3YiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
            </section>
        </div>
    );
};

export default DataLeiden;
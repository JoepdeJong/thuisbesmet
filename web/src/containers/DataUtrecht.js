import React from 'react';
import { useTranslation } from 'react-i18next';

import './Data.scss';
const DataUtrecht = () => {
    const { t } = useTranslation()

    return (
        <div className="Data">
            <section>
                <h2>{t('dashboard.title')}</h2>
                <iframe width="800" height="636" title="Thuisbesmet.nl Data Utrecht" src="https://app.powerbi.com/view?r=eyJrIjoiN2M0NTRjMDctZWU2Ni00MTNjLTk0NzUtOWZhZGU1MDRjNWQ2IiwidCI6IjA5NmU1MjRkLTY5MjktNDAzMC04Y2QzLThhYjQyZGUwODg3YiIsImMiOjh9" frameBorder="0" allowFullScreen={true}></iframe>
            </section>
        </div>
    );
};

export default DataUtrecht;
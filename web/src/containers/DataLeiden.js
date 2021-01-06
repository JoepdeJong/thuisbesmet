import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import './Data.scss';
const DataLeiden = () => {
    const { t } = useTranslation()

    return (
        <div className="Data">
            <section>
                <h2>{t('dashboard.title')}</h2>
                {/*Dashboard Leiden*/}
            </section>
        </div>
    );
};

export default DataLeiden;
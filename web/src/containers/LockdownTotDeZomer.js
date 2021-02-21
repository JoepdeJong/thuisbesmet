import React from 'react';
import { useTranslation } from 'react-i18next';

import './Data.scss';
const LockdownTotDeZomer = () => {
    const { t } = useTranslation()

    return (
        <div className="Data">
            <section>
                <h2>{t('dashboard.title')}</h2>
                <iframe width="800" height="636" title="lockdown-tot-de-zomer" src="https://app.powerbi.com/view?r=eyJrIjoiYjkwODE3NDgtNzBmNC00ZWE3LThiZWMtOTNlNzExMzk2NGExIiwidCI6IjA5NmU1MjRkLTY5MjktNDAzMC04Y2QzLThhYjQyZGUwODg3YiIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
            </section>
        </div>
    );
};

export default LockdownTotDeZomer;
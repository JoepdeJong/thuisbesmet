import i18next from 'i18next';
import React, {useState} from 'react';

import './index.scss'

const LangSwitcher = () => {
    const [lang, setLang] = useState(i18next.language);

    const changeLang = (lang, path='/') => {
        setLang(lang)
        i18next.changeLanguage(lang)
        window.history.pushState(lang, lang, path);
    }
    return (
        <div className="LangSwitcher">
            <div className={`Button `+(lang==='nl'?'active':'')} onClick={() => changeLang('nl')}>NL</div>
            <div className={`Button `+(lang==='en'?'active':'')} onClick={() => changeLang('en', 'en')}>EN</div>
        </div>
    );
};

export default LangSwitcher;
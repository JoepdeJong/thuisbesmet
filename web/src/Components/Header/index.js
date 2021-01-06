import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import banner from '../../assets/img/owtb-banner.svg';
import LangSwitcher from '../LangSwitcher';

import './index.scss'
const Header = () => {
    const { t } = useTranslation()
    return (
        <div className="Header">
            <LangSwitcher/>
            <Link to="/" className="Banner">
                <ReactSVG src={banner} />
            </Link>
            <div className="Nav">
                <NavLink className="Button" exact to="/"><span className="Button__default">{t('home.title')}</span><span className="Button__hover">{t('home.hoverTitle')}</span></NavLink>
                <NavLink className="Button" to="/blog">{t('blog.title')}</NavLink>
                <NavLink className="Button" to="/data-delft">{t('data.title')}</NavLink>
            </div>
        </div>
    );
};

export default Header;
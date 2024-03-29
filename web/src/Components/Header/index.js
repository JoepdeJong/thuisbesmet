import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import banner from '../../assets/img/owtb-banner.svg';
import LangSwitcher from '../LangSwitcher';
import Anchorlink from '../Anchorlink/AnchorLink';
import {isMobile} from 'react-device-detect';

import './index.scss'
const Header = () => {
    const { t } = useTranslation()

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="Header">
            <LangSwitcher/>
            
            <Link to="/" className="Banner">
                <ReactSVG src={banner} />
        	</Link>
            <div className="Nav">
                <NavLink className="Button" exact to="/"><span className="Button__default">{t('home.title')}</span><span className="Button__hover">{t('home.hoverTitle')}</span></NavLink>
                <NavLink className="Button" to="/blog">{t('blog.title')}</NavLink>
                <NavLink className="Button" to="/vacatures">{t('vacatures.title')}</NavLink>
                <Anchorlink className="Button" itemName="Contact"></Anchorlink>
                <div className="dropdown-menu" onClick={isMobile ? handleClick : handleClick}>
                    <div className="dropdown-button" onClick={isMobile ? handleClick : ""}>Data</div>
                    {click && 
                    <NavLink className="dropdown-button" to="/data-leiden">Enquête A</NavLink>
                    }
                    {click && 
                    <NavLink className="dropdown-button" to="/data-delft">Enquête B</NavLink>
                    }
                    {click && 
                    <NavLink className="dropdown-button" to="/data-utrecht">Enquête C</NavLink>
                    }
                    {click && 
                    <NavLink className="dropdown-button" to="/lockdown-tot-de-zomer">Lockdown?</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { ReactSVG } from 'react-svg';
import banner from '../../assets/img/owtb-banner.svg';
import LangSwitcher from '../LangSwitcher';

const Header = () => {
    return (
        <div className="Header">
            <LangSwitcher/>
            <div className="Banner">
                <ReactSVG src={banner} />
            </div>
        </div>
    );
};

export default Header;
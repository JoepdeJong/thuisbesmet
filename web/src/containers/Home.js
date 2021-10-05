import React from 'react'
import Block from '../Components/Block'
import { useTranslation, Trans } from 'react-i18next';
import BlogList from '../Components/Blog/List';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Carousel from 'react-elastic-carousel';
import onepager from '../assets/img/onepager.png';
import lievemark1 from '../assets/img/lievemark1.jpg';
import lievemark2 from '../assets/img/lievemark2.jpg';
import lievemark3 from '../assets/img/lievemark3.jpg';
import lievemark4 from '../assets/img/lievemark4.jpg';
import lievemark5 from '../assets/img/lievemark5.jpg';
import lievemark6 from '../assets/img/lievemark6.jpg';

export default function Home() {
    const { t } = useTranslation()
    return (
        <div>
            <section>
                <h2>{t('LMxTOC.title')}</h2>
                <div class="row">
                    <div class="column">
                        <a href="https://www.instagram.com/p/CUm4SEGtmrV/?utm_source=ig_web_copy_link"><img class="LMimg" src={lievemark6} alt="Onepager S.O.S."/></a>
                    </div>
                    <div class="column">
                        <a href="https://www.instagram.com/p/CUm4LIKNqZA/?utm_source=ig_web_copy_link"><img class="LMimg" src={lievemark5} alt="Onepager S.O.S."/></a>
                    </div>
                    <div class="column">
                        <a href="https://www.instagram.com/p/CUm39Y_tals/?utm_source=ig_web_copy_link"><img class="LMimg" src={lievemark4} alt="Onepager S.O.S."/></a>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <a href="https://www.instagram.com/p/CUm35ikNyeu/?utm_source=ig_web_copy_link"><img class="LMimg" src={lievemark3} alt="Onepager S.O.S."/></a>
                    </div>
                    <div class="column">
                        <a href="https://www.instagram.com/p/CUm34GbNBqe/?utm_source=ig_web_copy_link"><img class="LMimg" src={lievemark2} alt="Onepager S.O.S."/></a>
                    </div>
                    <div class="column">
                        <a href="https://www.instagram.com/p/CUm32ylNz3g/?utm_source=ig_web_copy_link"><img class="LMimg" src={lievemark1} alt="Onepager S.O.S."/></a>
                    </div>
                </div>
                <Trans i18nKey="LMxTOC.text">
                    <Link to="https://youtu.be/_z217MtKzHo">description</Link>
                    <Link to="https://timeoutcafe.nu">description</Link>
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSer4UK8851F3zASpbqSCUseCOlVpaYn7Z79T6OaBsvAOboGQA/viewform?usp=sf_link">description</Link>
                    <Link to="https://www.timeoutcafe.nu/livestream/">description</Link>
                </Trans>
                <div class="container">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_z217MtKzHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <Trans i18nKey="LMxTOC.text2">
                    <Link to="http://thuisbesmet.nl/">description</Link>
                    <Link to="https://timeoutcafe.nu/">description</Link>
                    <h3>description</h3>
                </Trans> 
            </section> 
            <section>
                <h2>{t('Janssen.title')}</h2>
                <Trans i18nKey="Janssen.text"></Trans>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('Janssen.btnNl.url')} onClick={handleClickJanssen}>{t('Janssen.btnNl.title')}</a>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('Janssen.btnEn.url')} onClick={handleClickJanssen}>{t('Janssen.btnEn.title')}</a>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('Janssen.btnPoster.url')} onClick={handleClickJanssen}>{t('Janssen.btnPoster.title')}</a>            
            </section>

            <section>
                <h2>{t('lieve-mark.title')}</h2>
                <div className="onepager">
                    <img src={onepager} alt="Onepager S.O.S."/>
                </div>
                <Trans i18nKey="lieve-mark.text"></Trans>
            </section>
            <section>
                <h2>Aanbevelingen</h2>
                <Carousel itemsToShow={1}>
                    <Block title={t('recommendations.wellbeing.title')}>
                        <Trans i18nKey="recommendations.wellbeing.text"></Trans>
                    </Block>
                    <Block title={t('recommendations.measures.title')}>
                        <Trans i18nKey="recommendations.measures.text"></Trans>
                    </Block>
                    <Block title={t('recommendations.quarantine.title')}>
                        <Trans i18nKey="recommendations.quarantine.text"></Trans>
                    </Block>
                    <Block title={t('recommendations.awareness.title')}>
                        <Trans i18nKey="recommendations.awareness.text"></Trans>
                    </Block>
                    <Block title={t('recommendations.hospitality.title')}>
                        <Trans i18nKey="recommendations.hospitality.text"></Trans>
                    </Block>
                    <Block title={t('recommendations.studyspace.title')}>
                        <Trans i18nKey="recommendations.studyspace.text"></Trans>
                    </Block>
                    <Block title={t('recommendations.financial.title')}>
                        <Trans i18nKey="recommendations.financial.text"></Trans>
                    </Block>
                    <Block title={t('recommendations.substance.title')}>
                        <Trans i18nKey="recommendations.substance.text"></Trans>
                    </Block>
                </Carousel>
            </section>
            <section>
                <h2>{t('report.title')}</h2>
                <Trans i18nKey="report.text"></Trans>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('report.btnNl.url')} onClick={handleClickRapport}>{t('report.btnNl.title')}</a>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('report.onepager.url')} onClick={handleClickOnepager}>{t('report.onepager.title')}</a>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('enquete3.url')} onClick={handleClickEnquete3}>{t('enquete3.title')}</a>
            </section>
            
            {/*
            <section>
                <h2>{t('survey.title')}</h2>
                <p>{t('survey.text')}</p>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('survey.url')}>{t('survey.btnFillOut')}</a>
            </section>
            */}
            <section>
                <h2>{t('blog.title')}</h2>
                <BlogList/>
                <Link to="/blog" className="Button">{t('blog.showMore')}</Link>
            </section>
            <section>
                <Block title={t('about-us.title')}>
                    <Trans i18nKey="about-us.text"></Trans>
                </Block>
            </section>
            {/*
            <h2>{t('video.title')}</h2>
            <div className="Video">
                <iframe title="Videomessage Mayor Marja van Bijsterveldt &amp; Vice Rector Magnificus Rob Mudde" src="https://www.youtube-nocookie.com/embed/2pfSO6nfUwc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <Block title={t('intro.title')}>
                <Trans i18nKey="intro.text"></Trans>
            </Block>

            <h2>{t('do.title')}</h2>
            <ActionList t={t}/>
            
            <h2>{t('consequences.title')}</h2>

            <div className="SideToSide">
                <Block title={t('consequences.current.title')} secundary>
                    <Trans i18nKey="consequences.current.text"></Trans>
                </Block>

                <Block title={t('consequences.future.title')} secundary>
                    <Trans i18nKey="consequences.future.text"></Trans>
                </Block>
            </div>

            <section>
                <h2>{t('groceries.title')}</h2>
                <Trans i18nKey="groceries.text"></Trans>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('groceries.btnNl.url')}>{t('groceries.btnNl.title')}</a> <a className="Button" target="_blank" rel="noopener noreferrer" href={t('groceries.btnEn.url')}>{t('groceries.btnEn.title')}</a>
            </section>
            <h2>{t('help.title')}</h2>
            <Trans i18nKey="help.text"></Trans>
            <a className="Button" target="_blank" rel="noopener noreferrer" href={t('help.btnNl.url')} onClick={handleClickPoster}>{t('help.btnNl.title')}</a> <a className="Button" target="_blank" rel="noopener noreferrer" href={t('help.btnEn.url')} onClick={handleClickPoster}>{t('help.btnEn.title')}</a>
            <Trans i18nKey="help.poster"></Trans>
            
            <section>
            <h2>{t('thinkAlong.title')}</h2>
            <Trans i18nKey="thinkAlong.text"></Trans>
            <a className="Button" target="_blank" rel="noopener noreferrer" href={t('thinkAlong.btnSignUp.url')}>{t('thinkAlong.btnSignUp.title')}</a>
            </section>
            */}
        </div>
    )
}

function handleClickRapport() {
    ReactGA.event({
        category: 'User',
        action: 'Rapport-Download'
    })
}

function handleClickOnepager() {
    ReactGA.event({
        category: 'User',
        action: 'Onepager-Download'
    })
}

function handleClickEnquete3() {
    ReactGA.event({
        category: 'User',
        action: 'Enquete3-Download'
    })
}

function handleClickJanssen() {
    ReactGA.event({
        category: 'User',
        action: 'Janssen-Download'
    })
}
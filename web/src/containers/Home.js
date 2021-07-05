import React from 'react'
import Block from '../Components/Block'
import { useTranslation, Trans } from 'react-i18next';
import BlogList from '../Components/Blog/List';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Carousel from 'react-elastic-carousel'
import onepager from '../assets/img/onepager.png'

export default function Home() {
    const { t } = useTranslation()
    return (
        <div>
            <section>
                <h2>{t('Janssen.title')}</h2>
                <Trans i18nKey="Janssen.text"></Trans>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('Janssen.btnNl.url')} onClick={handleClickRapport}>{t('Janssen.btnNl.title')}</a>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('Janssen.btnEn.url')} onClick={handleClickOnepager}>{t('Janssen.btnEn.title')}</a>
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
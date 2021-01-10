import React from 'react'
import ActionList from '../Components/ActionList'
import Block from '../Components/Block'
import { useTranslation, Trans } from 'react-i18next';
import BlogList from '../Components/Blog/List';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function Home() {
    const { t } = useTranslation()
    return (

        <div>
            <section>
                <h2>{t('lieve-mark.title')}</h2>
                <Trans i18nKey="lieve-mark.text"></Trans>
            </section>
            <section>
                <h2>{t('report.title')}</h2>
                <Trans i18nKey="report.text"></Trans>
                <a className="Button" target="_blank" rel="noopener noreferrer" href={t('report.btnNl.url')}>{t('report.btnNl.title')}</a>
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

function handleClickPoster() {
    ReactGA.event({
        category: 'User',
        action: 'User downloaded poster'
    })
}

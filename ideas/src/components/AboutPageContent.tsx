import React, {Fragment} from 'react'
import PageWrapper from '../components/PageWrapper'

import { useTranslation } from 'react-i18next';

const AboutPageContent = () => {
    const { t, i18n } = useTranslation();
    return (
        <Fragment>
        <div className="column-top-grid-box">
            <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/code-cover-min.png" alt=""/>
        </div>
        <div className="column-right-grid-box">
            <div className="about-website-title">
                {t('AboutPageContent.title')}
            <hr/>
            </div>
            <div className="about-website-subtitle-1">
                {t('AboutPageContent.subtitle1')}
            </div>
            <div className="about-website-content-1">
                {t('AboutPageContent.content1')}
            </div>
            <div className="about-website-subtitle-2">
                {t('AboutPageContent.subtitle2')}
            </div>
            <div className="about-website-content-2">
                {t('AboutPageContent.content2')}
            </div>
            <div className="about-website-subtitle-3">
                {t('AboutPageContent.subtitle3')}
            </div>
            <div className="about-website-content-3">
            {t('AboutPageContent.content3_1')} <a href="ofalpha@gmail.com">ofalpha@gmail.com</a>
            {t('AboutPageContent.content3_2')}
            </div>
        </div>
        </Fragment>
    )
}

export default PageWrapper({WrappedComponent: AboutPageContent});

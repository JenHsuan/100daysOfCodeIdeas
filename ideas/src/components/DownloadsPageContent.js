import React, {Fragment} from 'react'
import PageWrapper from './PageWrapper'
import { Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAccessTokenState
} from './states/states';
import Router, { useRouter } from 'next/router'

import { useTranslation } from 'react-i18next';

function DownloadsPageContent() {
    const accessToken = useSelector(selectAccessTokenState);
    const { t, i18n } = useTranslation();
    const handleDownload = async(type) => {
        console.log(type)
        if (accessToken === '') {
            Router.push(`/signin`)
        }

        fetch(`/api/download?type=${type}`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': `JWT ${accessToken}`
            })}
        )
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            if (response === undefined || response.url === undefined) {
                Router.push(`/signin`)
                return
            }
            var a = document.createElement('a');
            var url = response.url;
            a.href = url;
            a.click();
        });
    };

    return (
        <Fragment>
            <div className="downloads-column-top-grid-box">
                <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/code-cover-min.png" alt=""/>
            </div>
            <div className="downloads-column-right-grid-box">
                <div className="downloads-title">
                {t('DownloadsPageContent.title')}
                <hr/>
                </div>
                <div className="downloads-subtitle-1">
                {t('DownloadsPageContent.subtitle1')}
                </div>
                <div className="downloads-content-1">
                {t('DownloadsPageContent.content1')}
                </div>
                <div className="downloads-content-2-l">
                <Button variant="dark" onClick = {() => (handleDownload('dmg'))}>
                    macOS
                </Button>
                </div>
                <div className="downloads-content-2-r">
                <Button variant="dark" onClick = {() => (handleDownload('exe'))}>
                    Windows
                </Button>
                </div>
            </div>
        </Fragment>
    )
}

export default PageWrapper({WrappedComponent: DownloadsPageContent});

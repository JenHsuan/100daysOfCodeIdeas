import React, {Fragment} from 'react'
import PageWrapper from './PageWrapper'
import { Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectAccessTokenState
} from './states/states';
import Router, { useRouter } from 'next/router'

function DownloadsPageContent() {
    const accessToken = useSelector(selectAccessTokenState);
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
            console.log(response)
            if (!response.ok) {
                Router.push(`/signin`)
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
                    Downloads  
                <hr/>
                </div>
                <div className="downloads-subtitle-1">
                    Desktop Version is available!
                </div>
                <div className="downloads-content-1">
                    You can feel free to download the dektop version of 100DaysOfCode! Please login for downloading.
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
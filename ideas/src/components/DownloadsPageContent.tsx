import React, {Fragment} from 'react'
import PageWrapper from '../components/PageWrapper'
import { Button} from 'react-bootstrap';

function DownloadsPageContent() {
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
                    You can feel free to download the dektop version of 100DaysOfCode. We support Windows and MacOS currently.
                </div>
                <div className="downloads-content-2-l">
                <Button variant="dark" >
                    <a href="https://daily-learning.herokuapp.com/download?type=dmg">_macOS_</a>
                </Button>
                </div>
                <div className="downloads-content-2-r">
                <Button variant="dark" >
                    <a href="https://daily-learning.herokuapp.com/download?type=exe">Windows</a>
                </Button>
                </div>
            </div>
        </Fragment>
    )
}

export default PageWrapper({WrappedComponent: DownloadsPageContent});
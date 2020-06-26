import React, {useEffect, Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
    selectShowPlannerState,
    selectArticlesState,
    selectLoginState
} from './states/states';

import {
    setLogout,
    getArticles,
    setBookmarks,
    setUsername,
    setAccessToken,
    setEmail,
    setProvider,
    setFinishedArticles,
    setUserId
} from './actions/articlesAction';

import {
    selectBookmarksState,
    selectFinishedArticlessState
} from './states/states';

import Article from './Article'
import {Spinner} from 'react-bootstrap';
import Footer from '../components/Footer';
import Router, { useRouter } from 'next/router'
import { VictoryPie } from 'victory';
import PageWrapper from '../components/PageWrapper'

const AchievementsContent = () => {
    const disPatch = useDispatch();
    const [data, setData] = useState([])
    const showPlanner = useSelector(selectShowPlannerState);
    const articles = useSelector(selectArticlesState);
    const bookmarks = useSelector(selectBookmarksState);
    const finishedArticles = useSelector(selectFinishedArticlessState);
    const isLogin = useSelector(selectLoginState);

    useEffect(()=> {
        if (isLogin === false) {
            Router.push(`/signin`)
        }
     }, [isLogin])

    
    useEffect(()=> {
        //Fetch articles
        var dataList = []
        if ((articles.length -finishedArticles.length ) !== 0) {
            dataList.push({ y: articles.length - finishedArticles.length})
        }
        if (finishedArticles.length !== 0) {
            dataList.push({ y: finishedArticles.length })
        }
        if (bookmarks.length !== 0) {
            dataList.push({  y: bookmarks.length })
        }
        setData(dataList)

    }, [articles, bookmarks, finishedArticles])

    return (
        <Fragment>
            <div className={`${showPlanner === true ? 'achievementspage-head' : 'achievementspage-head achievementspage-head-remove-left'}`}>
                <div className="title">
                    Your Achievements
                </div>
                <div className="subtitle">
                    Keep going!
                </div>
            </div>
            <div className={`${showPlanner !== true ? 'achievementspage-hide-siderbar' : 'achievementspage-hide-siderbar articles-hide-siderbar-remove-left'}`}>
                <div className="achievementspage-content-grid-box">
                    <div className="achievementspage-hide-siderbar-labels">
                        <div>
                            <span className="bookmarks">{bookmarks.length}</span> Bookmarked
                        </div>
                        <div>
                            <span className="finished">{finishedArticles.length} </span> Completed 
                        </div>
                        <div>
                            <span className="unfinished">{articles.length - finishedArticles.length}</span> Unfinished 
                        </div>
                    </div>
                    <div className="achievementspage-piechart">
                    <VictoryPie
                        colorScale={["gray", "blue", "green" ]}
                        data={data}
                        innerRadius={20}
                        labelRadius={30}
                        style={{ labels: { fill: "white", fontSize: 1}}}
                        radius={({ datum }) => 0.5 + datum.y * 1.3}
                    />
                    </div>
                </div>
            </div>
            <div className={`${showPlanner === true ? 'achievementspage-footer' : 'achievementspage-footer achievementspage-footer-move-left'}`}>
                <Footer/>
            </div>
        </Fragment>
    )
}

export default PageWrapper({WrappedComponent: AchievementsContent});

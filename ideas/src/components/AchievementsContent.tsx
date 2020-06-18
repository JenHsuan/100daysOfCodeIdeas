import React, {useEffect, Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
    selectShowPlannerState,
    selectArticlesState
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

const AchievementsContent = () => {
    const disPatch = useDispatch();
    const [data, setData] = useState([])
    const showPlanner = useSelector(selectShowPlannerState);
    const articles = useSelector(selectArticlesState);
    const bookmarks = useSelector(selectBookmarksState);
    const finishedArticles = useSelector(selectFinishedArticlessState);
    
    useEffect(()=> {
        //Fetch articles
        if (articles.length === 0) {
            console.log('fetch articles')
            disPatch(getArticles());
        }

        //Refresh JWT token or logout
        const refreshToken = async () => {
            try {
                const res = await axios.get('api/renew-token/');
            } catch(error) {
                console.log(error)
                SetLogout();
                SetLogoutForLocalSorage();
                Router.push(`/signin`)
            }
        };
        
        refreshToken();

        var bookmarksJson = localStorage.getItem("bookmarks");
        if (bookmarksJson !== null) {
            var bookmarks = bookmarksJson.split(',');
            console.log(bookmarks)
            disPatch(setBookmarks(bookmarks))
        }

        var finishedAriclesJson = localStorage.getItem("finishedArticles");
        if (finishedAriclesJson !== null) {
            var finishedAricles = finishedAriclesJson.split(',');
            console.log(finishedAricles)
            disPatch(setFinishedArticles(finishedAricles))
        }
    }, [])

    useEffect(()=> {
        //Fetch articles
        var dataList = []
        if (articles.length !== 0) {
            dataList.push({ y: articles.length })
        }
        if (finishedArticles.length !== 0) {
            dataList.push({ y: finishedArticles.length })
        }
        if (bookmarks.length !== 0) {
            dataList.push({  y: bookmarks.length })
        }
        setData(dataList)

    }, [articles, bookmarks, finishedArticles])

    const SetLogoutForLocalSorage = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('finishedArticles');
        localStorage.removeItem('bookmarks');
        localStorage.removeItem('token');
        localStorage.removeItem('provider');
    }

    const SetLogout = () => {
        disPatch(setLogout());
        disPatch(setUsername(''));
        disPatch(setUserId(-1));
        disPatch(setEmail(''));
        disPatch(setFinishedArticles([]));
        disPatch(setAccessToken(''));
        disPatch(setProvider(''));
        disPatch(setBookmarks([]));
    }

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
                            <span className="bookmarks">{bookmarks.length}</span> Bookmarked Topics
                        </div>
                        <div>
                            <span className="finished">{finishedArticles.length} </span> Completed Topics
                        </div>
                        <div>
                            <span className="unfinished">{articles.length}</span> Unfinished Topics
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

export default AchievementsContent

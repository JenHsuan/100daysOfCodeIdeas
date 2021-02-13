import React, { Fragment, useEffect } from 'react'
import ArticleSearchBar from './ArticleSearchBar';
import ArticleDropdown from './ArticleDropdown';
import { useDispatch, useSelector } from 'react-redux';
import '../css/sidebar.css'
import {
    selectShowPlannerState,
    selectLoginState
} from './states/states';

import {
    setPlanner
} from './actions/articlesAction';

import Link from 'next/link'
import { useMediaPredicate } from "react-media-hook";
import { useTranslation } from 'react-i18next'

const SideBar = () => {
    const disPatch = useDispatch();
    const showPlannerFlag = useSelector(selectShowPlannerState);
    const isLogin = useSelector(selectLoginState);
    const smallerThan700 = useMediaPredicate("(max-width: 700px)");
    const { t, i18n } = useTranslation()

    useEffect(()=> {
        if (smallerThan700) {
            disPatch(setPlanner(false))
        }
    }, [])

    const showPlanner = () => {
        if (showPlannerFlag === true) {
            console.log('Hide Planner')
            disPatch(setPlanner(false));
        } else {
            console.log('Show Planner')
            disPatch(setPlanner(true));
        }
    }
    return (
        <div className='sidebar' style={{width: showPlannerFlag == true ? '23%' : '2%'}}>
            <div className='sidebar-grid-box'>
                {showPlannerFlag == true && (
                    <Fragment>
                    <div className='sidebar-title'>{t('SideBar.title')}
                        <div className="sidebar-subtitle">{t('SideBar.description')}</div>
                    </div>
                    <div className='sidebar-dropdown'>
                        <div className='sidebar-dropdown-content'>
                            <ArticleDropdown/>
                        </div>
                    </div>
                    <div className='sidebar-search'>
                        <div className='sidebar-search-content'>
                            <ArticleSearchBar />
                        </div>
                    </div>
                    </Fragment>
                )}
                {showPlannerFlag == true ? (
                    <div className='sidebar-remove-left'>
                        <span className="btn-o" onClick = {showPlanner}>
                            <a href="#">
                                <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-left.png" alt="Hide" title="Hide"/>
                            </a>
                        </span>
                    </div>
                ) : (
                    <div className='sidebar-remove-right'>
                        <span className="btn-o" onClick = {showPlanner}>
                            <a href="#">
                                <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-right.png" alt="Show" title="Show"/>
                            </a>
                        </span>
                    </div>)}
            </div>
        </div>
    )
}

export default SideBar

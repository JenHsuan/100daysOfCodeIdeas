import React from 'react'
import ArticleSearchBar from './ArticleSearchBar';
import ArticleDropdown from './ArticleDropdown';
import ArticleDateTimePicker from './ArticleDateTimePicker';
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

const SideBar = () => {
    const disPatch = useDispatch();
    const showPlannerFlag = useSelector(selectShowPlannerState);
    const isLogin = useSelector(selectLoginState);

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
        <div className='sidebar' style={{width: showPlannerFlag == true ? '20%' : '0%'}}>
            <div className='sidebar-grid-box'>
                {!isLogin && (
                    <div className="sidebar-getstarted">
                    <button className="sidebar-getstarted-btn">
                        <Link href="/signup">
                            <a href="/signup">Get Started</a>
                        </Link>
                    </button>
                </div>
                )}
                <div className={isLogin ? 'sidebar-dropdown-after-login' : 'sidebar-dropdown'}>
                    <div className='sidebar-dropdown-title'>Choose Materials</div>
                    <div className='sidebar-dropdown-content'>
                        <ArticleDropdown/>
                    </div>
                </div>
                <div className={isLogin ? 'sidebar-search-after-login' : 'sidebar-search'}>
                    <div className='sidebar-search-title'>Search for all articles</div>
                    <div className='sidebar-search-content'>
                        <ArticleSearchBar />
                    </div>
                </div>
                <div className='sidebar-remove-left'>
                    <span className="btn-o" onClick = {showPlanner}>
                        <a href="#">
                            <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/move-left.png" alt="Hide" title="Hide"/>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SideBar

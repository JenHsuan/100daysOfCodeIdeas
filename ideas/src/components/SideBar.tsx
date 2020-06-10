import React, { Fragment } from 'react'
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
        <div className='sidebar' style={{width: showPlannerFlag == true ? '23%' : '2%'}}>
            <div className='sidebar-grid-box'>
                {showPlannerFlag == true && (
                    <Fragment>
                    <div className='sidebar-title'>Let's Create Your Learnng Plan
                        <div className="sidebar-subtitle">Choose the topics about Software development, Testing, DevOps, or 100DaysOfCode to build the personal learning plan</div>
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

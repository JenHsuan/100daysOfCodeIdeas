import React from 'react'
import {useSelector } from 'react-redux';
import ArticleSearchBar from './ArticleSearchBar';
import ArticleDropdown from './ArticleDropdown';
import ArticleDateTimePicker from './ArticleDateTimePicker';
import '../css/sidebar.css'
import {
    selectShowPlannerState
} from './reducers/articlesReducer';

const SideBar = () => {
    const showPlanner = useSelector(selectShowPlannerState);
    return (
        <div className='sidebar' style={{width: showPlanner == true ? '20%' : '0%'}}>
            <div className='sidebar-grid-box'>
                <div className='sidebar-title'>Learning plan</div>
                <div className='sidebar-dropdown'>
                    <div className='sidebar-dropdown-title'>Choose Materials</div>
                    <div className='sidebar-dropdown-content'>
                        <ArticleDropdown/>
                    </div>
                </div>
                <div className='sidebar-search'>
                    <div className='sidebar-search-title'>Search for all articles</div>
                    <div className='sidebar-search-content'>
                        <ArticleSearchBar />
                    </div>
                </div>
                <div className='sidebar-datetimepicker'>
                </div>
            </div>
        </div>
    )
}

export default SideBar

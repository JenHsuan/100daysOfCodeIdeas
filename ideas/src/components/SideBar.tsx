import React, {Fragment} from 'react'
import ArticleSearchBar from './ArticleSearchBar';
import ArticleDropdown from './ArticleDropdown';
import ArticleDateTimePicker from './ArticleDateTimePicker';
import '../css/sidebar.css'


const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-grid-box'>
                <div className='sidebar-title'>A Layman</div>
                <div className='sidebar-dropdown'>
                    <div>Categories</div>
                    <ArticleDropdown/>
                </div>
                <div className='sidebar-search'>
                    <div>Search for all articles</div>
                    <ArticleSearchBar/>
                </div>
                <div className='sidebar-datetimepicker'>
                </div>
            </div>
        </div>
    )
}

export default SideBar

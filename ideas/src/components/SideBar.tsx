import React, {Fragment} from 'react'
import ArticleSearchBar from './ArticleSearchBar';
import ArticleDropdown from './ArticleDropdown';
import ArticleDateTimePicker from './ArticleDateTimePicker';
import '../css/sidebar.css'


const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-grid-box'>
                <div className='sidebar-title'>Learning plan</div>
                <div className='sidebar-dropdown'>
                    <div className='sidebar-dropdown-title'>Categories</div>
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

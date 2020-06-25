import React from 'react'
import { Dropdown, DropdownButton} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { 
    setCategory,
    clearCategory,
    resetLoading
} from './actions/articlesAction';
import {
    selectCategoryState
} from './states/states';
import Router, { useRouter } from 'next/router'

const ArticleDropdown = () => {
    const disPatch = useDispatch();
    const router = useRouter()
    const category = useSelector(selectCategoryState);
    const handleSelect=(e)=>{
        if (e != "-1") {
            console.log(e);
            disPatch(setCategory(e));
            if (router.pathname !== '/') {
                Router.push(`/`)
            }
        } else {
            disPatch(clearCategory());
        }
    }

    const getTitle = () => {
        if (category == -1) {
            return 'All articles'
        } else if (category == 0) {
            return 'Challenges'
        }  else if (category == 1) {
            return 'Programming'
        } 
    }

    return (
        <DropdownButton className='article-dropdown' id="dropdown-basic-button" title={getTitle()} onSelect={handleSelect}>
            <Dropdown.Item eventKey="-1">All</Dropdown.Item>
            <Dropdown.Item eventKey="0">100DaysOfCode</Dropdown.Item>
            <Dropdown.Item eventKey="1">Programming</Dropdown.Item>
        </DropdownButton>
    )
}

export default ArticleDropdown

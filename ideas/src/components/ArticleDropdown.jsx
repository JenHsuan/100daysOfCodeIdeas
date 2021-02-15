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
import Router, { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const ArticleDropdown = () => {
    const disPatch = useDispatch();
    const router = useRouter()
    const category = useSelector(selectCategoryState);
    const { t, i18n } = useTranslation();
    const handleSelect=(e)=>{
        if (e !== "-1") {
            console.log(e);
            console.log(typeof e);
            disPatch(setCategory(e));
            if (router.pathname !== '/') {
                Router.push(`/`)
            }
        } else {
            disPatch(clearCategory());
            disPatch(setCategory("-1"));
        }
    }

    const getTitle = () => {
        if (category === "-1") {
            return t('SideBar.dropdownForCategories.all')
        } else if (category === "0") {
            return t('SideBar.dropdownForCategories.daysOfCode')
        }  else if (category == "1") {
            return t('SideBar.dropdownForCategories.programming')
        }
    }

    return (
        <DropdownButton className='article-dropdown' id="dropdown-basic-button" title={getTitle()} onSelect={handleSelect}>
            <Dropdown.Item eventKey="-1">{t('SideBar.dropdownForCategories.all')}</Dropdown.Item>
            <Dropdown.Item eventKey="0">{t('SideBar.dropdownForCategories.daysOfCode')}</Dropdown.Item>
            <Dropdown.Item eventKey="1">{t('SideBar.dropdownForCategories.programming')}</Dropdown.Item>
        </DropdownButton>
    )
}

export default ArticleDropdown

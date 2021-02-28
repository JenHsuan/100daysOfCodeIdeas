import React, { useEffect } from 'react'
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
import { dropdownItemsMap } from './configruration';

const ArticleDropdown = () => {
    const disPatch = useDispatch();
    const router = useRouter()
    const category = useSelector(selectCategoryState);
    const { t, i18n } = useTranslation();

    const handleSelect=(e)=>{
        if (e !== "-1") {
            disPatch(setCategory(e));
            if (router.pathname !== '/') {
                Router.push(`/`)
            }
        } else {
            disPatch(clearCategory());
            disPatch(setCategory("-1"));
        }
    }

    const getTitle = () => t(`${dropdownItemsMap[category]}`)

    return (
        <DropdownButton className='article-dropdown' id="dropdown-basic-button" title={getTitle()} onSelect={handleSelect}>
            {dropdownItemsMap && Object.keys(dropdownItemsMap).map(key => (
                <Dropdown.Item eventKey={key} key={key}>{t(`${dropdownItemsMap[key]}`)}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}

export default ArticleDropdown

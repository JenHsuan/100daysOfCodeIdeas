import React from 'react'
import { Dropdown, DropdownButton} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { 
    setCategory,
    clearCategory,
    resetLoading
} from './actions/articlesAction';
import '../css/articleDropdown.css'

const ArticleDropdown = () => {
    const disPatch = useDispatch();
    const handleSelect=(e)=>{
        if (e != "-1") {
            console.log(e);
            disPatch(resetLoading());
            disPatch(setCategory(e));
        } else {
            disPatch(resetLoading());
            disPatch(clearCategory());
        }
    }

    return (
        <DropdownButton className='article-dropdown' id="dropdown-basic-button" title="Select Learning Meterials" onSelect={handleSelect}>
            <Dropdown.Item eventKey="-1">All</Dropdown.Item>
            <Dropdown.Item eventKey="0">Challenges</Dropdown.Item>
            <Dropdown.Item eventKey="1">Learning materials</Dropdown.Item>
        </DropdownButton>
    )
}

export default ArticleDropdown

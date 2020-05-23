import React from 'react'
import { Dropdown, DropdownButton} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { 
    setCategory,
    clearCategory
} from './actions/articlesAction';

const ArticleDropdown = () => {
    const disPatch = useDispatch();
    const handleSelect=(e)=>{
        if (e != "-1") {
            console.log(e);
            disPatch(setCategory(e));
        } else {
            disPatch(clearCategory());
        }
    }

    return (
        <DropdownButton id="dropdown-basic-button" title="Select category" onSelect={handleSelect}>
            <Dropdown.Item eventKey="-1">All</Dropdown.Item>
            <Dropdown.Item eventKey="0">Challenges</Dropdown.Item>
            <Dropdown.Item eventKey="1">Learning materials</Dropdown.Item>
        </DropdownButton>
    )
}

export default ArticleDropdown

import React, {useEffect, Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectShowPlannerState,
} from './states/states';


const PlansPageContent = () => {
    const showPlanner = useSelector(selectShowPlannerState);
    return (
        <Fragment>
            <div className={`${showPlanner === true ? 'articles-hide-siderbar-head' : 'articles-hide-siderbar-head articles-hide-siderbar-head-remove-left'}`}>
                <div className="title">
                    Learning materials
                </div>
                <div className="subtitle">
                    Add the next free article for skills you want to learn to your plan
                </div>
            </div>
        </Fragment>
    )
}

export default PlansPageContent

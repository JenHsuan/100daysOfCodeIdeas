import React from 'react'
import { Modal, Button, Image } from 'react-bootstrap';
import '.././css/articleModal.css'
import { ArticleModalProp } from '../components/types'
import PropTypes from 'prop-types'

const ArticleModal = ({show, handleClose, article, handleOpen}: ArticleModalProp) => {
    const openArticle = () => {    
        handleOpen();
        window.open(article.url, '_blank');
        handleClose();
    }
    return (
        <Modal show = {show} onHide = {handleClose}>
            <Modal.Body>
                <Image className='article-modal-image' src={article.image} alt={article.title} title={article.title}/>
                <div className='article-modal-title'>{`${article.title}...`}</div>
                <div className='article-modal-subtitle'>{`${article.subtitle}...`}</div>
                <ul>
                    <li>
                        <div className="article-modal-item d-flex">Author: {article.name}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">Category: {Number(article.category) === 0 ? '100 days of code' : 'Learning materials'}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">DateTime: {article.time}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">Read time: {article.readtime}</div>
                    </li>
                </ul>
                    
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick = {handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick = {openArticle}>
                Open the article
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

ArticleModal.propTypes ={
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    article: PropTypes.func.isRequired,
    handleOpen: PropTypes.func.isRequired,
}

export default ArticleModal

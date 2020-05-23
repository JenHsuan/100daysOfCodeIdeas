import React from 'react'
import { Modal, Button, Image } from 'react-bootstrap';
import '.././css/articleModal.css'

const ArticleModal = ({show, handleClose, article}) => {
    const openArticle = () => {
        window.open(article.url, '_blank');
    }
    return (
        <Modal show = {show} onHide = {handleClose}>
            <Modal.Body>
                <Image className='article-modal-image' src={article.image}/>
                <div className='article-modal-title'>{`${article.title}...`}</div>
                <div className='article-modal-subtitle'>{`${article.subtitle}...`}</div>
                <ul>
                    <li>
                        <div className="article-modal-item d-flex">Author: {article.name}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">Category: {article.category === 0 ? '100 days of code' : 'Learning materials'}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">Date: {article.time}</div>
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
            <Button variant="primary" >
                Save to your learning plan
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ArticleModal

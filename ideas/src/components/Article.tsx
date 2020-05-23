import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Card} from 'react-bootstrap';
import ArticleModal from '../components/ArticleModal';
import '.././css/article.css'
import '.././css/card.css'

const Article = ({article}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    useEffect(()=> {
        console.log(article)
    }, [])

    return (
        <div >
            <Card className="article-card" border="white">
                <Card.Body className="article-card-body">
                    <img className="article-card-img" src={`${article.image}`} alt={article.title}/>
                    <div className="title">{article.title}</div>
                    <div className="date">{article.name}</div>
                    <div className="date">
                        <span className="date">{article.time}</span>
                        <span> . </span>
                        <span className="readtime">{article.readtime}</span>
                    </div>
                    <button className="article-btn" onClick = {handleShow}>Add to learning plan</button>
                </Card.Body>
            </Card>
            <ArticleModal show = {show} handleClose = {handleClose} article = {article} />
        </div>
    
    )
}

Article.propTypes = {
    article: PropTypes.object.isRequired
}

export default Article

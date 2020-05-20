import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import { Card, Button} from 'react-bootstrap';
import '.././css/article.css'

const Article = ({article}) => {
    useEffect(()=> {
        console.log(article)
    }, [])

    return (
        <div className="col-md-4 col-xs-4">
            <Card>
                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Img variant="top" src={`${article.image}`} />
                    <Card.Text>
                        <div>{article.subtitle}</div>
                        <div>Category: {article.category}</div>
                        <div>Author: {article.name}</div>
                        <div>Date: {article.time}</div>
                        <div>Read time: {article.readtime}</div>
                    </Card.Text>
                    <Button className="article-btn" variant="primary">Check</Button>
                </Card.Body>
            </Card>
        </div>
    
    )
}

Article.propTypes = {
    article: PropTypes.object.isRequired
}

export default Article

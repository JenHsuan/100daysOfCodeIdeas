import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import { Card, Button} from 'react-bootstrap';
import '.././css/article.css'
import '.././css/card.css'

const Article = ({article}) => {
    useEffect(()=> {
        console.log(article)
    }, [])

    return (
        <div className="col-md-6 col-xs-6">
            <Card className="article-card">
                <Card.Body>
                    <Card.Title className="title">{article.title}</Card.Title>
                    <Card.Img variant="top" src={`${article.image}`} />
                    <Card.Text className="date">{article.time}</Card.Text>
                    <Card.Text className="readtime">{article.readtime}</Card.Text>
                    <Button className="article-btn" variant="primary">View this topic</Button>
                </Card.Body>
            </Card>
        </div>
    
    )
}

Article.propTypes = {
    article: PropTypes.object.isRequired
}

export default Article

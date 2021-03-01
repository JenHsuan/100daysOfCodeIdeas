import React from 'react'
import { Modal, Button, Image } from 'react-bootstrap';
import '.././css/articleModal.css'
import { ArticleModalProp } from '../components/types'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';
import {
    dropdownItemsMap,
    authorLinkMap
} from './configruration';

const ArticleModal = ({show, handleClose, article, handleOpen}: ArticleModalProp) => {
    const { t, i18n } = useTranslation();
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
                        <div className="article-modal-item d-flex">
                            {t('ArticleModal.author')}:
                            <a href={authorLinkMap[article.name]}>{article.name}</a>
                        </div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">{t('ArticleModal.category')}: {t(dropdownItemsMap[article.category])}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">{t('ArticleModal.dateTime')}: {article.time.split("T")[0]}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">{t('ArticleModal.readTime')}: ${article.readtime.split(" ")[0]}${t('Article.readTime')}</div>
                    </li>
                </ul>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick = {handleClose}>
                {t('ArticleModal.close')}
            </Button>
            <Button variant="primary" onClick = {openArticle}>
                {t('ArticleModal.open')}
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

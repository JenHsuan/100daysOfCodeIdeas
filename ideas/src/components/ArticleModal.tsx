import React from 'react'
import { Modal, Button, Image } from 'react-bootstrap';
import '.././css/articleModal.css'
import { ArticleModalProp } from '../components/types'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

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
                        <div className="article-modal-item d-flex">{t('ArticleModal.author')}: {article.name}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">{t('ArticleModal.category')}: {Number(article.category) === 0 ? t("SideBar.dropdownForCategories.daysOfCode") : t("SideBar.dropdownForCategories.programming")}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">{t('ArticleModal.dateTime')}: {article.time}</div>
                    </li>
                    <li>
                        <div className="article-modal-item d-flex">{t('ArticleModal.readTime')}: {article.readtime}</div>
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

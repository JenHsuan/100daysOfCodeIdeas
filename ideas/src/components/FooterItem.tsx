import React from 'react'
import PropTypes from 'prop-types'

const FooterItem = ({externalLink, imageSrc, imageAltText}) => {
    return (
        <span className="btn-o">
            <a href={externalLink}>
                <img src={imageSrc} alt={imageAltText} title={imageAltText}/>
            </a>
        </span>
    )
}

FooterItem.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageAltText: PropTypes.string.isRequired,
    externalLink: PropTypes.string.isRequired
}

export default FooterItem

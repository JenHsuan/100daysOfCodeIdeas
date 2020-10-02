import React, {useEffect} from 'react'
import { register, unregister } from 'next-offline/runtime';
import Head from 'next/head';
import {CommandHeadProp } from '../components/types'
import PropTypes from 'prop-types'

const CommonHead = ({title, url, description, keywords, jsonLd}: CommandHeadProp) => {
    useEffect(()=> {
        
        register('/_next/static/service-worker.js', {scope: '/_next/static/'}) 

        return () => {
            unregister();  
        };
    }, [])

    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="twitter:card" content="summary"></meta>
            <meta name="twitter:site" content="@JenHsuanHsieh" />
            <meta name="twitter:creator" content="@JenHsuanHsieh" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url}/>
            <meta property="og:image" content="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/ideas-getstarted-cover.png"/>
            <meta property="og:description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content="Jen-Hsuan Hsieh (Sean Hsieh)"/>
            <link rel="dns-fetch" href="https://raw.githubusercontent.com/"/>
            <link rel="canonical" href={url}/>
            <link rel="manifest" href="/_next/static/manifest.webmanifest" />
            <meta name = "apple-mobile-web-app-capable" content="yes" />
            <meta name = "apple-mobile-web-app-status-bar-style" content="black" />
            <meta name = "apple-mobile-web-app-title" content={title} />
            <link rel="apple-touch-icon" href="/_next/static/logo-icon-144x144.png" />
            <link rel="apple-touch-startup-icon" href="/_next/static/logo-icon-144x144.png" />
            <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        </Head>
    )
}

CommonHead.propTypes ={
    title: PropTypes.string.isRequired, 
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    jsonLd: PropTypes.string.isRequired
}

export default CommonHead

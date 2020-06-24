import React from 'react'
import Head from 'next/head';

const CommonHead = ({title, url, description, keywords, jsonLd}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content={title} />
            <meta property="og:url" content={url}/>
            <meta property="og:image" content="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/ideas-getstarted-cover.png"/>
            <meta property="og:description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="author" content="Jen-Hsuan Hsieh (Sean Hsieh)"/>
            <link rel="dns-fetch" href="https://raw.githubusercontent.com/"/>
            <link rel="canonical" href={url}/>
            <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        </Head>
    )
}

export default CommonHead

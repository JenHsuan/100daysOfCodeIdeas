export const getJsonId = articles => {
    var JsonIdData = [];
    //console.log(articles.data)
    articles.data.forEach(article => {
        JsonIdData.push({ 
            "@context": "http://schema.org",  
            "@type": "Article", 
            "name": article.title,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": article.url
             },
            "author": {
                "@type": "Person",
                "name": article.name
            },
            "datePublished": article.time,
            "dateModified": article.time,
            "url": article.url,
            "image": article.image,
            "publisher": {
                "@type": "Organization",
                "name": article.name,
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png"
                }
            },
            "headline": article.title
        })
    });

    console.log(JsonIdData);
    return JsonIdData;
}
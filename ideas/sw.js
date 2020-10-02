if (typeof importScripts === 'function') {
    importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
      /* injection point for manifest files.  */
      //console.log(self.__WB_MANIFEST)
      var list = Array.from(self.__WB_MANIFEST)
      console.log(list)
      
      list.forEach((num, index) => {
        var tmpList = list[index].url.split('/')
        tmpList.shift();
        tmpList.shift();
        list[index].url = tmpList.join('/')
        return list[index]
      });
      
      console.log(list)
      workbox.precaching.precacheAndRoute(list);
      // control the uncontrolled client side
      workbox.core.clientsClaim();
      // transit the status from waiting to activate
      workbox.core.skipWaiting();
  
      workbox.precaching.cleanupOutdatedCaches();

      /* custom cache rules */

      //For images
      workbox.routing.registerRoute(
        new RegExp('\.(?:png|gif|jpg|jpeg|webp|svg)$'),
        new workbox.strategies.CacheFirst ({
            cacheName:'image-caches',
            plugins: [
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 20,
                    maxAgeSeconds: 12 * 60 * 60
                })
            ]
        }), 'GET' );
      
      //For JS/CSS
      /*
      Resources are requested from both the cache and the network in parallel. 
      The strategy will respond with the cached version if available, otherwise wait for the network response. 
      The cache is updated with the network response with each successful request
      */
      workbox.routing.registerRoute(
            new RegExp('\.(?:js|css)$'),
            new workbox.strategies.StaleWhileRevalidate({
                cacheName:'js-css-caches',
                plugins: [
                  new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                  }),
                  new workbox.expiration.ExpirationPlugin({
                    maxEntries: 20,
                    maxAgeSeconds: 12 * 60 * 60
                  })
                ]
              })
          )
          
      
      //For HTML
      workbox.routing.registerRoute(
        new RegExp('/'),
        new workbox.strategies.NetworkFirst ({
            cacheName:'html-caches',
            plugins: [
                new workbox.cacheableResponse.CacheableResponsePlugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.ExpirationPlugin({
                    maxEntries: 20,
                    maxAgeSeconds: 12 * 60 * 60
                })
            ]
        }), 'GET' );
        
        //Other resources
        workbox.routing.registerRoute(
            new RegExp('/_next/static/'),
            new workbox.strategies.StaleWhileRevalidate({
                cacheName: 'static-caches',  
            })
          );
       
      
    } else {
      // console.log('Workbox could not be loaded. No Offline support');
    }
  }
const fetch = require('node-fetch');

(async function() {
    let res = await fetch('https://daily-learning.herokuapp.com/robots.txt');
    console.log(res);
})();

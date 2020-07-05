import axios from 'axios';
import {getJsonId} from '../components/jsonLd';

export async function getStatics(){
    let jsonLdData = {};
    try {
        var res = await axios.get('https://daily-learning.herokuapp.com/api/articles');
        jsonLdData = JSON.stringify(getJsonId(res));
    } catch (err) {
        console.log(err);
    }

    return {
        props: {
            jsonLdData
        },
    }
  }
    
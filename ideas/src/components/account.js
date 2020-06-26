import axios from 'axios';

export const refreshToken = async (SetLogout) => {
    try {
        const res = await axios.get('api/renew-token/');
    } catch(error) {
        console.log(error)
        SetLogout();
        SetLogoutForLocalSorage();
    }
};

export const SetLogoutForLocalSorage = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('finishedArticles');
    localStorage.removeItem('bookmarks');
    localStorage.removeItem('token');
    localStorage.removeItem('provider');
}

export default class Auth {
    static isLoggedIn = !!localStorage.getItem('apiKey');
    static loggedApiKey = localStorage.getItem('apiKey');

    static signIn = (apiKey) => {
        localStorage.setItem('apiKey', apiKey);
        window.location.href = "/";
    };

    static logOut = () => {
        localStorage.removeItem('apiKey');
        window.location.href = "/signin";
    }
}

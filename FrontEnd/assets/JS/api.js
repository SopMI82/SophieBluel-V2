const generateHeader = () => {
    const token = window.sessionStorage.getItem("token");
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    };
}

const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    return await response.json();
}

/**
 * Recuperation des projets depuis l'API
 * @returns
 */
const getWorks = async () => {
    return fetchData('http://localhost:5678/api/works', { method: 'GET' });
};

/**
 * Récupération des categories depuis l'API
 *  * @returns
 */
const getCategories = async () => {
    return fetchData('http://localhost:5678/api/categories', { method: 'GET' });
}


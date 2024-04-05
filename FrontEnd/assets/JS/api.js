const generateHeader = () => {
    const token = window.localStorage.getItem("token");
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


/**
 * Supprimer un projet dans l'API //////////// a verifier après resolution du pb backend
 * @param {*} projectId
 */
const deleteWork = async (projectId) => {
    return fetchData(`http://localhost:5678/api/works/${projectId}`, { method: 'DELETE', headers: generateHeader() })
}

/**
 * Créer un projet dans l'API //////////// a verifier après resolution du pb backend
 */
const sendForm = async (addedProject) => {
    console.log("test");
    const options = { method: 'POST', headers: generateHeader(), body: addedProject }
    return fetchData(`http://localhost:5678/api/works`, options)
}
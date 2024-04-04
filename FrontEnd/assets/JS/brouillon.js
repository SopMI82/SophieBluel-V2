

/**
 * Fonction qui vérifie la présence du token dans le local storage au chargement de la page
 */
const showAdminMode = () => {

    const token = window.sessionStorage.getItem("token");
    const logBtn = document.querySelector('.logBtn');
    const adminBanner = document.querySelector('.adminBanner');
    const btnEdit = document.getElementById('edit');

    if (token !== null) {
        enableAdmin(logBtn, adminBanner, btnEdit);
    } else {
        disabledAdmin(logBtn, adminBanner, btnEdit);
    }
}

/**
 * Supprimer le token du local storage
 */
const eraseToken = () => {
    const logOut = document.querySelector('.logOut');
    logOut.addEventListener("click", () => {
        window.sessionStorage.removeItem("token");
        showAdminMode();
    });
}
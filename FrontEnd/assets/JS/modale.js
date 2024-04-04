/****** ELEMENT HTML *********/
const createModalContainer = () => `<div class="popup">
        <div class="popupContent">
        </div>
        </div>`

/**
 * Fonction qui génère le conteneur modale
 */
const displayModal = () => {
    main.insertAdjacentHTML("beforeend", createModalContainer())
    displayPageOne();
}

/**
 * Fonction qui supprime la modale au clic sur le background
 */

/**
 * Fonction qui supprime la modale au clic sur la croix
 */
const closeModal = () => {
    const closePopup = document.querySelector('.closePopup');
    const popup = document.querySelector('.popup');

    closePopup.addEventListener("click", () => {
        popup.remove()
    })
}

/**
 * fonction qui gère le retour à l'écran précédent
 */
const returnPrevious = (event) => {
    const previousScreen = document.querySelector('.previousScreen')

    previousScreen.addEventListener('click', () => {
        displayPageOne();
    })
}
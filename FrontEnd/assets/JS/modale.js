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
 * Fonction qui supprime la modale au clic sur la croix ou le background
 */
const closeModal = () => {
    const closePopup = document.querySelector('.closePopup');
    const popup = document.querySelector('.popup');

    closePopup.addEventListener("click", () => {
        popup.remove()
    })
/** je n'arrive pas à cibler juste le fond,
 * ça  supprime aussi au clic sur la modale
    popup.addEventListener("click", () => {
        popup.remove()
    })*/
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
/****** ELEMENT HTML *********/
const createModalContainer = () => `<div class="popup"">
        <div class="popupContent">
        </div>
        </div>`

/**
 * Fonction qui génère le conteneur modale
 */
const displayModal = () => {
    main.insertAdjacentHTML("beforeend", createModalContainer())
    displayPageOne();
    closeByBgd();
}

/**
 * Fonctions qui suppriment la modale au clic sur la croix ou le background
 */
const closeModal = () => {
    const closePopup = document.querySelector('.closePopup');
    const popup = document.querySelector('.popup');

    closePopup.addEventListener("click", () => {
        popup.remove()
    })
}

const closeByBgd = () => {
    const popup = document.querySelector('.popup');
    
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.remove()
        }
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
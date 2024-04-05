/****** ELEMENT HTML *********/
const modalPageOne = `<div class="popupNav">
            <button class="btnPopup closePopup">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="page-one">
            <h3>Galerie photo</h3>
            <div class="miniGallery"></div>
            <div class="lineDecor">
                <input type="submit" class="newProject" value="Ajouter une photo">
            </div>
        </div>`

//*********** FONCTIONS ************* */

const displayPageOne = () => {
    const popupContent = document.querySelector('.popupContent');

    popupContent.innerHTML = "";
    popupContent.insertAdjacentHTML("beforeend", modalPageOne)

    genererApercu();
    displayPageTwo();
    closeModal();
}


/**
 * Générer l'affichage de la gallerie dans la popup
 */
const genererApercu = () => {
    const miniGallery = document.querySelector(".miniGallery");
    const localWorks = JSON.parse(window.localStorage.getItem('works'));

    miniGallery.innerHTML = "";

    localWorks.forEach((item) => {
        miniGallery.insertAdjacentHTML('beforeend', `
            <figure>
                <img src="${item.imageUrl}">
                <button onClick="deleteWork(${item.id})" class="btnTrash" id="${item.id}"><i class="fa-regular fa-trash-can"></i></button>
            </figure>
        `)
    });
};


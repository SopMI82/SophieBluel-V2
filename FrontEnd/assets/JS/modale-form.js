const addedProject = new FormData();
/**
 * Contrôle le formulaire à chaque changement
 */
const validForm = () => {
    const explore = document.getElementById('explore');
    const inputProject = document.getElementById('projectName');
    const baliseSelect = document.getElementById('projectCategory');

    explore.addEventListener('change', () => {
        validImg()
    })

    inputProject.addEventListener('change', () => {
        validTitle()
    })

    baliseSelect.addEventListener('change', () => {
        validCat()
    })
}

/**
 * Fonction qui vérifie la présence et la conformité de l'image
 * @returns 
 */
const validImg = () => {
    try {
        let photo = document.getElementById('explore').value;
        removeError();
        if (!photo) {
            throw new Error('Merci de sélectionner une image.');
            return false;
        }
        if (photo.size > 4000000) {
            throw new Error('Merci de réduire la taille de votre image');
            return false
        }
        console.log(photo);
        addedProject.append('imageURL', photo);
        enableAdd()

        return true
    } catch (error) {
        displayError(error.message)
    }
}

/**
 * Fonction qui vérifie la présence et la longueur du titre
 * @returns 
 */
const validTitle = () => {
    try {
        let title = document.getElementById('projectName').value;
        removeError();
        if (!title) {
            throw new Error('Merci de donner un titre à votre projet');
            return false;
        }
        if (title.length < 3) {
            throw new Error('Le titre choisi est trop court');
            return false;
        }
        console.log(title);
        addedProject.append('title', title);
        enableAdd()
        return true;
    } catch (error) {
        displayError(error.message);
    }
}

/**
 * Fonction qui s'assure qu'une catégorie a été sélectionnée
 * @returns 
 */
const validCat = () => {
    try {
        let category = document.getElementById('projectCategory').value;
        console.log(category.typeOf);
        removeError();
        if (category === "") {
            throw new Error('Merci de choisir une catégorie pour votre projet');
            return false;
        }
        console.log(category);
        addedProject.append('categoryId', category);
        enableAdd()

        return true
    } catch (error) {
        displayError(error.message)
    }
}
/**
 * Fonction qui affiche un message d'erreur si besoin
 * @param {*} message 
 */
const displayError = (message) => {
    const errorBox = document.querySelector('.errorBox');
    errorBox.innerHTML = message
}

/**
 * Fonction qui vide "errorBox" à chaque nouvelle verification
 */
const removeError = () => {
    const errorBox = document.querySelector('.errorBox');
    errorBox.innerHTML = ""
}

/**
 * Fonction qui active le bouton de soumission du formulaire
 */
const enableAdd = () => {
    const btnAdd = document.getElementById('btnAdd');
    const category = addedProject.get('categoryId');
    const title = addedProject.get('title');
    const image = addedProject.get('imageURL');

    if (!!category & !!title & !!image) {
        btnAdd.removeAttribute('disabled')
    }
}

/**
 * Fonction qui implemente la gallerie avec le projet qui vient d'etre ajouté
 * @param {*} addedProject 
 */
const addNewFigure = (addedProject) => {
    const gallery = document.querySelector('.gallery');
    const miniGallery = document.querySelector(".miniGallery");
    gallery.insertAdjacentHTML('beforeend', `
            <figure>
                <img src="${addedProject.imageUrl}">
                <figcaption>${addedProject.title}</figcaption>
            </figure>
        `);
    miniGallery.insertAdjacentHTML('beforeend', `
            <figure>
                <img src="${addedProject.imageUrl}">
                <button onClick="deleteWork(${addedProject.id})" class="btnTrash" id="${addedProject.id}"><i class="fa-regular fa-trash-can"></i></button>
            </figure>
        `); // va peut etre poser pb car à ce moment là, miniGallery n'existe pas, en plus add new project ne contient pas d'id
}

/**
 * Fonction chargée de publier le nouveau projet
 */
const publishProject = () => {
    const btnAdd = document.querySelector('.btnAdd');

    btnAdd.addEventListener('click', async (event) => {
        event.preventDefault();
        console.log(addedProject);

        await sendForm(addedProject);
        if (Response.ok) {
            console.log("Projet créé avec succès");

            addNewFigure(addedProject)
            form.reset();
            // actualiser le works situé dans le local storage
        }
        else {
            console.log("Echec lors de la création du projet");
        }
    })
}

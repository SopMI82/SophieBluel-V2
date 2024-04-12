const addedProject = new FormData();

/**
 * Contrôle le formulaire à chaque changement
 */
const validForm = () => {
    const explore = document.getElementById('explore');
    const inputProject = document.getElementById('projectName');
    const baliseSelect = document.getElementById('projectCategory');

    console.log("ok1");
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
        const photo = document.getElementById('explore').files[0];
        console.log(photo);
        removeError();
        if (!photo) {
            throw new Error('Merci de sélectionner une image.');
            return false;
        }
        if (photo.size > 4000000) {
            throw new Error('Merci de réduire la taille de votre image');
            return false
        }
        addedProject.append('image', photo);

        enableAdd()

        return true
    } catch (error) {
        displayError(error.message)
    }
}

/**
 * Fonction qui vérifie la présence et la longueur du titre
 */
const validTitle = () => {
    try {
        const title = document.getElementById('projectName').value;
        removeError();
        if (!title) {
            throw new Error('Merci de donner un titre à votre projet');
            return false;
        }
        if (title.length < 3) {
            throw new Error('Le titre choisi est trop court');
            return false;
        }

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
        const category = document.getElementById('projectCategory').value;
        //console.log(category.typeOf);
        removeError();
        if (category === "") {
            throw new Error('Merci de choisir une catégorie pour votre projet');
            return false;
        }

        addedProject.append('category', category);
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
    const category = document.getElementById('projectCategory').value;
    const title = document.getElementById('projectName').value;
    const image = document.getElementById('explore').value;

    console.log(category, title, image);

    if (!!category & !!title & !!image) {
        btnAdd.removeAttribute('disabled')
    }
}

/**
 * Fonction qui implemente la gallerie avec le projet qui vient d'etre ajouté
 */
const addNewFigure = (addedProject) => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = "";
    gallery.insertAdjacentHTML('beforeend', `
            <figure>
                <img src="${addedProject.imageUrl}" alt="${addedProject.title}">
                <figcaption>${addedProject.title}</figcaption>
            </figure>
        `);

}

/**
 * Fonction chargée de publier le nouveau projet
 */
const publishProject = () => {
    const btnAdd = document.querySelector('.btnAdd');

    btnAdd.addEventListener('click', async (event) => {
        event.preventDefault();

        const form = document.getElementById('createProject');
        const response = await sendForm(addedProject);
        if (response.ok) {
            console.log("Projet créé avec succès");
            addNewFigure(addedProject);
            await genererProjects();
            form.reset();
            // actualiser le works situé dans le local storage
            // pour cela il faut d'abord isoler le bout de code qui permet de l'y ajouter
            // voir gallery.js fonction stockWorks
        }
        else {
            console.log("Echec lors de la création du projet");
        }
    })
}

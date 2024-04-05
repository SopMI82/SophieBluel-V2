const newProject = new FormData();
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
        newProject.append('imageURL', photo);
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
        newProject.append('title', title);
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
        newProject.append('categoryId', category);
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
    const btn = document.getElementById('addNewProject');
    const category = newProject.get('categoryId');
    const title = newProject.get('title');
    const image = newProject.get('imageURL');

    if (!!category & !!title & !!image) {
        btn.removeAttribute('disabled')
    }
}

/**
     * Fonction chargée de publier le nouveau projet
     */
const publishProject = () => {
    const addNewProject = document.querySelector('.addNewProject');

    addNewProject.addEventListener('click', async (event) => {
        event.preventDefault();
        console.log(newProject);

        await sendForm(newProject);
        if (Response.ok) {
            form.reset();
            //genererProjects()
        }
        else {

        }
    })
}
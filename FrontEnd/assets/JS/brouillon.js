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
        `)
}





/**
 * Evenement pour supprimer un projet
 */

const delProject = () => {
    const btnTrash = document.querySelector(".btnTrash");

    btnTrash.addEventListener("click", (item) => {
        deleteWork(item.id);
    });
}

/**************CONTACT********************************************* */

/**
 * Vérifie que le formulaire de contact est correctement rempli et construit le message
 */
const checkContact = () => {
    const contactName = document.getElementById('name');
    const email = document.getElementById('email');
    const messageBox = document.getElementById('message');

    console.log(contactName, email, messageBox);
    //  const emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+//.[a-z0-9._-]+")

    contactName.addEventListener('change', () => {
        validContactName();
    })
    email.addEventListener('change', () => {
        validContactEmail();
    })
    messageBox.addEventListener('change', () => {
        validContactMessage();
    })

    return Boolean;
};


/**
 * Verifier le nom :
 */
const validContactName = () => {
    const name = document.getElementById('name').value;
    const contactName = document.getElementById('name');

    try {
        if (name.length < 4) {
            contactName.style.border = "2px solid red";
            throw new Error('Nom absent ou trop court');
            return false;
        }
        else {
            removeError();
            contactName.style.border = "none";
            return true;
        }

    } catch (error) {
        displayError(error.message);
        return false

    }

}


/**
 * verifier l'email :
 */
const validContactEmail = () => {
    const mail = document.getElementById('email').value;
    const email = document.getElementById('email');

    try {
        if (!mail) {
            email.style.border = "2px solid red";
            throw new Error('Email absent');
            return false;
        }
        //   if (!emailRegExp.test(email)){
        //      email.style.border = "2px solid red";
        //       throw new Error('Email invalide');
        //   };

        else {
            removeError();
            email.style.border = "none";
            return true;
        }
    } catch (error) {
        displayError(error.message);
        return false

    }
}

/**
 * verifier le message !
 */
const validContactMessage = () => {
    const message = document.getElementById('message').value;
    const messageBox = document.getElementById('message');

    try {
        removeError();

        if (message.length < 15) {
            messageBox.style.border = "2px solid red";
            throw new Error('Message absent ou trop court');
            return false;
        }
        else {
            removeError();
            messageBox.style.border = "none";
            return true;
        }
    } catch (error) {
        displayError(error.message);
        return false
    }
}

/**
 * activer le bouton "envoyer":
 */
const enableSend = () => {
    const btnSend = document.getElementById('btnSend');
    const name = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(name, mail, message);
    console.log(!!checkContact);

    if (!!checkContact()) {
        btnSend.removeAttribute('disabled')
    }
}
enableSend()



const sendMessage = () => {
    const form = document.getElementById('formContact');

    form.addEventListener('submit', (event) => {

        const name = document.getElementById('name').value;
        const mail = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        event.preventDefault();
        location.href = `mailto:sophie.bluel@test.tld
        ?subject=${name} aimerait vous contacter
        &body= Merci de répondre sur cette adresse :%0D%0A${mail} %0D%0A %0D%0AContenu du message :%0D%0A${message}`;
        form.reset()
    });
}


checkContact();
sendMessage();






//controlForm();
//publishProject();


/**
 * Vérifie que le formulaire est correctement rempli et construit le projectToAdd
 */
const controlForm = () => {
    const explore = document.getElementById('explore');
    const inputProject = document.getElementById('projectName');
    const baliseSelect = document.getElementById('projectCategory');

    try {
        explore.addEventListener('change', () => {
            const photo = document.getElementById('explore').value;
            if (!photo) {
                throw new Error("Merci de sélectionner une image.");
            }
            projectToAdd.append("image", explore.files[0]);
            enableAdd()
        })

        inputProject.addEventListener('change', () => {
            const projectName = document.getElementById('projectName').value;
            if (!projectName) {
                throw new Error("Merci de renseigner le nom du projet.");
            }
            projectToAdd.append("title", projectName);
            enableAdd()
        })

        baliseSelect.addEventListener('change', () => {
            const category = document.getElementById('projectCategory').value;
            if (!category) {
                throw new Error("Merci de sélectionner une catégorie.");
            }
            projectToAdd.append("category", category);
            enableAdd()
        })

    } catch (error) {
        console.error(error)
    }
    /**
     * Fonction qui active le bouton de soumission du formulaire
     */
    const enableAdd = () => {
        const btn = document.getElementById('btnAdd');
        const category = projectToAdd.get('category');
        const title = projectToAdd.get('title');
        const image = projectToAdd.get('image');

        if (!!category & !!title & !!image) {
            btn.removeAttribute('disabled')
        }
    }
    const projectToAdd = new FormData(); // tout seul au milieu de nulle part, normal ?
    console.log(projectToAdd);


}

/**
     * Fonction chargée de publier le nouveau projet
     */
const publishProject = () => {
    const btnAdd = document.querySelector('.btnAdd');

    btnAdd.addEventListener('click', async (event) => {
        event.preventDefault();

        await sendForm();
        if (Response.ok) {
            form.reset();
            //genererProjects()
        }
        else {

        }
    })
}



const form = document.getElementById('.createProject');
const addedProject = new FormData();
addedProject.append('category', categoryVal);
addedProject.append('title', titleVal);
addedProject.append('imageUrl', imageFile.file[0]);
console.log(addedProject);

const popup = document.querySelector('.popup');



if (response.ok) {
    console.log("Projet créé avec succès");
    gallery.innerHTML = "";
    await genererProjects();
    popup.remove()
    window.alert("Projet ajouté à la galerie");
}
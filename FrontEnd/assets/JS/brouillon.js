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
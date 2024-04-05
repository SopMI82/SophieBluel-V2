
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
        const btn = document.getElementById('addNewProject');
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
    const addNewProject = document.querySelector('.addNewProject');

    addNewProject.addEventListener('click', async (event) => {
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




console.log("helloWorld");

/****** ELEMENT HTML *********/
const modalPageTwo = `<div class="popupNav">
            <button class="btnPopup closePopup">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <button class=" btnPopup previousScreen">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
        </div>
        <div class="page-two">
			<h3>Ajout photo</h3>
			<form action="" class="createProject">
				<div class="selectPhoto">
					<label for="explore"><i class="fa-regular fa-image"></i></label>
					<input id="explore" type="file" accept=".png,.jpeg,.jpg">
                    <div id="btnAddPhoto">+ Ajouter photo</div>
					<p>jpg, png : 4mo max</p>
                    <img class="prevNewProject" src="#">
				</div>
				<label for="title">Titre</label>
				<input type="text" name="title" id="projectName">
				<label for="projectCategory">Catégorie :</label>
				<select name="category" id="projectCategory">
                    <option value="">Choisir une catégorie</option> 
                </select>
				<div class="lineDecor">
                    <input class="addNewProject" id="addNewProject" type="submit" value="Valider" disabled>
		        </div>
            </form>
		</div>`

//*********** FONCTION PRINCIPALE **************/

/**
 * Fonction principale qui crée la deuxième page de la modale
 */
const displayPageTwo = () => {
    const popupContent = document.querySelector('.popupContent');
    const newProject = document.querySelector('.newProject')

    newProject.addEventListener("click", (event) => {
        event.preventDefault();
        popupContent.innerHTML = "";
        popupContent.insertAdjacentHTML("beforeend", modalPageTwo)
        showPreview();
        generateOptions();
        controlForm();
        publishProject();
        closeModal();
        returnPrevious()
    })
}

//*********** FONCTIONS SECONDAIRES **************/

/**
 * Fonction qui affiche l'aperçu de l'image sélectionnée
 */
const showPreview = () => {
    const explore = document.getElementById('explore');
    const prevNewProject = document.querySelector('.prevNewProject');

    explore.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            prevNewProject.src = URL.createObjectURL(event.target.files[0]);
            prevNewProject.style.display = "block";
        }
    })
}

/**
 * Fonction qui créée les options du formulaire de manière dynamique
 */
const generateOptions = () => {
    const catList = JSON.parse(window.localStorage.getItem('categories'));

    catList.forEach(item => {
        const baliseSelect = document.getElementById('projectCategory');
        const catOption = `<option value="${item.id}">${item.name}</option>`;
        baliseSelect.insertAdjacentHTML('beforeend', catOption);
    })
}

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
            console.log(projectToAdd);
            form.reset();
            //genererProjects()
        }
    })
}




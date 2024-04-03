const filters = document.getElementById('filters');

/**
 * Fonction qui créée les boutons'categories' de manière dynamique
 */
const generateBtn = async () => {
    const categories = await getCategories();

    categories.forEach(category => {
        const btn = `<button id="${category.id}"> ${category.name}</button>`
        filters.insertAdjacentHTML('beforeend', btn)
    })
}

/**
 * Fonction qui gère les filtres
 */
const manageCategories = async () => {

    generateBtn()

    
    }

manageCategories()

const sortWorks = () => {
    const localWorks = window.localStorage.getItem('works')

    console.log(localWorks);

}

sortWorks()

/*
        btnEvent.addEventListener('click', (event) => {
            works = works.filter(work => work.categoryId === event.target.id)
            gallery.innerHTML = "";
            createFigures(works);
            // le tri ne se fait plus.
            //Parce que quand j'appelle la fonction generer project
            //elle fait un appel à l'api et écrase la demande localWorks ?
        })*/
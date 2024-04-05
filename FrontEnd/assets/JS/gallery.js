const gallery = document.querySelector('.gallery');

const createFigures = (works) => {
    works.forEach((work) => {
        gallery.insertAdjacentHTML('beforeend', `
            <figure>
                <img src="${work.imageUrl}">
                <figcaption>${work.title}</figcaption>
            </figure>
        `)
    });
}

const genererProjects = async () => {
    const works = await getWorks();
    const worksList = JSON.stringify(works);
    window.localStorage.setItem('works', worksList);
    createFigures(works);
}

genererProjects()

/**
 * je cherche à isoler le fait de stocker les works dans le localStorage :
 * pour pouvoir reutiliser ce bout de code 
 * pour les fonctions d'ajout et de supression de projet
 * 
 * const stockWorks = async() => {
    const works = await getWorks();
    const worksList = JSON.stringify(works);
    window.localStorage.setItem('works', worksList);
}

const genererProjects = async () => {
    await stockWorks(works)
    createFigures(works);
}


 */
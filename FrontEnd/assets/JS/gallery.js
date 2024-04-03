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
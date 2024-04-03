console.log("hello world");

const gallery = document.querySelector('.gallery');


const genererProjects = async () => {

    const works = await getWorks();

console.log(works);

    works.forEach(work => {
        gallery.insertAdjacentHTML('beforeend', `
            <figure>
                <img src="${work.imageUrl}">
                <figcaption>${work.title}</figcaption>
            </figure>
        `)
    });
}

genererProjects()
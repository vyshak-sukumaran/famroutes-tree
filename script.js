
// zoom and pan

const tree = document.querySelector(".tree-container")
panzoom(tree)

// scroll to me

const me = document.querySelector('#me')
window.onload = () => {
    me && me.scrollIntoView()
}
// data
const apiUrl = `/assets/data.json`;

const getData = async (url) => {
    const response = await fetch(url)
    if (response.ok) {
        let data = await response.json()
        showData(data)
    } else {
        console.error("something went wrong")
    }
}

getData(apiUrl)

const singleCard = (image, name, relation) => {
    return `
        <div class="tree-card">
            <div class="tree-card-line-top"></div>
            <div class="card-image">
                <img src="${image}" alt="user">
                <div class="image-caption">
                    <div class="image-caption-button">
                        <a href="#" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </a>
                    </div>
                    <div class="image-caption-text">
                        <span>${name ? name : "Name"}</span>
                        <span>${relation ? relation : "Relation"}</span>
                    </div>
                </div>
            </div>
        </div>`
}

let dataEg = [
    { id: 1, pids: [2], name: "Emilly Aleksander Stevens", gender: "female", image: "/assets/rebeca.jpeg" },
    { id: 2, pids: [1], name: "Eduard Artur Stevens", gender: "male", image: "/assets/peter.jpeg" },
    { id: 3, pids: [6], mid: 1, fid: 2, name: "Peter Eduard Stevens", gender: "male", image: "/assets/peter.jpeg" },
    { id: 6, pids: [3], name: "Anna Stevens", gender: "female", image: "/assets/rebeca.jpeg" },
    { id: 4, pids: [5], mid: 1, fid: 2, name: "Ivan Eduard Stevens", gender: "male", image: "/assets/peter.jpeg" },
    { id: 5, pids: [4], name: "Martina Stevens", gender: "female", image: "/assets/rebeca.jpeg" }
]


const showData = (data) => {
    let card = `
        <div class="tree-card">
            <div class="tree-card-line-top"></div>
            <div class="card-image">
                <img src="/assets/peter.jpeg" alt="user">
                <div class="image-caption">
                    <div class="image-caption-button">
                        <a href="#" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </a>
                    </div>
                    <div class="image-caption-text">
                        <span>Peter</span>
                        <span>Me</span>
                    </div>
                </div>
            </div>
        </div>`

    let treeContainer = document.querySelector(".tree-container")

    let demo = data.map((val) => {
        return `
            <li>
            
            </li>
        `
    })
}




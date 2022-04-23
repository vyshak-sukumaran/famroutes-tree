
// zoom and pan

const tree = document.querySelector(".tree-container")
panzoom(tree)

// scroll to me

const me = document.querySelector('#me')
document.onload(
    me.scrollIntoView()
)

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

const showData = (data) => {
    console.log(data)
    let treeContainer = document.querySelector(".tree-container") 
}
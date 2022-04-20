// $(function () {
//     $('.genealogy-tree ul').hide();
//     $('.genealogy-tree>ul').show();
//     $('.genealogy-tree ul.active').show();
//     $('.genealogy-tree li').on('click', function (e) {
//         var children = $(this).find('> ul');
//         if (children.is(":visible")) children.hide('fast').removeClass('active');
//         else children.show('fast').addClass('active');
//         e.stopPropagation();
//     });
// });

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
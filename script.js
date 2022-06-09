
// zoom and pan

const elem = document.querySelector(".tree-container")
const panzoom = Panzoom(elem, {
  maxScale: 6
})

document.querySelector(".tree").addEventListener("wheel", panzoom.zoomWithWheel);
//   document.querySelector(".zoom-area img").addEventListener("click", function() {
//     alert("clicked!");
//   });

// scroll to me

const me = document.querySelector('#me')
window.onload = () => {
    me && me.scrollIntoView()
}






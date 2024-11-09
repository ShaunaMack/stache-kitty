// locate the moustache in the DOM by the id
const moustache = document.getElementById("stache-pic");

function addStache(event) {
  const x = event.pageX; // Get the horizontal coordinate
  const y = event.pageY; // Get the vertical coordinate

  // log the position (x and y coordinates) of the mouse cursor
  console.log(`x coord ${x} y coord ${y}`);
}

// Add an event listener to the correct DOM node here - using your addStache function, and firing on click.
document.onclick = addStache;

// now lets have even more fun...

// lets add a caption when we click the cat picture
document.getElementById("cat-pic").addEventListener("click", function () {
  // define the caption variable using getElementById
  // if there is no element with the id caption, make one with createElement (make sure you give it its id)
  // use appendChild to add it to the bottom of the page
  // set the caption to some words using innerHTML once caption is created
});

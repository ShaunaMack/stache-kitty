// locate the moustache in the DOM by the id
const moustache = document.getElementById("stache-pic");

function addStache(event) {
  const x = event.pageX; // Get the horizontal coordinate
  const y = event.pageY; // Get the vertical coordinate

  // log the position (x and y coordinates) of the mouse cursor (& now stache)
  console.log(`x coord ${x} y coord ${y}`);

  moustache.style.top = `${y - 50}px`;
  moustache.style.left = `${x - 100}px`;
}

// Add an event listener to the correct DOM node here - using your addStache function, and firing on click.
document.onclick = addStache;
moustache.style.transform = "rotate(-10deg)";

// now lets have even more fun...

// lets add a caption when we click the cat picture
document.getElementById("cat-pic").addEventListener("click", function () {
  // define the caption variable using getElementById
  let caption = document.getElementById("caption");
  // if there is no element with the id caption, make one with createElement (make sure you give it its id)
  // use appendChild to add it to the bottom of the page
  if (!caption) {
    caption = document.createElement("p");
    caption.id = "caption";
    document.body.appendChild(caption);
  }

  // set the caption to some words using innerHTML once caption is created
  caption.innerHTML = "I need a moustache!";
  caption.style.fontSize = "100px";
  caption.style.color = "pink";
});

// extra Shauna was having way too much fun silly bits

document.getElementById("cat-pic").addEventListener("click", function (event) {
  let thoughtBubble = document.createElement("div");
  thoughtBubble.innerHTML = "I need a moustache!";
  thoughtBubble.style.position = "absolute";
  thoughtBubble.style.top = `${event.pageY - 50}px`; // Slightly above the cat
  thoughtBubble.style.left = `${event.pageX + 100}px`; // Slightly to the right
  thoughtBubble.style.backgroundColor = "white";
  thoughtBubble.style.padding = "10px";
  thoughtBubble.style.borderRadius = "5px";
  thoughtBubble.style.border = "1px solid black";
  document.body.appendChild(thoughtBubble);
});

let controlPanel = document.createElement("div");
controlPanel.innerHTML = `
  <button id="grow">Grow Moustache</button>
  <button id="shrink">Shrink Moustache</button>
  <button id="rotate">Rotate Moustache</button>
`;
document.body.appendChild(controlPanel);

document.getElementById("grow").addEventListener("click", function () {
  let moustache = document.getElementById("stache-pic");
  moustache.style.transform = "scale(3.5)"; // Grow moustache
});

document.getElementById("shrink").addEventListener("click", function () {
  let moustache = document.getElementById("stache-pic");
  moustache.style.transform = "scale(0.5)"; // Shrink moustache
});

document.getElementById("rotate").addEventListener("click", function () {
  let moustache = document.getElementById("stache-pic");
  moustache.style.transform = "rotate(180deg)"; // Rotate moustache
});

let title = document.getElementById("title");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  title.style.left = value * 0.75 + "px";
});

console.log("dhanyabad Purna Sir!");

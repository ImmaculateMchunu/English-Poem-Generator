function generatePoem(event) {
    event.preventDefault();

    alert("Generating Poem");

    let poemElement= document.querySelector ("poem");

    new Typewriter("poem", {
  strings: ["Pretty women wonder where my secret lies. "],
  autoStart: true,
  delay: 1,
  cursor: "",
});
}


let poemFormElement = document.querySelector("poem-genegator-form")
poemFormElement.addEventListener("submit", generatePoem);
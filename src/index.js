 
function displayPoem(responce) {
 
    console.log("poem generated");
 new Typewriter("poem", {
  strings: responce.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}
function generatePoem(event) {
    event.preventDefault();
}

    let instructionsInput = document.querySelector("user-instructions");
    let apiKey = "b1a0o1ft9108d6b76f71c2fa34c10e16 ";
    let prompt = 'user instructions:generate an english poem about women ${instructionsInput.value}';
    let context = "you are an english poem writer and love to write poems. your mission is to generate a 4 line in basic HTML and seperate each line  with a <br />. make sure to follow the user instructions.Do not include a title to the poem. sign the poem with 'SheCodes AI' inside a <strong></strong> element at the end of the poem and NOT at the begining.";
    let apiURL = 'https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}';

    console.log("generating poem");
    console.log('prompt: ${prompt}');
    console.log('context: ${context}');

    axios.get(apiURL).then(displayPoem);

    alert("Generating Poem");

    let poemElement= document.querySelector ("poem");

let poemFormElement = document.querySelector("poem-genegator-form")
poemFormElement.addEventListener("submit", generatePoem);
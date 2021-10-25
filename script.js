const userInput = document.querySelector("#user-input");
const formButton = document.getElementById("form-button");
const result = document.querySelector(".result");

function handleClick() {
  const api = `https://api.funtranslations.com/translate/piglatin?text=${userInput.value}`;

  fetch(api)
    .then((res) => res.json())
    .then((json) => (result.innerHTML = json.contents.translated))
    .catch((err) => {
      alert("Error Occured, try again later.");
    });
}

formButton.addEventListener("click", handleClick);

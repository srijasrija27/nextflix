let h1Element = document.createElement("h1");
h1Element.textContent = "web Techologies";

document.body.appendChild(h1Element);
let containerElement = document.getElementById("container");
containerElement.appendChild(h1Element);

let buttonElement = document.createElement("button");
buttonElement.textContent = "change heading";
containerElement.appendChild(buttonElement);

let removeBtnElement = document.createElement("button");
removeBtnElement.textContent = "Remove Styles";
containerElement.appendChild(removeElement);
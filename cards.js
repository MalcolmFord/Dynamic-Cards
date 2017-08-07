let createButton = document.getElementById("submit");
createButton.addEventListener("click", mkCard);
let textHolder = document.getElementById("textHolder");


function mkCard(){
  var array = [];
  let userText = document.getElementById("userInput")
  array.push(userText.value);
// this simply places the users text into an array (for possible later use)
  let newCard = document.createElement("div");
  newCard.innerHTML=`<p>${userText.value}</p>`;
  textHolder.append(newCard);
  console.log(userText.value);

  var deleteButton = document.createElement("button");
  let text = document.createTextNode("Delete");
  deleteButton.append(text);
  newCard.append(deleteButton);
  deleteButton.addEventListener("click", funn);
}
// This function creates the card and the delete button when the submit button is clicked



function funn(){
  let currentCard= this.parentNode;
  textHolder.removeChild(currentCard);
  console.log("The button has been clicked");
}


// let buttonDelete = document.querySelector(".deleteButton");
//                 console.log("buttonDelete", buttonDelete);
//                 buttonDelete.addEventListener("click", function() {
//                     console.log("this", this);
//                     let deleteMessage = document.getElementsByClassName("messageToDelete");
//                     console.log("messagetodelete", deleteMessage)
//                     this.parentElement.removeChild(deleteMessage[0]);
//
//                     console.log(deleteMessage[0]);
//                     this.parentElement.removeChild(this);
//
//                 });

// function deleteCardAction(){
//   console.log(deleteButton);
//
//   }
// }

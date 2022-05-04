function myfunction() {
    var x = prompt("How can I help?");
  

  if (x ==="dvlsovs") {
      alert("Thank you for imfroming us, we will contact with you very soon!");
  }

  else if (x === "") {
    alert("Please, answer the question");
  }

  else {
      alert("Thank you for imfroming us, we will contact with you very soon!");
  }

}

function myfunction2() {

    alert("User created, welcome");
}

function ageInDays() {
    var birthyear = prompt("What year you were born?");
    var ageInDays = (2021 - birthyear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDays + " days old");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("result").appendChild(h1);
}

function reset() {
    document.getElementById("ageInDays").remove();
}

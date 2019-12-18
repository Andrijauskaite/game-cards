document.addEventListener("DOMContentLoaded", function(event) {
  for (
    var i = 0;
    i < document.getElementsByClassName("game-card").length;
    i++
  ) {
    document
      .getElementsByClassName("game-card")
      [i].addEventListener("click", function() {
        if (this.getAttribute("already_pressed") != "true") {
          for (
            var p = 0;
            p < document.getElementsByClassName("game-card").length;
            p++
          ) {
            document
              .getElementsByClassName("game-card")
              [p].setAttribute("already_pressed", "true");
          }
          showResult(this);
        }
      });
  }

  document.querySelector(".custom-select-wrapper") &&
    document
      .querySelector(".custom-select-wrapper")
      .addEventListener("click", function() {
        this.querySelector(".custom-select").classList.toggle("open");
      });

  window.addEventListener("click", function(e) {
    const select = document.querySelector(".custom-select");
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  });

  for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener("click", function() {
      if (!this.classList.contains("selected")) {
        this.parentNode
          .querySelector(".custom-option.selected")
          .classList.remove("selected");
        this.classList.add("selected");
        this.closest(".custom-select").querySelector(
          ".custom-select__trigger span"
        ).textContent = this.textContent;
      }
    });
  }
});

function OpenMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function showCounter(querySelector, currentValue, maxValue) {
  querySelector.innerHTML = currentValue + "%";

  currentValue++;
  if (currentValue <= maxValue) {
    timeout =
      2000 / maxValue + ((currentValue / maxValue) * 15 * maxValue) / 100;

    setTimeout(function() {
      showCounter(querySelector, currentValue, maxValue);
    }, timeout);
  }
}

function showResult(gameCardElement) {
  resultElements = document.querySelectorAll("[result]");
  for (let i = 0; i < resultElements.length; i++) {
    showCounter(resultElements[i], 0, resultElements[i].getAttribute("result"));
  }

  var elements = document.getElementsByClassName("result");
  for (let index = 0; index < elements.length; index++) {
    elements[index].classList.toggle("result-active");
  }

  var elements = document.getElementsByClassName("card-name");
  for (let index = 0; index < elements.length; index++) {
    elements[index].classList.toggle("slide-name");
  }

  var elements = document.getElementsByClassName("card-name2");
  for (let index = 0; index < elements.length; index++) {
    elements[index].classList.toggle("slide-name2");
  }
  
  var elements = document.getElementsByClassName("count-background");
  for (let index = 0; index < elements.length; index++) {
    elements[index].classList.toggle("slide-background");
  }
}

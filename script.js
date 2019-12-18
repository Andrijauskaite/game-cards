document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open');
  })

  window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });

  for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
        this.classList.add('selected');
        this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      }
    })
  }
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// showCounter(document.querySelector('.game-card2-nopicture h3'), 0, 60)
function showCounter(querySelector, currentValue, maxValue) {
  querySelector.innerHTML = currentValue;

  currentValue++;
  if (currentValue <= maxValue) {
    timeout = currentValue * 0.8;
    setTimeout(function () {
      showCounter(querySelector, currentValue, maxValue);
    }, timeout);
  }
}

// show counter
function addClassCard1() {
  var v = document.getElementById("active-h2");
  v.classList.toggle("active-h2");

  var v = document.getElementById("active-h4");
  v.classList.toggle("active-h4");

  var v = document.getElementById("active2-h2");
  v.classList.toggle("active-h2");

  var v = document.getElementById("active2-h4");
  v.classList.toggle("active-h4");

  var v = document.getElementById("active-count1");
  v.classList.toggle("active-count");

  var v = document.getElementById("active-count2");
  v.classList.toggle("active-count");

  var v = document.getElementById("active-h3");
  v.classList.toggle("active-card-h3");

  var v = document.getElementById("active2-h3");
  v.classList.toggle("active-card-h3");
}

function addClassCard2() {
  var v = document.getElementById("active-h2");
  v.classList.toggle("active-h2");

  var v = document.getElementById("active-h4");
  v.classList.toggle("active-h4");
  var v = document.getElementById("active2-h2");
  v.classList.toggle("active-h2");

  var v = document.getElementById("active2-h4");
  v.classList.toggle("active-h4");

  var v = document.getElementById("active-count1");
  v.classList.toggle("active-count");

  var v = document.getElementById("active-count2");
  v.classList.toggle("active-count");

  var v = document.getElementById("active-h3");
  v.classList.toggle("active-card-h3");

  var v = document.getElementById("active2-h3");
  v.classList.toggle("active-card-h3");
}

//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const pagembtn = document.querySelector("#pagembtn");
var allpages=document.querySelectorAll(".page");

const foodbtn = document.querySelector("#genfood");

//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}

function show(pgno){ //function to show selected page no
hideall();

//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
page4btn.addEventListener("click", function () {
show(4);
});
pagembtn.addEventListener("click", function () {
show(5);
});

show(5);

/**************************card**************************/

const cards = document.querySelectorAll(".card-state");
let flippedCards = [];
let lockBoard = false;
let pairdone = 0;

const cardstart = document.querySelector("#cardbutton");
let gameInPlay = false;

let timer = 0;
let timerInterval = null;

let gameStarted = false;

cardstart.addEventListener("click", function () {
  startGame()
  document.getElementById("cardbutton").textContent = "Restart";
  setTimeout(function ()
  {
    shuffleCards()
  }, 1000);
});

cards.forEach((card) => {
  card.addEventListener("click", function () {
    if (lockBoard || card.classList.contains("matched") || flippedCards.includes(card) || !gameInPlay) return;

    card.classList.add("is-flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  });
});

function checkMatch()
{
  const [card1, card2] = flippedCards;
  const type1 = card1.classList[1];
  const type2 = card2.classList[1];

  if (type1 === type2)
    {
    card1.classList.add("matched");
    card2.classList.add("matched");
    flippedCards = [];
    pairdone = pairdone + 1;
    checkWin();
  } 
  else
  {
    lockBoard = true;
    setTimeout(function ()
    {
      card1.classList.remove("is-flipped");
      card2.classList.remove("is-flipped");
      flippedCards = [];
      lockBoard = false;
    }, 
    1000);
  }
}
window.addEventListener("DOMContentLoaded", () => {
    cards.forEach((card) => {
    card.classList.add("is-flipped");
  });
  shuffleCards();
});

function checkWin()
{
  if (pairdone >= 6)
    {
    gameInPlay = false;
    stopTimer();
    setTimeout(function ()
    {
      alert("You finished the game in " + timer + " seconds!!!");
    }, 1000);
  }
}

function startTimer()
{
  clearInterval(timerInterval);
  timer = 0;
  timerInterval = setInterval(() => {
    timer++;
    document.getElementById("timerDisplay").textContent = timer + "s";
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function startGame()
{
  gameInPlay = true;
  flippedCards = [];
  lockBoard = false;
  pairdone = 0;
  startTimer();

  cards.forEach((card) => {
    card.classList.remove("is-flipped");
  });
}

function shuffleCards()
{
  const cards = document.querySelectorAll(".card-state");

  const maxColumns = 6;
  const maxRows = 2;
  const usedPositions = new Set();

  cards.forEach((card) => {
    let row, col, key;

    do 
    {
      col = Math.floor(Math.random() * maxColumns) + 1;
      row = Math.floor(Math.random() * maxRows) + 1;
      key = `${row}-${col}`;
    } while (usedPositions.has(key));

    usedPositions.add(key);

    card.style.gridRow = row;
    card.style.gridColumn = col;
  });
}

/**************************card**************************/




  const range = document.getElementById("myRange");

  function getEmojiDataURL(emoji) {
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    ctx.font = "28px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(emoji, 16, 16);
    return canvas.toDataURL();
  }

  function updateThumb(value) {
    let emoji = "😛";
    if (value <= 33) emoji = "😊";
    else if (value <= 66) emoji = "😛";
    else emoji = "🥵";

    const dataURL = getEmojiDataURL(emoji);

    range.style.setProperty("--thumb-image", `url(${dataURL})`);

    const styleEl = document.getElementById("dynamic-style") || document.createElement("style");
    styleEl.id = "dynamic-style";
    styleEl.innerHTML = `
      input[type=range]::-webkit-slider-thumb {
        background-image: url(${dataURL});
      }
      input[type=range]::-moz-range-thumb {
        background-image: url(${dataURL});
      }
    `;
    document.head.appendChild(styleEl);
  }

  // Initial setup
  updateThumb(range.value);
  range.addEventListener("input", (e) => updateThumb(e.target.value));
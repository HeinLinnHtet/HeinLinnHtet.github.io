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

onepage.classList.remove("on-display");
}
}

function show(pgno) {
  hideall();

  let onepage = document.querySelector("#page" + pgno);
  onepage.style.display = "block";

  // clear previous nav highlights
  document.querySelectorAll(".navtext").forEach(btn => {
    btn.classList.remove("on-display");
  });

  // highlight current nav
  const activeBtn = document.querySelector("#page" + pgno + "btn");
  if (activeBtn) activeBtn.classList.add("on-display");
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
let maxColumns = 0;
let maxRows = 0;

cardstart.addEventListener("click", function ()
{
  startGame()
  document.getElementById("cardbutton").textContent = "Restart";
  setTimeout(function ()
  {
    shuffleCards()
  }, 1000);
});

cards.forEach(function(card)
{
  card.addEventListener("click", function()
  {
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
function presentcard()
{
  if (window.innerWidth < 1000)
  {
    maxColumns = 3;
    maxRows = 4;
  }
  else
  {
    maxColumns = 6;
    maxRows = 2
  }

  const cards = document.querySelectorAll(".card-state");
  for (let i = 0; i < cards.length; i++)
  {
    const row = Math.floor(i / maxColumns) + 1;
    const col = (i % maxColumns) + 1;

    cards[i].style.gridRow = row;
    cards[i].style.gridColumn = col;

    if(gameInPlay == false)
      cards[i].classList.add("is-flipped");
  }
};

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
  timerInterval = setInterval(function()
  {
    timer++;
    document.getElementById("timerDisplay").textContent = timer + "s";
  }, 1000);
}

function stopTimer()
{
  clearInterval(timerInterval);
}

function startGame()
{
  gameInPlay = true;
  flippedCards = [];
  lockBoard = false;
  pairdone = 0;
  startTimer();

  cards.forEach(function(card)
  {
    card.classList.remove("is-flipped");
    card.classList.remove("matched");
  });
}

function shuffleCards()
{
  const cards = document.querySelectorAll(".card-state");

  let usedPositions = new Set();

  cards.forEach(function(card)
  {
    let row, col, key ="";

    do
    {
      col = Math.floor(Math.random() * maxColumns) + 1;
      row = Math.floor(Math.random() * maxRows) + 1;
      key = row + "-" + col;
    }
    while (usedPositions.has(key));

    usedPositions.add(key);

    card.style.gridRow = row;
    card.style.gridColumn = col;
  });
}


window.addEventListener("DOMContentLoaded", presentcard);
window.addEventListener("resize", presentcard);

/**************************card**************************/
/**************************food**************************/
const range = document.getElementById("spicyrange");
const foodb = document.querySelector("#foodbutton");
var allfood =document.querySelectorAll(".fooddetails");

foodb.addEventListener("click", function ()
{
showfood();
});

function showfood()
{
  hideallfood();

  const value = parseInt(range.value);
  let pageId = "";

  if (value <= 33)
  {
    pageId = "kyayoh";
  } else if (value <= 66)
  {
    pageId = "mohinga";
  } else
  {
    pageId = "montdi";
  }

  const onefood = document.getElementById(pageId);
  if (onefood)
  {
    onefood.style.display = "grid";
  }
}

function hideallfood()
{
  for(let onefood of allfood)
  {
    onefood.style.display="none";
  }
}

hideallfood();
/**************************food**************************/

/**************************language**************************/
var wordmaingame =document.querySelector(".wordgamemain");
var wordstartbuttondis =document.querySelector(".wordgamestart");
const wordstartbutton = document.querySelector("#wordstart");
const wordsubmitbutton = document.querySelector("#wordsubmit");
var diabuttonall = document.querySelectorAll(".diabutton");

const dia1btn=document.querySelector("#dia1");
const dia2btn=document.querySelector("#dia2");
const dia3btn=document.querySelector("#dia3");
const dia4btn=document.querySelector("#dia4");
const dia5btn=document.querySelector("#dia5");
const dia6btn=document.querySelector("#dia6");
const dia7btn=document.querySelector("#dia7");
const dia8btn=document.querySelector("#dia8");

let diaset1 = "";
let diaset2 = "";
let diaset3 = "";

let basechar = "က";
let chosendia1 = "";
let chosendia2 = "";
let chosendia3 = "";
let reqtext = "";
let reqsym = "";

let wordpoint = 0;
let wordrounds = 0;

function shufflediscritics() 
{
  const buttonArray = Array.from(diabuttonall);

  const group1 = [dia1btn, dia2btn];
  const group2 = [dia3btn, dia4btn, dia5btn, dia6btn];
  const group3 = [dia7btn, dia8btn];

  diaset1 = group1[Math.floor(Math.random() * group1.length)];
  diaset2 = group2[Math.floor(Math.random() * group2.length)];
  diaset3 = group3[Math.floor(Math.random() * group3.length)];

buttonArray.forEach(function(btn)
{
  btn.style.display = "none";
});

[diaset1, diaset2, diaset3].forEach(function(btn)
  {
    btn.style.display = "inline-block";
    btn.style.marginRight = "1vw";
  });
};


window.addEventListener("DOMContentLoaded", function()
{
  wordmaingame.style.display = "none";
});
wordstartbutton.addEventListener("click", function ()
{
  startwordgame();
});

wordsubmitbutton.addEventListener("click", function ()
{
  checkword();
});

function startwordgame()
{
  wordstartbuttondis.style.display = "none";
  wordmaingame.style.display = "grid";
  shufflediscritics();
  randomDiacritic();
}

function checkword()
{
  wordrounds++;
  if(
    (chosendia1 == reqsym && chosendia2 == "" && chosendia3 == "") ||
    (chosendia1 == "" && chosendia2 == reqsym && chosendia3 == "") ||
    (chosendia1 == "" && chosendia2 == "" && chosendia3 == reqsym)
  )
  {
    wordpoint++;
  }

  diaset1 = "";
  diaset2 = "";
  diaset3 = "";
  chosendia1 = "";
  chosendia2 = "";
  chosendia3 = "";
  reqtext = "";
  reqsym = "";

  shufflediscritics();
  randomDiacritic();
  checkWinWord();
  updateWord();
}

function checkWinWord()
{
  if(wordrounds >= 5 && wordpoint > 3)
  {
    alert("You won with " + wordpoint + " points!!!");

    wordrounds = 0;
    wordpoint = 0;

    wordstartbuttondis.style.display = "flex";
    wordmaingame.style.display = "none";
    document.getElementById("wordstart").textContent = "Replay";
  }
  else if (wordrounds >= 5 && wordpoint <= 3)
  {
    alert("You lost and only got " + wordpoint + " points...");

    wordrounds = 0;
    wordpoint = 0;

    wordstartbuttondis.style.display = "flex";
    wordmaingame.style.display = "none";
    document.getElementById("wordstart").textContent = "Replay Word Construction";
  }
}

function updateWord()
{
  const combined = (basechar + chosendia1 + chosendia2 + chosendia3).normalize("NFC");
  document.getElementById("mainword").textContent = combined;
}

function randomDiacritic()
{
  const randomNum = Math.floor(Math.random() * 3) + 1;
  const diacriticNames = {
    dia1: "Ya Yit",
    dia2: "Ha Htoe",
    dia3: "Lone Gyi Tin",
    dia4: "Tha Chaung Ngin",
    dia5: "Yay Char",
    dia6: "Tha Way Htoe",
    dia7: "Wit Sa Nha Lone Pauk",
    dia8: "Out Ka Myint"
  };
    const diacriticSymbols = {
    dia1: "ြ",
    dia2: "ှ",
    dia3: "ိ",
    dia4: "ု",
    dia5: "ာ",
    dia6: "ေ",
    dia7: "း",
    dia8: "့"
  };

  if (randomNum == 1)
  {
    reqtext = diacriticNames[diaset1.id]
    reqsym = diacriticSymbols[diaset1.id]
  }
  if (randomNum == 2)
  {
    reqtext = diacriticNames[diaset2.id]
    reqsym = diacriticSymbols[diaset2.id]
  }
  if (randomNum == 3)
  {
    reqtext = diacriticNames[diaset3.id]
    reqsym = diacriticSymbols[diaset3.id]
  }

  document.getElementById("wordrequirment").textContent = reqtext;
}

dia1btn.addEventListener("click", function ()
{
  if (chosendia1 == "")
    chosendia1 = "ြ";
  else
    chosendia1 = "";

  updateWord();
});
dia2btn.addEventListener("click", function ()
{
  if (chosendia1 == "")
    chosendia1 = "ှ";
  else
    chosendia1 = "";

  updateWord();
});
dia3btn.addEventListener("click", function ()
{
  if (chosendia2 == "")
    chosendia2 = "ိ";
  else
    chosendia2 = "";

  updateWord();
});
dia4btn.addEventListener("click", function ()
{
  if (chosendia2 == "")
    chosendia2 = "ု";
  else
    chosendia2 = "";

updateWord();
});
dia5btn.addEventListener("click", function ()
{
  if (chosendia2 == "")
    chosendia2 = "ာ";
  else
    chosendia2 = "";

  updateWord();
});
dia6btn.addEventListener("click", function ()
{
  if (chosendia2 == "")
    chosendia2 = "ေ";
  else
    chosendia2 = "";

  updateWord();
});
dia7btn.addEventListener("click", function ()
{
  if (chosendia3 == "")
    chosendia3 = "း";
  else
    chosendia3 = "";

  updateWord();
});
dia8btn.addEventListener("click", function ()
{
  if (chosendia3 == "")
    chosendia3 = "့";
  else
    chosendia3 = "";

  updateWord();
});

updateWord();
randomDiacritic();

const audioFiles = [
  "audio/sound1.mp3", "audio/sound2.mp3", "audio/sound3.mp3", "audio/sound4.mp3",
  "audio/sound5.mp3", "audio/sound6.mp3", "audio/sound7.mp3", "audio/sound8.mp3",
  "audio/sound9.mp3", "audio/sound10.mp3", "audio/sound11.mp3", "audio/sound12.mp3"
];

const buttonIds = [
  "diatype11", "diatype12", "diatype13", "diatype14", "diatype15",
  "diatype21", "diatype22", "diatype31", "diatype32",
  "diatype33", "diatype41", "diatype42"
];

for (var i = 0; i < buttonIds.length; i++)
{
  (function(index)
  {
    var button = document.querySelector("#" + buttonIds[index]);
    var audio = new Audio(audioFiles[index]);

    button.addEventListener("click", function ()
    {
      audio.currentTime = 0;
      audio.play();
    });
  })
  (i);
}
/**************************language**************************/
/**************************history**************************/
const prevarrow=document.querySelector("#prevarrow");
const nextarrow=document.querySelector("#nextarrow");

const baganpage=document.querySelector("#cbagan");
const taungupage=document.querySelector("#ctaungu");
const konbaungpage=document.querySelector("#ckonbaung");

let currentIndex = 1;

const leftFlag = document.getElementById("leftFlag").querySelector("img");
const centerFlag = document.getElementById("centerFlag").querySelector("img");
const rightFlag = document.getElementById("rightFlag").querySelector("img");

const flags = [
  {
    img: src="Image/baganflag.webp",
    bg: "#252228ff"
  },
  {
    img: src="Image/taunguflag.jpg",
    bg: "#5f4300ff"
  },
  {
    img: src="Image/konbaungflag.png",
    bg: "#a9a9a9ff"
  }
];


function updateFlags()
{
  let leftIndex = currentIndex - 1;
  if(leftIndex < 0)
  {
    leftIndex = 2;
  }
  
  let rightIndex = currentIndex + 1;
  if(rightIndex > 2)
  {
    rightIndex = 0;
  }

  leftFlag.src = flags[leftIndex].img;
  centerFlag.src = flags[currentIndex].img;
  rightFlag.src = flags[rightIndex].img;

  document.getElementById("leftFlag").style.backgroundColor = flags[leftIndex].bg;
  document.getElementById("centerFlag").style.backgroundColor = flags[currentIndex].bg;
  document.getElementById("rightFlag").style.backgroundColor = flags[rightIndex].bg;

  changedynasty();
}

prevarrow.addEventListener("click", function ()
{
  currentIndex = currentIndex - 1;

  if(currentIndex < 0)
  {
    currentIndex = 2;
  }

  updateFlags();
});

nextarrow.addEventListener("click", function ()
{
  currentIndex = currentIndex + 1;
  
  if(currentIndex > 2)
  {
    currentIndex = 0;
  }

  updateFlags();
});

function changedynasty()
{
  if(currentIndex == 0)
  {
    baganpage.style.display = "grid";
    taungupage.style.display = "none";
    konbaungpage.style.display = "none";
  }
  if(currentIndex == 1)
  {
    baganpage.style.display = "none";
    taungupage.style.display = "grid";
    konbaungpage.style.display = "none";
  }
  if(currentIndex == 2)
  {
    baganpage.style.display = "none";
    taungupage.style.display = "none";
    konbaungpage.style.display = "grid";
  }
}

updateFlags();
changedynasty();

const btnSubmit=document.querySelector("#btnSubmit");  
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,q4,q5,q6,score,round=0;

const leaderque1=document.querySelector("#question1");
const leaderque2=document.querySelector("#question2");
const leaderque3=document.querySelector("#question3");
const leaderque4=document.querySelector("#question4");
const leaderque5=document.querySelector("#question5");
const leaderque6=document.querySelector("#question6");
var questionpage = document.querySelectorAll(".leadergame");
var loadingpage = document.querySelector(".nogamescreen");

loadingpage.style.display = "none";

function hideallque()
{
for(let onepage of questionpage)
{
  onepage.style.display="none";
}
}

function showque(queno)
{
  hideallque();

  if (queno == 7 || queno==0)
  {
    for(let onepage of questionpage)
    {
      onepage.style.display="none";
    }
    loadingpage.style.display = "grid";

    if(queno==0)
    {
      document.getElementById("btnSubmit").textContent = "Play Leader Guess";
    }
  }
  else
  {
    let onepage = document.querySelector("#question" + queno);
    onepage.style.display = "grid";
    loadingpage.style.display = "none";
    document.getElementById("btnSubmit").textContent = "Submit";
  }
}

function CheckAns()
{
  if(round == 7)
  {
    replayquiz();
    return;
  }

  if(round == 1)
  {
    q1=document.querySelector("input[name='q1']:checked").value;
    console.log(q1);
  }
  if(round == 2)
  {
    q2=document.querySelector("input[name='q2']:checked").value;
    console.log(q2);
  }
  if(round == 3)
  {
    q3=document.querySelector("input[name='q3']:checked").value;
    console.log(q3);  
  }
  if(round == 4)
  {
    q4=document.querySelector("input[name='q4']:checked").value;
    console.log(q4);
  }
  if(round == 5)
  {
    q5=document.querySelector("input[name='q5']:checked").value;
    console.log(q5);
  }
  if(round == 6)
  {
    q6=document.querySelector("input[name='q6']:checked").value;
    console.log(q6);
  }

  score=0;
  if(q1=="Bagan")score++;
  if(q2=="Taungu")score++;
  if(q3=="Konbaung")score++;
  if(q4=="Innwa")score++;
  if(q5=="Konbaung")score++;
  if(q6=="Taungu")score++;

  if(round == 6)
  {
    scorebox.innerHTML="Score:"+score;
    document.getElementById("btnSubmit").textContent = "Replay Leader Guess";
  }
  else
  {
    document.getElementById("btnSubmit").textContent = "Submit";
  }
  
  round++;
  showque(round);
}

function replayquiz()
{
  q1 = " ";
  q2 = " ";
  q3 = " ";
  q4 = " ";
  q5 = " ";
  q6 = " ";

  score = 0;
  round = 1;

  showque(1);

  const allRadios = document.querySelectorAll("input[type='radio']");
  allRadios.forEach(function(radio)
  {
    radio.checked = false;
  });

  scorebox.innerHTML="Not submitted";
  btnSubmit.innerHTML="Not submitted";
}

btnSubmit.addEventListener("click",CheckAns);

hideallque();
showque(0);
/**************************history**************************/

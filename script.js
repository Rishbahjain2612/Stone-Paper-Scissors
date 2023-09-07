var score = 0;
var scissors = document.getElementById("Scissor");
var paper = document.getElementById("Paper");
var stone = document.getElementById("Stone");

function win() {
    document.getElementById("choice").style.borderColor = "green";
    document.getElementById("rando").style.borderColor = "green";
    document.getElementById("resultText").style.color = "#40e0a3";
    document.getElementById("resultText").innerText = "YOU WIN!!";
}
function lose() {
    document.getElementById("choice").style.borderColor = "red";
    document.getElementById("rando").style.borderColor = "red";
    document.getElementById("resultText").style.color = "crimson";
    document.getElementById("resultText").innerText = "YOU LOSE!!";
}
function draw() {
    document.getElementById("choice").style.borderColor = "black";
    document.getElementById("rando").style.borderColor = "black";
    document.getElementById("resultText").style.color = "black";
    document.getElementById("resultText").innerText = "DRAW!!";
}

function calculateScore(value) {
    var rand = Math.floor(Math.random() * 3);

    if (rand == 0)
    {
        draw();
        document.getElementById("02").src = "scissors.png";
        document.getElementById("01").src = "scissors.png";
        if (value == 2)
        {

            win();
            document.getElementById("01").src = "fist.png";
            score += 1;
        }
        else if (value == 1)
        {
            document.getElementById("01").src = "paper.png";
            lose();
            score -= 1;
        }
    }
    else if (rand == 1)
    {
        draw();
        document.getElementById("02").src = "paper.png";
        document.getElementById("01").src = "paper.png";
        if (value == 2)
        {
            document.getElementById("01").src = "fist.png";
            lose();
            score -= 1;
        }
        else if (value == 0)
        {
            document.getElementById("01").src = "scissors.png";
            win();
            score += 1;
        }
    }
    else if (rand == 2)
    {
        draw();
        document.getElementById("02").src = "fist.png";
        document.getElementById("01").src = "fist.png";
        if (value == 0)
        {

            lose();
            score -= 1;
            document.getElementById("01").src = "scissors.png";
        }
        else if (value == 1)
        {
            document.getElementById("01").src = "paper.png";
            win();
            score += 1;
        }
    }
    // console.log(score);
    setTimeout(() => {

        document.getElementById("selection").style.display = "none";
        document.getElementById("result").style.display = "flex";
        document.getElementById("score-number").innerText = score;
    }, 400);
}



function preset() {
    console.log("clicked");
    score = 0;
    document.getElementById("score-number").innerText = score;
}

function back() {
    setTimeout(() => {
        document.getElementById("selection").style.display = "flex";
        document.getElementById("result").style.display = "none";
    }, 400);
}


var arr = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var rand1;
var rand2;

function turncard1() {
    rand1 = Math.floor(Math.random() * 13);
    document.getElementById("card1").style.transition = "transform 2.7s";
    document.getElementById("card1").style.transform = "rotateY(0turn)";
    setTimeout(() => {
        document.getElementById("play").style.display = "none";
        document.getElementById("high").style.display = "flex";
        document.getElementById("low").style.display = "flex";
    }, 1750);
    setTimeout(() => {
        document.getElementById("txtcard1").innerText = arr[rand1];
    }, 2300);

}

function win2() {
    score += 1;
    document.getElementById("score-number").innerText = score;
    document.getElementById("win2").style.display = "flex";
    document.getElementById("win2").style.color = "green";
    document.getElementById("win2").innerText = "YOU WINN!!";
}

function lose2() {
    score -= 1;
    document.getElementById("score-number").innerText = score;
    document.getElementById("win2").style.display = "flex";
    document.getElementById("win2").style.color = "red";
    document.getElementById("win2").innerText = "YOU LOSE!!";
}
function draw2() {
    document.getElementById("win2").style.display = "flex";
    document.getElementById("win2").style.color = "#000";
    document.getElementById("win2").innerText = "DRAWW!!";
}

function turncard2() {
    rand2 = Math.floor(Math.random() * 13);
    document.getElementById("card2").style.transition = "transform 2.7s";
    document.getElementById("card2").style.transform = "rotateY(0turn)";
    setTimeout(() => {
        document.getElementById("txtcard2").innerText = arr[rand2];
        document.getElementById("high").style.display = "none";
        document.getElementById("low").style.display = "none";
    }, 2300);

    setTimeout(() => {
        if (rand2 > rand1)
        {
            win2();
        }
        else if (rand2 < rand1)
        {
            lose2();
        }
        else if (rand1 == rand2)
        {
            draw2();
        }
    }, 2500);

    setTimeout(() => {
        document.getElementById("playag").style.display = "flex";
    }, 3500);


}

function turncard3() {
    rand2 = Math.floor(Math.random() * 13);
    document.getElementById("card2").style.transition = "transform 2.7s";
    document.getElementById("card2").style.transform = "rotateY(0turn)";
    setTimeout(() => {
        document.getElementById("txtcard2").innerText = arr[rand2];
        document.getElementById("high").style.display = "none";
        document.getElementById("low").style.display = "none";
    }, 2300);

    setTimeout(() => {
        if (rand2 < rand1)
        {
            win2();
        }
        else if (rand2 > rand1)
        {
            lose2();
        }
        else
        {
            draw2();
        }
    }, 2500);

    setTimeout(() => {
        document.getElementById("playag").style.display = "flex";
    }, 3500);


}

function playag() {
    document.getElementById("card1").style.transform = "rotateY(0.5turn)";
    document.getElementById("card2").style.transform = "rotateY(0.5turn)";
    document.getElementById("txtcard2").innerText = "";
    document.getElementById("txtcard1").innerText = "";
    document.getElementById("play").style.display = "flex";
    document.getElementById("playag").style.display = "none";
    document.getElementById("win2").style.display = "none";
    document.getElementById("win2").innerText = "";
}

var flag = 0;

function newgame() {
    if (flag == 0)
    {
        document.getElementById("HI-LO").style.display = "flex";
        document.getElementById("selection").style.display = "none";
        document.getElementById("Next").style.fontSize = "large";
        document.getElementById("Next").innerText = "RockPaperScissor";
        flag = 1;

    } else if (flag == 1)
    {

        document.getElementById("HI-LO").style.display = "none";
        document.getElementById("selection").style.display = "flex";
        document.getElementById("Next").style.fontSize = "xx-large";
        document.getElementById("Next").innerText = "HI-LO";
        flag = 0;
    }
}
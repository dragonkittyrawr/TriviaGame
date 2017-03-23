// var questions = {
//     q1: [
//         "question",
//         "correct",
//         "decoy2",
//         "decoy3",
//         "decoy4"
//     ]
// };


var questions = {
    q1: [
        "IS IT???",
        "I DUNNO, IS IT???",
        "It is not.",
        "Sure is, friend.",
        "It is."
    ],
    q2: [
        "IS IT???",
        "I DUNNO, IS IT???",
        "It is not.",
        "Sure is, friend.",
        "It is."
    ],

    q3: [
        "IS IT???",
        "I DUNNO, IS IT???",
        "It is not.",
        "Sure is, friend.",
        "It is."
    ],
    q4: [
        "IS IT???",
        "I DUNNO, IS IT???",
        "It is not.",
        "Sure is, friend.",
        "It is."
    ],
    q5: [
        "IS IT???",
        "I DUNNO, IS IT???",
        "It is not.",
        "Sure is, friend.",
        "It is."
    ]
};


//  30 second timer.
var tickTock = 30;

//  Variable that will hold our interval ID when we execute the "run" function
var intervalId;



$(".answer").click(function answerSelect() {
    // console.log($(this).attr("value"));
    // console.log($(this));
    // console.log(questions.question1[0].ak);
    // console.log($(this).text());

    //  When an answer is selected stop the timer.

    stop();

    //  When the answer is found correct or incorrect, restart timer.

    if ($(this).text() === questions.q1[1]) {

        $("#answerShow").html("<h2>Correct!</h2>");
        // run();
    } else {
        $("#answerShow").html("<h2>Sorry! The correct answer was \"" + questions.q1[1] + "\"</h2>");
        // run();
    }
})



$("#questionShow").html("<h2>Question: " + questions.q1[0] + "</h2");

// Getting the first row of the table
var firstRowTd = $("table").children().eq(0).children("tr").eq(0).children("td");

// Getting the second row of the table
var secondRowTd = $("table").children().eq(0).children("tr").eq(1).children("td");

// Getting the third row of the table
var thirdRowTd = $("table").children().eq(0).children("tr").eq(2).children("td");

// Getting the fourth row of the table
var fourthRowTd = $("table").children().eq(0).children("tr").eq(3).children("td");

var rando = [];

// http://stackoverflow.com/questions/962802#962890

for (var i = 0; i < 4; i++) rando[i] = i;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

rando = shuffle(rando);

console.log(rando);

var a1 = rando[0];

var a2 = rando[1];

var a3 = rando[2];

var a4 = rando[3];


$("#answer1").html(questions.q1[a1]);
$("#answer2").html(questions.q1[a2]);
$("#answer3").html(questions.q1[a3]);
$("#answer4").html(questions.q1[a4]);


// // Setting the inner text of each td in the first row
// firstRowTd.eq(0).html(questions.q1[a1]);

// // Setting the inner text of each td in the first row
// secondRowTd.eq(0).html(questions.q1[a2]);

// // Setting the inner text of each td in the first row
// thirdRowTd.eq(0).html(questions.q1[a3]);

// // Setting the inner text of each td in the first row
// fourthRowTd.eq(0).html(questions.q1[a4]);


//  Timer runs for 30 seconds.
function run() {
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease tickTock by one.
    tickTock--;

    //  Show the number in the #timer tag.
    $("#timerShow").html("<h2>" + tickTock + " seconds</h2>");


    //  Once number hits zero...
    if (tickTock === 0) {

        //  ...run the stop function.
        stop();
        // nextQuestion();

        //  Alert the user that time is up.
        $("#answerShow").html("<h2>Time's Up! The correct answer was \"" + questions.q1[1] + "\"</h2>");
    }
}

//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
}

//  Execute the run function.
run();

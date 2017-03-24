// var questions = {
//     q1: [
//         "correct",
//         "decoy1",
//         "decoy2",
//         "decoy3",
//         "question"
//     ]
// };


var questions = {
    q1: [
        "Nibbler",
        "Norman",
        "Nubben",
        "Gnawer",
        "What is the name of Leela's Pet?"
    ],
    q2: [
        "Pizza Delivery Boy",
        "Pool Boy",
        "Taxi Driver",
        "Bicycle Messenger",
        "What was Fry's job in 1999?"
    ],

    q3: [
        "Planet Express",
        "Intersteller Express",
        "Planet Delivery",
        "Space Delivery",
        "What company does Dr. Farnsworth run?"
    ],
    q4: [
        "Kif Kroker",
        "Al Roker",
        "Cif Coker",
        "Yik Kroker",
        "What is the name of Zapp Brannigan's lieutenant?"
    ],

    q5: [
        "Mexico",
        "U.S.A",
        "Germany",
        "China",
        "Bender was manufactured in which country?"
    ],

    q6: [
        "Turanga",
        "Leela",
        "Munda",
        "Smizmar",
        "What is Leela's first name?"
    ],

    q7: [
        "A Hyper Intelligent Ape Named Gunther",
        "A Neptonian",
        "Himself from another dimension",
        "Flexo",
        "When Fry returns to college, who does he room with?"
    ],

    q8: [
        "To get a discount on ham flavored chewing gum.",
        "To win a bet with Hermes.",
        "They thought they were entering a raffle.",
        "They were hypnotized.",
        "Why did Fry and Bender enlist in the Earth Army?"
    ],

    q9: [
        "Daffodil",
        "Chump",
        "Chumpette",
        "Pimpmobile",
        "Which word is revealed to be Bender's most commonly used?"
    ],

    q10: [
        "Amy Wong",
        "Professor Farnsworth",
        "Scruffy, the janior",
        "Hermes",
        "When Fry's head is detached in \"Put Your Head on My Shoulders\", whose shoulder is it attached to?"
    ]
};


//  30 second timer.
var tickTock = 30;

//  Variable that will hold our interval ID when we execute the "run" function
var intervalId;

var num = 1;

var score = 0;


$(".answer").click(function answerSelect() {
    // console.log($(this).attr("value"));
    // console.log($(this));
    // console.log(questions.question1[0].ak);
    // console.log($(this).text());

    //  When an answer is selected stop the timer.

    stop();

    if (num !== questions.length) {

        //  When the answer is found correct or incorrect, restart timer.

        if ($(this).text() === questions["q" + num][0]) {

            $("#answerShow").html("<h2>Correct!</h2>");
            num++;
            score++;
            $("#gameShow").hide();
            $("#scoreShow").html("<h2>Correct Answers: " + score + "</h2>");
            setTimeout(function() {
                run();
            }, 2500);
        } else {
            $("#answerShow").html("<h2>Sorry! The correct answer was \"" + questions["q" + num][0] + "\"</h2>");
            num++;
            $("#gameShow").hide();
            setTimeout(function() {
                run();
            }, 2500);
        }

    } else if (num === questions.length) {
        stop();
        score++;
        $("#gameShow").html("<h2>Game Over!  You got " + score + " correct!</h2>");
        $("#scoreShow").html("");
        $("#questionShow").html("");
        $("#answerShow").html("");
        $("#timerShow").html("");
    }

})





// Getting the first row of the table
var firstRowTd = $("table").children().eq(0).children("tr").eq(0).children("td");

// Getting the second row of the table
var secondRowTd = $("table").children().eq(0).children("tr").eq(1).children("td");

// Getting the third row of the table
var thirdRowTd = $("table").children().eq(0).children("tr").eq(2).children("td");

// Getting the fourth row of the table
var fourthRowTd = $("table").children().eq(0).children("tr").eq(3).children("td");

var rando = [];

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

    $("#gameShow").show();

    // http://stackoverflow.com/questions/962802#962890

    for (var i = 0; i < 4; i++) rando[i] = i;

    function shuffle(array) {
        var tmp, current, top = array.length;
        if (top)
            while (top--) {
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

    $("#questionShow").html("<h2>Question: " + questions["q" + num][4] + "</h2");
    $("#answer1").html(questions["q" + num][a1]);
    $("#answer2").html(questions["q" + num][a2]);
    $("#answer3").html(questions["q" + num][a3]);
    $("#answer4").html(questions["q" + num][a4]);
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
        $("#gameShow").hide();
        $("#answerShow").html("<h2>Time's Up! The correct answer was \"" + questions["q" + num][0] + "\"</h2>");
        setTimeout(function() {
                run();
            }, 2500);
    }
}

//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    tickTock = 30;
}

//  Execute the run function.
run();

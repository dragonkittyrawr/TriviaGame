// Question Key
// var questions = {
//     q1: [
//         "correct",
//         "decoy1",
//         "decoy2",
//         "decoy3",
//         "question"
//     ]
// };


// Question/Answer Bank

var questions = {
    q1: [
        "Nibbler",
        "Norman",
        "Nubben",
        "Gnawer",
        "What is the name of Leela's Pet?",
        "assets/images/leelaMeetsNibbler.jpg"
    ],
    q2: [
        "Pizza Delivery Boy",
        "Pool Boy",
        "Taxi Driver",
        "Bicycle Messenger",
        "What was Fry's job in 1999?",
        "assets/images/panucciPizza.png"
    ],

    q3: [
        "Planet Express",
        "Intersteller Express",
        "Planet Delivery",
        "Space Delivery",
        "What company does Dr. Farnsworth run?",
        "assets/images/planetExpress.jpg"
    ],
    q4: [
        "Kif Kroker",
        "Al Roker",
        "Cif Coker",
        "Yik Kroker",
        "What is the name of Zapp Brannigan's lieutenant?",
        "assets/images/kifKroker.gif"
    ],

    q5: [
        "Mexico",
        "U.S.A",
        "Germany",
        "China",
        "Bender was manufactured in which country?",
        "assets/images/benderHechoEnMexico.jpg"
    ],

    q6: [
        "Turanga",
        "Leela",
        "Munda",
        "Smizmar",
        "What is Leela's first name?",
        "assets/images/turangaLeela.png"
    ],

    q7: [
        "A Hyper intelligent ape named Gunther",
        "A Neptonian",
        "Himself from another dimension",
        "Flexo",
        "When Fry returns to college, who does he room with?",
        "assets/images/guntherAndFry.jpg"
    ],

    q8: [
        "To get a discount on ham flavored chewing gum.",
        "To win a bet with Hermes.",
        "They thought they were entering a raffle.",
        "They were hypnotized.",
        "Why did Fry and Bender enlist in the Earth Army?",
        "assets/images/hamGumAllBones.jpg"
    ],

    q9: [
        "Daffodil",
        "Chump",
        "Chumpette",
        "Pimpmobile",
        "Which word is revealed to be Bender's second most commonly used?",
        "assets/images/daffodil.jpg"
    ],

    q10: [
        "Amy Wong",
        "Professor Farnsworth",
        "Scruffy, the janior",
        "Hermes",
        "When Fry's head is detached in \"Put Your Head on My Shoulders\", whose shoulder is it attached to?",
        "assets/images/headOnYourShoulders.jpg"
    ]
};

// Capture length of questions object.

var objSize = Object.keys(questions).length;


//  15 second timer.
var tickTock = 15;

//  intervalID is needed for run function.
var intervalId;

// num is needed to move through the questions object.

var num = 1;

// Score represents correctly answers questions.

var score = 0;

// Capture user selection.

$(".answer").click(function answerSelect() {

    //  When an answer is selected stop the timer.

    stop();

    $("#pictureShow").html("<img src=\"" + questions["q" + num][5] + "\"></img>")

    // If this is not the last question.

    if (num !== objSize) {

        // If the user selected the correct answer.

        if ($(this).text() === questions["q" + num][0]) {

            // Display "Correct!".
            $("#answerShow").html("<h2>Correct!</h2>");

            // Increase num to move to next question.
            num++;

            // Increase score.
            score++;

            // Hide answers.
            $("#gameShow").hide();

            // Update correct answers display.
            $("#scoreShow").html("<h2>Correct Answers: " + score + "</h2>");

            // Delay next question for 1.5 seconds.
            setTimeout(function() {
                //  Restart timer.
                run();
            }, 1500);
        } else {

            // Display correct answer.
            $("#answerShow").html("<h2>Sorry! The correct answer was \"" + questions["q" + num][0] + "\"</h2>");

            // Increase num to move to next question.
            num++;

            // Hide answers.
            $("#gameShow").hide();

            // Delay next question for 1.5 seconds.
            setTimeout(function() {
                // Restart timer.
                run();
            }, 1500);
        }

        // If this is the last question.
    } else if (num === objSize || tickTock === 0) {
        
        // Stop the timer.
        stop();

        // Display game over screen.
        $("#gameShow").html("<h2>Game Over!  You got " + score + " correct!</h2>");

        // Clear out scoreShow, questionShow, answerShow, and timerShow
        $("#scoreShow").html("");
        $("#questionShow").html("");
        $("#answerShow").html("");
        $("#timerShow").html("");
    }

})

// Empty array to randomize answer placement.
var rando = [];

//  Main game functionality.
function run() {
    // Establish one second interval for timer.
    intervalId = setInterval(decrement, 1000);

    // Blank out answerShow.
    $("#answerShow").html("");
    $("#pictureShow").html("");

    // Unhide gameShow.
    $("#gameShow").show();

    // Answer sorting with help from: http://stackoverflow.com/questions/962802#962890

    for (var i = 0; i < 4; i++) rando[i] = i;

    function shuffle(array) {
        // Create variables tmp, current, and top.  Top is the length of the passed array.
        var tmp, current, top = array.length;
        
        // Checks top exists.
        if (top)
            while (top--) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array;
    }

    // Redefine empty rando array as shuffled rando array.
    rando = shuffle(rando);

    console.log(rando);

    // Assign numbers from rando to answers.
    var a1 = rando[0];

    var a2 = rando[1];

    var a3 = rando[2];

    var a4 = rando[3];

    // Question = questions object, index 4 of q+num array.
    $("#questionShow").html("<h2>Question: " + questions["q" + num][4] + "</h2");

    // Answer = questions object, index random of q+num array.
    $("#answer1").html(questions["q" + num][a1]);
    $("#answer2").html(questions["q" + num][a2]);
    $("#answer3").html(questions["q" + num][a3]);
    $("#answer4").html(questions["q" + num][a4]);
}


//  The decrement function.
function decrement() {

    //  Decrease tickTock by one.
    tickTock--;

    //  Update the time left.
    $("#timerShow").html("<h2>" + tickTock + " seconds</h2>");


    //  If timer is at 0.
    if (tickTock === 0) {

        // Stop the timer.
        stop();

        //  Hide gameShow.
        $("#gameShow").hide();

        // Display time's up message with correct answer.
        $("#answerShow").html("<h2>Time's Up! The correct answer was \"" + questions["q" + num][0] + "\"</h2>");

        // Delay next question for 1.5 seconds.
        setTimeout(function() {
            // Blank out answerShow.
            $("#answerShow").html("");

            // Move to next question.
            num++;
            run();
        }, 1500);
    }
}

//  The stop function
function stop() {

    //  Clear intervalId.
    clearInterval(intervalId);

    // Reset timer.
    tickTock = 15;
}

//  And game is go.
run();

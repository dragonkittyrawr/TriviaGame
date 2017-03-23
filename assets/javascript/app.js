var questions = {
    question1: [{
        q: "IS IT???",
        a1: "It is.",
        a2: "It is not.",
        a3: "Sure is, friend.",
        a4: "I DUNNO, IS IT???",
        ak: 4
    }]
};

$("#question").html("<h2>Question: " + questions.question1[0].q + "</h2");



$("#answer1").html(questions.question1[0].a1);
$("#answer2").html(questions.question1[0].a2);
$("#answer3").html(questions.question1[0].a3);
$("#answer4").html(questions.question1[0].a4);


$(".answer").click(function answerSelect() {
	console.log($(this).attr("value"));
	console.log($(this));
	console.log(questions.question1[0].ak);

	if (parseInt($(this).attr("value")) === parseInt(questions.question1[0].ak)) {
		
		$("#answers").html("<h2>Correct!</h2>");
	}

	else {
		$("#answers").html("<h2>Sorry!</h2>");
	}
})
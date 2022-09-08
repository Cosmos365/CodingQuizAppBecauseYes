var i = -1;
var intervalId;
var wrongAnsTotal = 0;
var rightAnsTotal = 0;
var correctAns;
var wrongAns;
var Ans = [];
var questions = [

      ["When was Minecraft released?","1987","2009","2011"],

      ["For how much did Elon Musk buy Twitter?","$44 Billion","$40 Billion","$4 Billion"],

      ["What weapon did the ancient Egyptians use?","Kopesh","Claymore","Falchion"],

      ["How many countries are there in the World?","Agent 3","Marina","Telephone"],

      ["What the maximum level one can achieve?","99","99*","99*^99"],

      ["What was the max rank before rank x was released?","99","10","50"],

      ["How many sub chunks equals a main?","4","2","3"],

      ["How many maps are there as of date 11/18/2018","22","21","23"],

      ["When was Splatoon 1 released?","May27th2015","May26th2015","May28th2015"],

      ["When was Splatoon 2 released?","July22th2018","July23th2018","July21th2018"],

      ["What weapon require's no skills?","Blaster","Luna Blaster","Clash Blaster"],

      ["WELL DONE!!!!","Good Job!","You made it?","To the end"]
];
function displayQuestion() {
	i++;
	$('#Question').html(questions[i][0]);
	correctAns = questions[i][3]; 	
	i2 = Math.floor(Math.random() * 3 + 1);
	i3 = 0; 
		for (let y = i2; y < 4; y++) {
			Ans[i3] = (questions[i][y]);
			i3++
		};
		for (let y = 1; y < i2; y++) {
			Ans[i3] = (questions[i][y]);
			i3++
		};
	for (let y = 1; y < 4; y++) {
	 		$('#ans' + y).html(Ans[y - 1])
	};
};

function nextQuestion() {
	i++;
	scoreboard();
}

function scoreboard() {
	if (i >= questions.length) {
		clearInterval(intervalId);
		score();
	}
	else {
		displayQuestion(); 
	};
};

function score() {
	$('#scoreBoard').animate({opacity: '1'});
	$('#rightAns').html(rightAnsTotal);
	$('#wrongAns').html(wrongAnsTotal);
};

$('.ans').on('click', check);

function check(){
	console.log(event.target.innerHTML)
	const userAns = event.target.innerHTML;
	if(userAns == correctAns) {
		rightAnsTotal++
		nextQuestion();
	} else {
		wrongAnsTotal++;
		nextQuestion();	
	}
}


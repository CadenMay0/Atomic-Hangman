


var hangWords = ["atoms", "rocket", "nuclear", "space", "hydrogen", "soviet", "red", "art deco"];
var chosenWord;
var hangmanWord;
var guess;
var blanks;
var aryIndex;
var fill;
var wrongAnswers;
var end;
var score = 0;

function grabWord(){
	aryIndex = Math.floor((Math.random()*hangWords.length));
	chosenWord = hangWords[aryIndex];
	console.log(chosenWord);
};
function underLine(){
	blanks = [chosenWord.length];
	for (var i = 0; i < chosenWord.length; i++) {
		blanks[i] = "_ ";
	}
	hangmanWord = blanks.toString();
	hangmanWord = hangmanWord.replace(/,/g,"");
	return hangmanWord;
	//console.log(hangmanWord);
};
//function write(){
	
//};
function reset(){
	fill = "";
	hangmanWord = "";
	grabWord();
	underLine();
	document.getElementById("wordField").innerHTML = underLine();
	wrongAnswers = 6;
	end = 0;
	document.getElementById("system").innerHTML=("");
	document.getElementById("counter").innerHTML=(6);

};

document.onkeyup = function check(event)
{
	if (end == 1) {
		return;
	}
	guess = event.key;
	guess = guess.toLowerCase();
	//console.log(guess);
	guess = guess.toString();
	if (chosenWord.indexOf(guess) == -1) {
		wrongAnswers--;
		document.getElementById("system").innerHTML=("!Incorrect answer. " + wrongAnswers + " attempts remaining. Nuclear Detonation soon.!");
		if (wrongAnswers==0) {
			document.getElementById("system").innerHTML=("!Game Over. Nuclear holocaust achieved.!");
			setTimeout(function(){document.getElementById("system").innerHTML=("Your final score is "+score+". Press 'S' to play again");}, 2000);
			end = 1;
			score = 0;
			return;

		}
	}
	else
	{
		for (var i = 0; i < chosenWord.length; i++) {
			if (chosenWord.indexOf(guess) == i) {
				blanks[i] = guess;
			}
			else
			{
				//blanks[i] = "_ ";
			}
		}
		hangmanWord = blanks.toString();
		hangmanWord = hangmanWord.replace(/,/g,"");
		document.getElementById("wordField").innerHTML = hangmanWord;
		if (hangmanWord == chosenWord) {
			//end = 1;
			//console.log(chosenWord);
			document.getElementById("system").innerHTML=("!Nuclear detonation averted.!");
			reset();
			score++;
			document.getElementById("counter").innerHTML=(score);
			return;
		}
	}
	fill = hangmanWord;
	console.log(fill);
};
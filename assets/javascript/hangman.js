


var hangWords = ["atoms", "rocket", "nuclear", "space", "hydrogen", "soviet", "red", "art deco"];
var chosenWord;
var hangmanWord;
var guess;
var blanks;
var aryIndex;
var fill;
var wrongAnswers;
var end;

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

	//console.log(hangmanWord);
};
function reset(){
	fill = "";
	hangmanWord = "";
	grabWord();
	underLine();
	wrongAnswers = 0;
	end = 0;

};


document.onkeyup = function check(event)
{
	if (end == 1) {
		return;
	}
	guess = event.key;
	console.log(guess);
	guess = guess.toString();
	if (chosenWord.indexOf(guess) == -1) {
		wrongAnswers++;
		console.log("Incorrect answer. " + wrongAnswers + " digits of the launch code are entered. Nuclear Detonation soon.");
		if (wrongAnswers==6) {
			console.log("Game Over. Nuclear holocaust achieved.")
			end = 1;
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
		if (hangmanWord == chosenWord) {
			end = 1;
			console.log(chosenWord);
			console.log("Nuclear detonation averted.");
			return;
		}
	}
	fill = hangmanWord;
	console.log(fill);
};

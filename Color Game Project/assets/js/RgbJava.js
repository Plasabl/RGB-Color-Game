
//  VERSION 1.0.2

// nappi josta painetaan jolloin tulee kolme neliötä lisää
// ja neliöiden koot pienenee javascriptillä,
// tai css classilla.. ja haukkumiset                    !!!DONE!!!


// VOISI VIELÄ LISÄÄ UUDEN VAIKEUSTASON(IMPOSSIBLE)      !!!DONE!!!

// SIT VOIS OLLA SEMMONE
// NAPPI TAI MENU MILLÄ VOIS LAITTA AUTO PLAYN PÄÄLLE.   !!!DONE!!!

// KESKITÄ STRIPEN JUTUT								 !!!DONE!!!

// HARDI JA INSANEN NELIÖT VOIS PAREMMI LAITTAA KOHALLEE  !!DONE!!
//			(room for improvement)																			

// 805px leveyde kohalla stripe  kaksinkertaseks          !Jotenki DONE!

// SAMAT TRANSITION AIKA H1:KKÖSELLE JA NAPEILLE   		  !!!DONE!!!!

// AUTOPLAY CLICKI RESETTI JUTTU KORJAA

// INSULTIT ON ENEMMÄ PG, JA PAREMMI TEHTY                !!!DONE!!!

// TEEEMA VÄREJÄ VOIS VIELÄ PEHMENTÄÄ					  !!!DONE!!!

// KORJAA AINAKI 8 ja EHK 9 NELIÖN GLITCHIT ET NÄKYY KULMAT
// `JOS O LAITTANU INSANE JA SITTE VAIKKA MEDIUMI
// ... NÄLÖJÄÄ KOKO KESKIRIVI VOI LAGAA SILLEE
// ... SE SAATTAA TOIMII SILLEE ETTÄ KU SIINÄ ON         !!!KORJATTU LAITTAMALLA
// TUMMA VÄRI NIIN VALKOSET REUNAT NÄKYY						BORDERI KAIKKII NELIÖIHI!!!
//
//							!!VAIHTU SAMALLA NELIÖITTE LEVEYS 30% -> 29.6% ET NE MAHTUU!!

// EHKÄ IHAN LOPUSSA TAI JOSSAI VAIHEESSA TEHÄ SILLEE ET HARDII
// JA INSANEE VOI PELAA MILLÄ VAA BROWSERIN KOOLLA
// JOLLOIN PITÄÄ TYYLIII KAIKKI PIKSELEIHIN LIITTYVÄT		!!!AIKA LAIKKA TEHTY JO!!!!
// CSS:SSÄT POISTAA JA TESTAILLA JA MIETTIÄ NIILLE
// % VAIHTOEHDOT

// SEMMONENKI ETTÄ JOS INSANEN SAA AUKI JOS
// SAA TIETYN VERRAN VAIKKA HARDIA OIKEIN PUTKEEN        !ALOTETAAN PISTEITTEN LASKENNALLA

// TAI ETTÄ NÄKYIS STATSIT KUINKA PALJO SAA OIKEIN
// JA SITTE VOIS NÄKYY SCORE RIIPPUEN MITÄ MODEE PELAA
// JA KUINKA PALJO SAA VÄÄRI
//
// SEMMOSES TAULUKOS VOIS NÄHÄ KAIKKI SCORET JA MISTÄ NE ON SAANU
// KU HOVERAA VAIKKA SCOREN PÄÄLLÄ NII TULIS SEMMONE
// SCOREN EI TARVIS RESETTAA KOKONAA JA SIINÄ VOIS NÄKYY
// PARAS WINSTREAKKI SUN MUUTA

// SEMMONE ET NAPPIEN VÄRIT VAIHTUIS YKS KERRALLAA

// SILLEE ET KU PAINAA ESIM HARD NAPPII NII SE JA H1
// MUUTTUU PUNASEKS... 

// DISCO MODE JOLLOIN INSANE NELIÖT VÄÄ VÄLKKYY JA
// VAIKKA H1 MYÖS. SEN VOI SAADA AUKI JOTAIN TEKEMÄLLÄ
// JA TAI SE VOI TULLA KUN TEKEE JOTAIN NIIKU VOITTAA
// INSANE 10 KERTAA PUTKEE ILMA ET MENEE VÄÄRI
// JA SIT SAA SEMMOSE NAPPULAN
// 	sen voi saada auki vaikka 10xeasy 7xmedium 5xhard ja 3xinsane

// VOIS  VAIKKA LAITTAA JONKU ANIMAATION KUN VUIHTAA MODEJA VAIKKA 
// slideUp() ja Downilla MUT SITÄ PITÄÄ MIETTII MITE SE TEHÄÄ.

// SEN OUTLINEN VOI OTTAA POIS JA KORVATA BORDERILLA SILLEE
// BUTTON:FOCUS{BORDER...}... NIIN EI TAVI OUTLINEE

// taustasta vois tehä gradientin VOIS TEHÄ MYÖS TAUSTA
// GRADIENT GENERAATTORIN. OIKEE VÄRI VOIS ESIM OLLA GRADIENTTI
// SEN JA JONKU MUUN VÄRIN KANSSA.

// SCORES JOKASEST VÄÄRÄST VOIS MENNÄ PISTEITÄ


////////// KANSIO STRUKTUURIKIN SITTE KUNTOOON /////
// Ja tietenki itse koodi jotenki paremmin kuntoon//



// DISCO TIME! NAPILLE FUNKTIO
// JA SE SITTE SELLASEKS SALAISEKS JUTUKS JONKA SAA AUKI
// / NÄKYVII JOS SAA JOTAI TEHTYY.
// DISCO MODESSA VOIS TEHÄ SILLEE ET SIIHE VALITAA VAA KIRKKAAMPII
// VÄREJÄ



// LOPUSSA MYÖS RE-FORMATOIDA JAVASCRIPTII JA TEHÖ HYVÄ
// DATA STRUKTUURI


// VOIS TEHÄ TÄSTÄ OIKEEMMAN PELIN JA SILLEE. LAITTAA VAIKKA JONKU INTRON
// JOKA KERTOO PELISTÄ. VOIS TEHÄ BACKENDILLÄ TAI JOKU RANDOM
// MUU FILE VAA JOKA LINKITTÄÄ TÄHÄ. 
// LISÄÄ TÄHÄ VAA EKA SEMMOSII FUNKTIONAALISUUTTA
// ETTÄ ALKAS MUISTUTTAA OIKEETA PELIÄ.
// INSULTIT PITÄÄ KYL MUUTTAA JOS VIEN PIDEMMÄLLE.

// VOIS OLLA JOTAI SIISTIMPÄÄKI TÄSSÄ NÄKYMÄSSÄ, VISUAALISTA



// JA REFRESHIN VOIS KORJAA, KUN LIILAT NELIÖT VÄLÄHTÄÄ

// PAREMMAT VARIAABELI JA FUNKTIO NIMET

// FAILSNI JA SQUARESPRESSEDIN ERO SELVILLLE JA JOS NIITÄ MOLEMPIA
// EDES TARVITSEE.

// VOIS TEHÄ SILLEE ET OIS AINA VÄHÄ ERI ESIM PUNANE INSANE MODELLA
// JOHONKI LISTAAN ERI SÄVYJÄ KAIKKIEN MODEJEN VÄREISTÄ
// SILLEE ET JOS REFRESHAA VAIKKA NII SE ON VÄHÄ KIVEMMAN NÄKÖNE
/// EIKÄ VÄLTSISTI RANDOMISTI LISTALTA VAAN JÄRJESTYKSESSÄ.


// CONST CONST CONST CONST CONST LET LET LET LET
// GET RID OF ANONYMOUS FUNCTION WITH ARROW FUNCTIONS
// SETUP FUNCTIO



// Declaring variables

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const winCounter = document.querySelector("#winCounter");
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message"); 
const autoplay = document.querySelector("#autoplay");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");
const discoButton = document.querySelector("#disco");
const buttons = document.querySelectorAll("button");
let wins = 0;
let fails = 0;
let squaresPressed = 0;
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let pickedColor = pickColor();
let modeColor; // for changing to the appropriate color on reset
			   // (keeping track of current mode's respective color)


// Different levels of insults (PG)
// Displayed depending on the number of failed guesses.

const insults = [
	"...", "Not even close", "Not that",
	"Newb", "Nope", "No", "Nahh", ":/"
];

const insults1 = [
	"Just... wow", "-_-", "...", "Try again",
	"*sigh*", "Get on with it", "Did you even try",
	"Today please", "Omg...", "NOO"
];

// Combining insults1 with new ones
const insults2 = [
	"Just... wow", "-_-", "...", "Try again",
	"*sigh*", "Get on with it", "Did you even try",
	"Today please", "Omg...", "NOO",

	"REALLY?!", ".....", "WOW you suck", "YEEEZ...",
	"CMOON", "Argh", "GET. IT. RIGHT"
];

for(let i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		$(".mode").removeClass("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy") {
			numberOfSquares = 3;
			modeHandler();
		} else if (this.textContent === "Medium") {
			numberOfSquares = 6;
			modeHandler();
		} else if (this.textContent === "Hard"){
			numberOfSquares = 9;
			modeHandler();
		} else{
			numberOfSquares = 21;
			modeHandler();
		}
		reset();
	});
}

// Hover effect adding for buttons
function mouseOver(number){
	for(let i = 0; i < buttons.length; i++){
		buttons[number].style.color = "White";
		buttons[number].style.backgroundColor = modeColor;
	}
}

function mouseOut(number){
	for(let i = 0; i < buttons.length; i++){
		if(buttons[number].classList.contains("selected")){

		} else{
			buttons[number].style.color = modeColor;
			buttons[number].style.backgroundColor = "White";
		}
	}
}


// Selects appropriate themes
function themeAdder(){
	for(let i = 0; i < buttons.length; i++){
		if(buttons[i].classList.contains("selected")){
			buttons[i].style.backgroundColor = modeColor;
			buttons[i].style.color = "White";
		} else{
			buttons[i].style.color = modeColor;
			buttons[i].style.backgroundColor = "White";
		}
	}
}


// modeHandler for Switching container and square size depending
// on the number of squares visible.

// And now also for changing to appropriate themes.

function modeHandler(){
	$(".square").removeClass("smaller insane");
	$(".container").removeClass("smallerContainer insaneContainer");
	$(".btrBtn").removeClass("insaneTheme hardTheme mediumTheme easyTheme");
 	$("h1").removeClass("insaneTheme hardTheme mediumTheme easyTheme");
	if (numberOfSquares === 9){
		$(".square").addClass("smaller");
	    $(".container").addClass("smallerContainer");
	    modeColor = "rgb(242, 99, 16)";
	    themeAdder();
	} else if (numberOfSquares === 21){
		$(".square").addClass("insane");
	    $(".container").addClass("insaneContainer");
	    modeColor = "rgb(247, 17, 17)";
	    themeAdder();
	} else{
		$(".square").removeClass("insane smaller").addClass("square");
	    $(".container").removeClass("insaneContainer smallerContainer").addClass("container");
	    if (numberOfSquares === 6){
		    modeColor = "rgb(70, 130, 180)";
		    themeAdder();
	    } else{
			modeColor = "rgb(0, 232, 112)";
			themeAdder();
	    }
	}
}

//if(window.innerWidth < 805){
//	alert("HOMO")
//};


// insultPicker for picking the appropriate insult
// depending on the number of wrong guesses.

function insultPicker(){
	if(fails > 6){
		$randomInsult = insults2[Math.floor(Math.random() * insults2.length)];
	} else if(fails > 3){
		$randomInsult = insults1[Math.floor(Math.random() * insults1.length)];
	} else{
		$randomInsult = insults[Math.floor(Math.random() * insults.length)];
	}
}

// Basic setup
function setup(){
	resetButton.addEventListener("click", reset); // voi lyhentää
	
	colorDisplay.textContent = pickedColor;
	
	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	
		squares[i].addEventListener("click", function(){
	
			let clickedColor = this.style.backgroundColor;
	
			if(clickedColor === pickedColor){
				if(fails > 19){
					messageDisplay.textContent = "You literally picked the last one.";
				}
				else if(fails > 10){
					messageDisplay.textContent = "You weren't even trying, were you.";
				}
				else if(fails > 5) {
					messageDisplay.textContent = "That was painful...";
				} else if(fails > 2){
					messageDisplay.textContent = "Finally...";
				} else{
					messageDisplay.textContent = "Correct!";
				}
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "New game?";
				squaresPressed++; // ????
				checkWins();
				if (autoplay.checked == true) {
					setTimeout(reset, 700);
				}
			} else{ // ------- else if?
				if(this.style.backgroundColor != "rgb(35, 35, 35)"){
					insultPicker();
					messageDisplay.textContent = $randomInsult;
					fails++;
				}
				this.style.backgroundColor = "#232323";
				checkWins();
			}
		}); 
	}
}


function checkWins(){
	if (resetButton.textContent == "New game?" && squaresPressed === 1) {
		wins++;
		winDisplay();
	} else{
		squaresPressed++;
		wins = 0;
		winDisplay(); // ton functionin voi vaan korvata winCounter.textcontent = 0, koska
		// se on ainut asia mitä voitapahtuu jolloin koko functionii ei tarvi
		// eikä tarvi välttämättä yhtää mitää
	}
}

function winDisplay(){
	if (wins < 1) {
		winCounter.textContent = "0";
	} else{
		winCounter.textContent = wins;
	}
}

// function discoMode(){
// 	if(discoButton.classList.contains("selected")){
// 		body.style.transition = "all " + 1 + "s";
// 		$(".square").css("transition", "all 0.2s")
// 		$("h1").css("transition", "all 0.2s")
// 		$("h1").css("font-size", "128px")
// 		h1.innerHTML = "Disco Disco Uhh Uhh"
// 		window.setTimeout(reset, 100)	
// 	}
// }

// discoButton.addEventListener("click", discoMode);


function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New colors";
	messageDisplay.textContent = "";
	h1.style.backgroundColor = modeColor;
	//$(".square").slideUp() // VOIS TOIMII KAIKKI EKA YLÖS JA SIT ALAS
	// NE MITKÄ PITÄÄ ----------------------
	fails = 0;
	squaresPressed = 0;
	modeHandler();
	for(let i = 0; i < squares.length; i++){
 		if(colors[i]){
 			//$(".square:eq(" + i + ")").slideDown();
 			squares[i].style.display = "block";
 			squares[i].style.backgroundColor = colors[i];
 		}
 		else{
 			//$(".square:eq(" + i + ")").slideUp();
 			squares[i].style.display = "none";
 		}
	}
}

function changeColors(color){
	for(let i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// Generating random colors for all of the squares.

function generateRandomColors(num){
	let arr = [];
	for(let i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

setup();
reset();

//if(discoButton.classList.contains("selected")){
//	body.style.transition = "all " + 1 + "s";
//	$(".square").css("transition", "all 0.2s")
//	$("h1").css("transition", "all 0.2s")
//	$("h1").css("font-size", "128px")
//	h1.innerHTML = "Disco Disco Uhh Uhh"
//	window.setInterval(reset, 100)	
//}
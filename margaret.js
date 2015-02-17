function yesClick() {
	document.getElementById("hiddenQuestions").style.display = "block";
	document.getElementById("hiddenButtons").style.display = "block";
	document.getElementById("startQuestions").innerHTML = "OK, we need to ask you a few questions.";
	document.getElementById("yesQuestions").innerHTML = "OK, ask me anything.";
	document.getElementById("noQuestions").innerHTML = "No way, I'm not telling you anything!";
}

function noClick() {
	document.getElementById("hiddenQuestions").style.display = "block";
	document.getElementById("startQuestions").innerHTML = "Why not? She is cute and smart. You must just be a loser.";
}

function yesQuestions() {
	var userName = prompt("What is your full name?");
	document.getElementById("hiddenQuestions2").style.display = "block";
	document.getElementById("hiddenFiction").style.display = "block";
}

function yesBoy() {
  document.getElementById("boyAnswer").innerHTML = "Margaret isn't allowed to date boys without her sister's permission. You'll have to take this up with Carmen.<br /> <strong>May the odds be ever in your favor.</strong>";
}

function noBoy() {
	document.getElementById("boyAnswer").innerHTML = "Are you trying to trick us? It isn't going to work. You'll still have to talk to Carmen.";
}

function yesGross() {
	document.getElementById("grossAnswer").innerHTML = "At least you are honest....";
}

function noGross() {
	document.getElementById("grossAnswer").innerHTML = "Liar. All boys are gross.";
}

function yesFiction() {
	document.getElementById("fictionAnswer").innerHTML = "As high as her expectations are, you pretty much have to be a fictional character. OK, <em>You</em> may date Margaret.";
	document.getElementById("hiddenFiction").style.display = "none";
}

function noFiction() {
	document.getElementById("fictionAnswer").innerHTML = "As fake as you are acting, I really thought you were fictional. You still cannot date Margaret."
}

function yesIntelligent() {
	document.getElementById("intelligentAnswer").innerHTML = "You may want to reconsider your answer here. Most guys who date Margaret are never seen again.";
}

function noIntelligent() {
	document.getElementById("intelligentAnswer").innerHTML = "Finally...an answer we can believe.";
}

function angryCarmen() {
	alert("Tracking your location.... please wait....");
	document.getElementById("hiddenAngry").style.display = "block";
	document.getElementById("dateAnswer").innerHTML = "Uh-oh! You've made Carmen mad. She's coming to beat you up now. Better run!!";
	document.getElementById("hiddenPicture").style.display = "block";
}

function yesFight() {
	document.getElementById("fightAnswer").innerHTML = "You'll have a chance to find out. Carmen's on her way!";
}

function noFight() {
	document.getElementById("fightAnswer").innerHTML = "You better run then. Carmen is already on her way.";
}
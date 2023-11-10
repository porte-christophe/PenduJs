let motADeviner = "";
let motDeviner = "";
let listLettreMotDeviner =[];
let longeur = 0;
let essais = 0;
function resetGame(){
	document.getElementsByName("motADeviner")["0"].value=null;
	document.getElementsByName("lettreATester")["0"].value=null;
	essais = 0;
	location.reload();
}
function initialisation(){
	for (let i = 0.; i < longeur; i=i+1) {
		motDeviner+="-";
	}
	return motDeviner;
}
function initGame(){
	motADeviner = document.getElementsByName("motADeviner")["0"].value.toUpperCase();
	longeur = motADeviner.length;
	if (motADeviner!="") {
		motDeviner = initialisation();
		listLettreMotDeviner=motDeviner.split("");
		document.getElementsByName("motADeviner")["0"].value=null;
		document.getElementById("afficheMotDeviner").innerText = motDeviner;
		document.getElementById("jeu").hidden = false;	
		document.getElementById("initGame").disabled = true;
	}else{
		resetGame();
	}
}
function setMotDeviner(lettreATester){
	for (let i = 0; i < longeur; i = i+1) {
			if (lettreATester==motADeviner.charAt(i)) {
				listLettreMotDeviner[i] = lettreATester;
			}
	}
	motDeviner = listLettreMotDeviner.toString().replaceAll(",","");
	document.getElementById("afficheMotDeviner").innerText = motDeviner;
}
function testVictoire(boolres){
	if (boolres) {
		alert(`Vous avez gagnés !\nLe Mot à deviner était bien: ${motADeviner}`);
	}else{
		alert(`Vous êtes pendu !\nLe Mot à deviner était: ${motADeviner}`);
	}
	resetGame();
}
function testerLaLettre(){
	let lettreATester = document.getElementsByName("lettreATester")["0"].value.toUpperCase();
	document.getElementsByName("lettreATester")["0"].value=null;
	if(motADeviner.indexOf(lettreATester)==-1){
		if (essais==0) {
			document.getElementById("mauvaisesLettres").innerText = "";
		}
		document.getElementById("mauvaisesLettres").innerText += lettreATester;
		essais +=1;
		if (essais==10) {testVictoire(false);}
		
	}else{
		setMotDeviner(lettreATester);
		if (motDeviner==motADeviner) {
			setTimeout(() => {
				testVictoire(true);
			}, 500);
			
		}
	}
}
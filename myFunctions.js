let selectmort = document.getElementById("styledemort");
let motADeviner = "";
let motDeviner = "";
let listLettreMotDeviner =[];
let longeur = 0;
let essais = 0;
let image = document.getElementById("imgsource");
let imagecursor = 0;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function setImage(event){
	image.src = "images/"+ event.target.value;
	setTimeout(() => {
		//console.log(image.complete);
		//console.log(image.width)
		if (image.width==2000) {
			imagecursor = -200 ;
		}
	}, 500);	
}

selectmort.addEventListener("change", (event) => {
	setImage(event);
	document.getElementById("initGame").disabled = false;
});



function resetGame(){
	document.getElementsByName("motADeviner")["0"].value=null;
	document.getElementsByName("lettreATester")["0"].value=null;
	document.getElementById("styledemort").value="0";
	document.getElementById("initGame").disabled = true;
	document.getElementById("jeu").style.visibility = "hidden"
	image.width=0;
	essais = 0;
	imagecursor = 0;
	location.reload();
}
function initialisation(){
	for (let i = 0.; i < longeur; i=i+1) {
		motDeviner+="-";
	}
	return motDeviner;
}
function initGame(){
	document.getElementById("jeu").style.visibility = "visible";
	motADeviner = document.getElementsByName("motADeviner")["0"].value.toUpperCase();
	longeur = motADeviner.length;
	if (motADeviner!="") {
		motDeviner = initialisation();
		listLettreMotDeviner=motDeviner.split("");
		document.getElementsByName("motADeviner")["0"].value=null;
		document.getElementById("afficheMotDeviner").innerText = motDeviner;
		document.getElementById("jeu").hidden = false;	
		document.getElementById("initGame").disabled = true;
		document.getElementById("styledemort").disabled = true;
		//ctx.drawImage(image,sx,sy,sLargeur,sHauteur,dx,dy,dLargeur,dHauteur);
		if (imagecursor==0) {
			ctx.drawImage(image,imagecursor,0,200,200,0,0,200,200);
		}
		
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
		imagecursor +=200;
		ctx.drawImage(image,imagecursor,0,200,200,0,0,200,200);
		
		if (essais==10) {
			setTimeout(() => {
				testVictoire(false);
			}, 500);
		}
		
	}else{
		setMotDeviner(lettreATester);
		if (motDeviner==motADeviner) {
			setTimeout(() => {
				testVictoire(true);
			}, 500);
			
		}
	}
}
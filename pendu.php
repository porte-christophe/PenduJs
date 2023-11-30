<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8" />
	<title>Pendu</title>
	<link rel="stylesheet" type="text/css" href="pendu.css">
</head>
<body>
	<img id="imgsource" src="" hidden="true">
	<header>
		<nav>
			<button onclick="resetGame()">Recommencer la partie</button>
			<input type="text" id="inp1" name="motADeviner" placeholder="entrer ici le mot à deviner (sans accent)">
			<select id="styledemort">
				<option value="0" selected>choisir</option>
				<option value="pendu.jpg">pendu</option>
				<option value="buchet.jpg">buchet</option>
				<option value="guillotine.jpg">guillotine</option>
				<option value="dalek.jpg">Spéciale 23-11</option>
				<option value="imagetest.jpg">Falling ball</option>
			</select>
			<button onclick="initGame()" id="initGame" disabled="true">Lancer la partie</button>
		</nav>
	</header>
	<p id="afficheMotDeviner">Ici s'affiche les tirets (-).</p>
	<main id="jeu" hidden="true">
		<input type="text" id="lat" name="lettreATester" minlength="1" maxlength="1" placeholder="entrer ici la lettre à tester">
		<button onclick="testerLaLettre()">Tester la lettre</button>
		<p id="mauvaisesLettres">Ici s'affiche les lettres testées qui ne sont pas dans le mot</p>
		<canvas id="canvas" width="200px" height="200px"></canvas>
	</main>
	<script type="text/javascript" src="myFunctions.js"></script>
</body>
</html>
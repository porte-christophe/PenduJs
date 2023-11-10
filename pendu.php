<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8" />
	<title>Pendu</title>
	<link rel="stylesheet" type="text/css" href="pendu.css">
</head>
<body>
	<header>
		<nav>
			<button onclick="resetGame()">Recommencer la partie</button>
			<input type="text" id="inp1" name="motADeviner" placeholder="entrer ici le mot à deviner (sans accent)">
			<button onclick="initGame()" id="initGame">Lancer la partie</button>
		</nav>
	</header>
	<p id="afficheMotDeviner">Ici s'affiche le mot deviner.</p>
	<main id="jeu" hidden="true">
		<input type="text" id="lat" name="lettreATester" minlength="1" maxlength="1" placeholder="entrer ici la lettre à tester">
		<button onclick="testerLaLettre()">Tester la lettre</button>
		<p id="mauvaisesLettres">Ici s'affiche les lettres testées qui ne sont pas dans le mot</p>
	</main>
	<script type="text/javascript" src="myFunctions.js"></script>
</body>
</html>
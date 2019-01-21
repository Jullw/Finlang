function tarkista() {

	var kysymys1 = document.testi.kysymys1.value;
	var kysymys2 = document.testi.kysymys2.value;
	var kysymys3 = document.testi.kysymys3.value;
	var kysymys4 = document.testi.kysymys4.value;
	var oikein = 0;




	switch (kysymys1) {
		case null:
		case "":
			console.log("Jotain meni pieleen");
			break;
		case "huomenta":
			document.getElementById('huomenta').style.color = "green";
			oikein++;
			break;
		case "aamu":
			document.getElementById('aamu').style.color = "red";
			break;
		case "aamua":
			document.getElementById('aamua').style.color = "red";
			break;
	}

	switch (kysymys2) {
		case null:
		case "":
			console.log("Jotain meni pieleen");
			break;
		case "paivaa":
			document.getElementById('paivaa').style.color = "green";
			oikein++;
			break;
		case "hyva":
			document.getElementById('hyva').style.color = "red";
			break;
		case "paiva":
			document.getElementById('paiva').style.color = "red";
			break;
	}

	switch (kysymys3) {
		case null:
		case "":
			console.log("Jotain meni pieleen");
			break;
		case "iltaa":
			document.getElementById('iltaa').style.color = "green";
			oikein++;
			break;
		case "hyvaa":
			document.getElementById('hyvaa').style.color = "red";
			break;
		case "ilta":
			document.getElementById('ilta').style.color = "red";
			break;
	}
	switch (kysymys4) {
		case null:
		case "":
			console.log("Jotain meni pieleen");
			break;
		case "yota":
			document.getElementById('yota').style.color = "green";
			oikein++;
			break;
		case "yot":
			document.getElementById('yot').style.color = "red";
			break;
		case "yo":
			document.getElementById('yo').style.color = "red";
			break;
	}

	var viestit = ["Kaikki oikein Hyvää työtä", "Yritä uudelleen"];
	var tulos;

	if (oikein == 4) {
		tulos = 0;
		document.getElementById('viesti').style.color = "green";
	} else {
		tulos = 1;
		document.getElementById('viesti').style.color = "red";
	}
	document.getElementById("viesti").innerHTML = viestit[tulos];
	document.getElementById("oikeinmeni").innerHTML = "Sait " + oikein + " oikein";
}


function tehtava2() {
	var huomenta = document.testi.huomenta.value;
	var paivaa = document.testi.paivaa.value;
	var iltaa = document.testi.iltaa.value;
	var yota = document.testi.yota.value;
	var oikein = 0;

	switch (huomenta) {
		case null:
		case "":
			console.log("Jotain meni pieleen");
			break;
		case "Hyvää huomenta.":
			document.getElementById('aamu').style.color = "green";
			document.getElementById('aamu2').style.color = "green";
			oikein++;
			break;
		case "Hyvää huomenta!":
			document.getElementById('aamu').style.color = "green";
			document.getElementById('aamu2').style.color = "green";
			oikein++;
			break;
		default:
			document.getElementById('aamu').style.color = "red";
			document.getElementById('aamu2').style.color = "red";
	}


	switch (paivaa) {
		case null:
		case "":
			console.log("Jotain meni pieleen");
			break;
		case "Hyvää päivää.":
			document.getElementById('paiva').style.color = "green";
			document.getElementById('paiva2').style.color = "green";
			oikein++;
			break;
		case "Hyvää päivää!":
			document.getElementById('paiva').style.color = "green";
			document.getElementById('paiva2').style.color = "green";
			oikein++;
			break;
		default:
			document.getElementById('paiva').style.color = "red";
			document.getElementById('paiva2').style.color = "red";
	}
	switch (iltaa) {
		case null:
		case "":
			console.log("Jotain meni pieleen");
			break;
		case "Hyvää iltaa.":
			document.getElementById('ilta').style.color = "green";
			document.getElementById('ilta2').style.color = "green";
			oikein++;
			break;
		case "Hyvää iltaa!":
			document.getElementById('ilta').style.color = "green";
			document.getElementById('ilta2').style.color = "green";
			oikein++;
			break;
		default:
			document.getElementById('ilta').style.color = "red";
			document.getElementById('ilta2').style.color = "red";
	}
	switch (yota) {
		case null:
		case "":
			console.log("Jotain meni pieleen");
			break;
		case "Hyvää yötä.":
			document.getElementById('yo').style.color = "green";
			document.getElementById('yo2').style.color = "green";
			oikein++;
			break;
		case "Hyvää yötä!":
			document.getElementById('yo').style.color = "green";
			document.getElementById('yo2').style.color = "green";
			oikein++;
			break;
		default:
			document.getElementById('yo').style.color = "red";
			document.getElementById('yo2').style.color = "red";
	}
	var viestit = ["Kaikki oikein Hyvää työtä", "Yritä uudelleen"];
	var tulos;

	if (oikein == 4) {
		tulos = 0;
		document.getElementById('viesti').style.color = "green";
	} else {
		tulos = 1;
		document.getElementById('viesti').style.color = "red";
	}
	document.getElementById("viesti").innerHTML = viestit[tulos];
	document.getElementById("oikeinmeni").innerHTML = "Sait " + oikein + " oikein";
}



function kirjaudu() {

	var kayttajaNimi = document.rekisteri.kayttaja.value;
	var sahkoPosti = document.rekisteri.sahkoposti.value;
	var salasana1 = document.rekisteri.salasana.value;
	var salasana2 = document.rekisteri.varmistaSala.value;


	var kayttajaTasmaa = "Käyttäjänimi on OK";
	var kayttajaEiTasmaa = "Käyttäjänimi pitää olla vähintään 5 merkkiä pitkä";
	var sahkopostiTasmaa = "Sähköposti on OK";
	var sahkopostiEiTasmaa = "Sähköpostiin kuuluu @ merkki!";
	var eiTasmaa = "Salasanat eivät täsmää. Yritä uudelleen";
	var tasmaa = "Rekistöröinti onnistunut";
	var selvennys ="Salasana pitää olla vähintään 8 merkkiä pitkä";


	var salasanaPituus1 = salasana1.length;
	var salasanaPituus2 = salasana2.length;
	var salasanaPituus = salasanaPituus1 + salasanaPituus2;

	if(kayttajaNimi.length >= 5 ){
		document.getElementById("kayttajaVarmista").innerHTML = kayttajaTasmaa;
		document.getElementById('kayttajaVarmista').style.color = "green";
	}else{
		document.getElementById("kayttajaVarmista").innerHTML = kayttajaEiTasmaa;
		document.getElementById('kayttajaVarmista').style.color = "red";
	}

	if(sahkoPosti.includes("@")){
		document.getElementById("sahkopostiVarmista").innerHTML = sahkopostiTasmaa;
		document.getElementById('sahkopostiVarmista').style.color = "green";
	}else{
		document.getElementById("sahkopostiVarmista").innerHTML = sahkopostiEiTasmaa;
		document.getElementById('sahkopostiVarmista').style.color = "red";
	}


	if (salasanaPituus >= 16) {
		if (salasana1 == salasana2) {
			document.getElementById("varmista").innerHTML = tasmaa;
			document.getElementById('varmista').style.color = "green";
			myBrowserWindow.webContents.on('new-window', (event, url) => {
  			event.preventDefault()
  			const win = new BrowserWindow({show: false})
  			win.once('ready-to-show', () => win.show())
  			win.loadURL(https://jullw.github.io/Finlang/eiDynaaminen.html)
  			event.newGuest = win)
		}
	} else {
		document.getElementById("varmista").innerHTML = eiTasmaa;
		document.getElementById("selvennys").innerHTML = selvennys;
	}
}


function kirjaudu2() {

	var kayttajaNimi = document.rekisteri.kayttaja.value;
	var salasanaSala = document.rekisteri.salasana.value;



	var kayttajaTasmaa = "Käyttäjänimi on OK";
	var kayttajaEiTasmaa = "Käyttäjänimi pitää olla vähintään 5 merkkiä pitkä";
	var salasanaOk = "Salasana OK!";
	var selvennys ="Salasana pitää olla vähintään 8 merkkiä pitkä ja nykyinen salasana on väärin lol";



	if(kayttajaNimi.length >= 5 ){
		document.getElementById("kayttajaVarmista").innerHTML = kayttajaTasmaa;
		document.getElementById('kayttajaVarmista').style.color = "green";
	}else{
		document.getElementById("kayttajaVarmista").innerHTML = kayttajaEiTasmaa;
		document.getElementById('kayttajaVarmista').style.color = "red";
	}

	if (salasanaSala.length >= 8) {
			document.getElementById("salasanaVarmista").innerHTML = salasanaOk;
			document.getElementById('salasanaVarmista').style.color = "green";
		
			myBrowserWindow.webContents.on('new-window', (event, url) => {
  			event.preventDefault()
  			const win = new BrowserWindow({show: false})
  			win.once('ready-to-show', () => win.show())
  			win.loadURL(https://jullw.github.io/Finlang/eiDynaaminen.html)
  			event.newGuest = win
	}) else {
		document.getElementById("selvennys").innerHTML = selvennys;
	}
}

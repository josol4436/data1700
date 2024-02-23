function skrivUt(){
    const navn = document.getElementById("navnInn").value;
    const alder = document.getElementById("alderInn").value;
    let ut = "";

    if (alder>0){
        ut+= "Navn: " + navn + "<br>Alder: " + alder;
    }
    else {
        alert("Alder må være mer enn null!");
    }
    document.getElementById("utFelt").innerHTML = ut;
}


function cTilF(C){
    const F = (9/5)*(Number(C))+32;
    let utF = document.getElementById("fahrenheitInn");
    utF.value = F;
}
function fTilC(F){
    const C = (5/9)*(Number(F)-32);
    let utC = document.getElementById("celciusInn");
    utC.value = C;

}

//Lag en HTML-kalkulator med to inputfelt og fire knapper, en for hver av regneartene +, - ,* og /.
// Lag så JavaScript-kode som avhengig av hvilken knapp som er trykket viser resultatet av
// regnestykket. Det skal også valideres at inputfeltene bare kan inneholde tall (også dette i form
// av JavaScript-kode). Feilmeldinger skal også vises dersom det blir skrevet inn noe annet enn tall i
// inputboksene.


function pluss() {
    const tall1 = parseInt(document.getElementById("tall1").value);
    const tall2 = parseInt(document.getElementById("tall2").value);
    let kalkUt;
    if (isNaN(tall1) || isNaN(tall2)) {
        alert("Du må skrive inn et tall");
    } else {
        kalkUt = tall1 + tall2;
        document.getElementById("utTall").innerHTML = kalkUt;
    }
}
function minus(){
    const tall1 = parseInt(document.getElementById("tall1").value);
    const tall2 = parseInt(document.getElementById("tall2").value);
    let kalkUt;
    if (isNaN(tall1) || isNaN(tall2)) {
        alert("Du må skrive inn et tall");
    }
    else {
        kalkUt = tall1 - tall2;
        document.getElementById("utTall").innerHTML = kalkUt;
    }
}
function gange(){
    const tall1 = parseInt(document.getElementById("tall1").value);
    const tall2 = parseInt(document.getElementById("tall2").value);
    let kalkUt;
    if (isNaN(tall1) || isNaN(tall2)) {
        alert("Du må skrive inn et tall");
    }
    else {
        kalkUt = tall1 * tall2;
        document.getElementById("utTall").innerHTML = kalkUt;
    }
}
function dele(){
    const tall1 = parseInt(document.getElementById("tall1").value);
    const tall2 = parseInt(document.getElementById("tall2").value);
    let kalkUt;
    if (isNaN(tall1) || isNaN(tall2)) {
        alert("Du må skrive inn et tall");
    }
    else {
        kalkUt = tall1 / tall2;
        document.getElementById("utTall").innerHTML = kalkUt;
    }
}

//Oppgave 4

const personRegister = [];
function registrerNy(){
    const innNavn = document.getElementById("navn").value;
    const innAdresse = document.getElementById("adresse").value
    const innTelefonnr = document.getElementById("telefonnr").value;
    const nyPerson = {
        navn: innNavn,
        adresse: innAdresse,
        telefonnr: innTelefonnr
    };

    personRegister.push(nyPerson);

}
function visPersonRegister() {
    personRegister.sort();
    // skriv ut
    let ut = "<table><tr>" +
        "<th>Navn</th><th>Adresse</th><th>Telefonnr</th>" +
        "</tr>";
    let teller = 0;
    for (let p of personRegister) {
        if(teller % 2 == 0) {
            ut+="<tr>";
            ut+="<td>"+p.navn+"</td><td>"+p.adresse+"</td><td>"+p.telefonnr+"</td>";
            ut+="</tr>";
        }
        else {
            ut+="<tr>";
            ut+="<td><strong>"+p.navn+"</strong></td><td><strong>"+p.adresse+
                "</strong></td><td><strong>"+p.telefonnr+"</strong></td>";
            ut+="</tr>";
        }
        teller++;
    }
    ut += "</table>";
    document.getElementById("personRegister").innerHTML=ut;
}


//EKSTRAOPPGAVE 1
//Lag en gjøremålsliste (todo-liste). Det skal være et tekstfelt hvor brukeren kan legge til gjøremål. Ved onchange skal verdien av skriv inn feltet legges til som et gjøremål i en HTML-liste.
// Ved siden av hvert gjøremål skal det være en sjekkboks som brukeren kan krysse av hvis oppgaven er ferdig.
// Tips: Bruk metoden dinTabell.insertAdjacentHTML('beforeend', "todo html her") i stedet for innerHTML siden det vil resette alle sjekkboksene hver gang det legges til et element.

function nyttGjøremål(){
    let tabell = "<table>";
    const gjøremålUt = document.getElementById("gjøremålUt");
    const gjøremålInn = document.getElementById("gjøremålInn");
    tabell += "<tr><td>";
    tabell += gjøremålInn.value;
    tabell += "</td><td><input type='checkbox'></td></tr>";
    gjøremålInn.value = "";
    gjøremålUt.insertAdjacentHTML('beforeend', tabell);
}



//Ekstraoppgave 2
// Utvid forige oppgave med å lage enda en liste. Den første listen skal nå kun inneholde uferdige gjøremål og den andre kun ferdige. Du skal også markere alle ferdige gjøremål med en strek gjennom de.
// Bruk textDecoration = "line-through".
// Tips: Gi en unik id til alle gjøremålene og kall en funksjon med denne id'en som parameter hvis sjekkboksen sjekkes/usjekkes. Du kan flytte et element fra en liste til en annen med
// metoden denAndreListen.appendChild(dittGjøremål)
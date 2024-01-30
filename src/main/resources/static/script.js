//JAVASCRIPT 1
function oppgave1() {
    document.write("Hei verden!");
}
function oppgave2(){
    alert("Hei verden!");
}
function oppgave3(oppg3){
       document.write(oppg3);
}
function oppgave4(oppg4){
     alert(oppg4);
}
function oppgave5(oppg5) {
     console.log(oppg5);
}
function oppgave6(oppgave6inn){
    oppgave6inn = oppgave6inn.fontcolor("red");
      //Hvorfor er det strek gjennom fontcolor??
    document.write(oppgave6inn);
}
function oppgave7(oppg7){
    oppg7 = oppg7.toUpperCase();
    alert(oppg7);
}
function oppgave8(){
    const en = 1;
    console.log(en);
}
let sum = 0;
function oppgave9(){
        sum += 1;
        console.log(sum);
}
let ut = 0;
function oppgave10(){
    ut += 1;
    const utMelding1 = "Du har trykket på knappen ";
    const utMelding2 = " antall ganger.";
    console.log(utMelding1 + ut + utMelding2);
}
//JAVASCRIPT 2
function visPersonRegister() {
    const personRegister = [];
    const person1 = {
        navn: "Line Jensen",
        adresse: "Askerveien 82",
        telefonnr: "12334455"
    };
    personRegister.push(person1);
    const person2 = {
        navn: "Ole Hansen",
        adresse: "Osloveien 82",
        telefonnr: "99887766"
    };
    personRegister.push(person2);
    const person3 = {
        navn: "Johannes Sæther",
        adresse: "Dalsbergsstien 1",
        telefonnr: "92812345"
    };
    personRegister.push(person3);
    const person4 = {
        navn: "Hege Skjøtskift",
        adresse: "Ekrekroken 8",
        telefonnr: "48005692"
    };
    personRegister.push(person4);
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
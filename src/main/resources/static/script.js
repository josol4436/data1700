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
function loopTest(){
    let ut = "";
    for (let i = 0; i < 10; i++){
        ut += i + " ";
    }
    console.log(ut);
}

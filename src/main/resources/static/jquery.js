$(function(){
    $("#knapp").click(function (){
        let navnet = $("#innNavn").val();
        $("#navn").text(navnet);

        let alder = $("#innAlder").val();
        if (Number(alder) < 0 || alder === "e"){
            alert("Skriv inn ett tall som er større enn null");
        }
        else {
           $("#alder").text(alder);
        }
    });
    
    $("#knapp").mouseover(function (){
        $("html,body").css("cursor","pointer");
        $(this).css("color","blue");
    });
    $("#knapp").mouseleave(function() {
        $("html,body").css("cursor","default");
        $(this).css("color","black");
    });
});

$(function (){
    $("#celciusInn").change(function (){
        let Cinn = $("#celciusInn").val();
        const F = (9/5)*(Number(Cinn))+32;
        $("#fahrenheitInn").val(F);
    });
    $("#fahrenheitInn").change(function (){
        let Finn = $("#fahrenheitInn").val();
        const C = (5/9)*(Number(Finn)-32);
        $("#celciusInn").val(C);
    });
});

$(function (){
    $("input:radio[name=tegn]").change(function (){
        const tegn = $("input:radio[name=tegn]:checked").val();
        const tall1 = Number($("#tall1").val());
        const tall2 = Number($("#tall2").val());
        //if (tall1 === "NaN" || tall2 === "NaN"){ input valideringen vil ikke:(( Numbers og Strings har ingenting til felles tydligvis...
        //    alert("Skriv inn begge tallene først!");
        //}
        //    else{
        if (tegn === "pluss"){
            $("#utTall").html(tall1 + tall2);
        }
        else if (tegn === "minus"){
            $("#utTall").html(tall1 - tall2);
        }
        else if (tegn === "gange"){
            $("#utTall").html(tall1 * tall2);
        }
        else if (tegn === "dele"){
            $("#utTall").html(tall1 / tall2);
        }
        //}
    });
});
/*
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
 */
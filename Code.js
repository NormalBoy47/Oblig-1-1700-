window.onload=oppstart;
let Billetter = [];
function oppstart(){
    document.getElementById("Kjop").onclick=Kjop;
    document.getElementById("Slett").onclick=Slett;
};

function Kjop(){
    let Teller = 0;
    var BilletKjop = {
        film : document.getElementById("film").value,
        Antall : document.getElementById("Antall").value,
        ForNavn : document.getElementById("ForNavn").value,
        EtterNavn : document.getElementById("EtterNavn").value,
        Telefon : document.getElementById("Nummer").value,
        Epost : document.getElementById("Epost").value
    };

    if (document.getElementById("Antall").value == "") {
        document.getElementById("AError").innerHTML = "Du må skrive inn et antall!";
        Teller++;
    } 
    else{
        document.getElementById("AError").innerHTML = "";
    }

    if (document.getElementById("ForNavn").value == "") {
        document.getElementById("FError").innerHTML = "Du må skrive inn et fornavnet!";
        Teller++;
    } 
    else{
        document.getElementById("FError").innerHTML = "";
    }

    if (document.getElementById("EtterNavn").value == "") {
        document.getElementById("EError").innerHTML = "Du må skrive inn et etternavn!";
        Teller++;
    } 
    else{
        document.getElementById("EError").innerHTML = "";
    }

    if (document.getElementById("Nummer").value == "") {
        document.getElementById("NMError").innerHTML = "Du må skrive inn et nummer!";
        Teller++;
    } 
    else{
        document.getElementById("NMError").innerHTML = "";
    }

    if (document.getElementById("Epost").value == "") {
        document.getElementById("EPError").innerHTML = "Du må skrive inn en E-post";
        Teller++;

    } 
    else{
        document.getElementById("EPError").innerHTML = "";
    }

    if (Teller === 0) {
        Billetter.push(BilletKjop);
        ClearInput();
        vis();
    }
    console.log(Billetter);
}
function Slett(){
    Billetter = [];
    document.getElementById("Liste").innerHTML = "";
    console.log (Billetter);
}
function ClearInput(){
    document.getElementById("Antall").value = "";
    document.getElementById("ForNavn").value = "";
    document.getElementById("EtterNavn").value = "";
    document.getElementById("Nummer").value = "";
    document.getElementById("Epost").value = "";
}
function vis(){
    let ut = "<table><tr>"+
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etteravn</th><th>Telefon</th><th>E-post</th>"+
    "</tr>";
    for(let p of Billetter){
        ut += "<tr>";
        ut += "<td>"+p.film+"</td><td>"+p.Antall+"</td><td>"+p.ForNavn+"</td><td>"+p.EtterNavn+"</td><td>"+p.Telefon+"</td><td>"+p.Epost+"</td>";
        ut += "</tr>";
    }
    ut += "</table>";
    document.getElementById("Liste").innerHTML = ut;
}


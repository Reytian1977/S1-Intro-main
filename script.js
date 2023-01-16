function Ajouter(){
    let item = document.getElementById("desc").value;
    let prix = document.getElementById("valeur").value; // Ajouter prix
    let nouveauP = document.createElement("p");         // Créer une balise <p>
    let nouveauSpan = document.createElement("span");
    nouveauP.innerText = item+ " : ";
    nouveauSpan.innerText = prix + "$";
    document.getElementById("maList").append(nouveauP);   // Ajouter le paragraphe à la liste
    nouveauP.append(nouveauSpan);                                   // mettre le span à la fin du p

    // Mettre à jour le total
    let ancienPrix = document.getElementById("total").innerText;
    let nouveauPrix = +ancienPrix + +prix;                          // +variable : convertir en numérique
    document.getElementById("total").innerText = nouveauPrix;
}

console.log("Bonjour");
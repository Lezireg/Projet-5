//bouton de lancement du programme
document.getElementById("bouton").addEventListener("click", programme);

//Créer une citation
function programme() {

    //effacer les anciennes citations 
    document.getElementById("resultat").innerHTML = "";

    //choix jeu (liste déroulante)
    var listeJeu = document.getElementById("jeu");
    var choixJeu = listeJeu[listeJeu.selectedIndex].value;

    // choix nbr citations (liste déroulante)
    var nbrCit = document.getElementById("nbr");
    var nbrCitation = nbrCit[nbrCit.selectedIndex].value;

    //Boucle de création des citations
    for (var i = 1; i <= nbrCitation; i++) {
        genererCitation(choixJeu)
    }
};
// Création des citations

function genererCitation(choixJeu) {

    switch (choixJeu) {
        case "1":
            {
                var premierePartie = ["Réfléchissez constamment à la manière dont", "Si vous n’échouez pas,", "Si vous vous levez le matin en vous disant que l’avenir sera meilleur,", "J’aimerais bien mourir sur Mars,"];
                var deuxiemePartie = [" vous pourriez améliorer les choses et", " c’est que vous n’innovez pas", " c’est une belle journée", " mais pas"];
                var troisiemePartie = [" vous remettre en question.", " assez.", " sinon, ce n’en est pas une.", " pendant l’impact."];
                break
            }

        case "2":
            {
                var premierePartie = ["Ce qui reste éternellement incompréhensible dans la nature,", "C’est le devoir de chaque homme", "C’est le rôle essentiel du professeur", "En apparence, la vie n’a aucun sens,"];
                var deuxiemePartie = [" c’est qu’on puisse", " de rendre au monde", " d’éveiller la joie de travailler", " et pourtant,"];
                var troisiemePartie = [" la comprendre.", " au moins autant qu’il en a reçu.", " et de connaître.", " il est impossible qu’il n’y en ait pas un !"];
                break
            }
    }

    var debut = premierePartie[Math.floor(Math.random() * premierePartie.length)];
    var milieu = deuxiemePartie[Math.floor(Math.random() * deuxiemePartie.length)];
    var fin = troisiemePartie[Math.floor(Math.random() * troisiemePartie.length)];

    // Création des éléments liste et insertion dans html
    var resultatElt = document.createElement("li"); // Création d'un élément li
    resultatElt.textContent = "\"" + debut + milieu + fin + "\""; // Définition de son contenu textuel
    document.getElementById("resultat").appendChild(resultatElt); // Insertion du nouvel élément
};
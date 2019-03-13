//lancement du programme
console.log("bienvenue dans le générateur de citation");
console.log(" ");
initialisation();

//Créer une citation
function initialisation() {
    var commencer = prompt("Souhaitez vous générer une citation? \n oui/non?");
    if (commencer == "oui") {
        option();
    } else if (commencer == "non") {
        console.log(" ");
        console.log("au revoir");
    } else {
        console.log("choix incorrect");
        initialisation();
    }
}

function option (){
    var choixJeu = choixJeuCitation();
    var nbrCitation = choixNbrCitation();
    genererCitation(choixJeu, nbrCitation);
}

function choixJeuCitation() {
    var choixJeu = Number(prompt("Quel type de citation souhaitez vous générer? \nTapez 1 pour des citations d'Elon Musk \nTapez 2 pour des citations d'Albert Einstein"));
    if (choixJeu === 1 || choixJeu === 2) {
        return choixJeu;
    } else {
        console.log("choix incorrect");
        return choixJeuCitation();
    }
}

function choixNbrCitation() {
    var nbrCitation = Number(prompt("Combien de citations souhaitez vous générer (de 1 à 5) ?"));
    if (nbrCitation >= 1 && nbrCitation <= 5) {
        return nbrCitation;
    } else {
        console.log("choix incorrect");
        return choixNbrCitation();
    }
}

//fonction de génération des citations

function genererCitation(choixJeu,nbrCitation) {
    console.log("résultats : ")
    for (var i = 1; i <= nbrCitation; i++) {
        switch (choixJeu) {
            case 1:
                {
                    var premierePartie = ["Réfléchissez constamment à la manière dont", "Si vous n’échouez pas,", "Si vous vous levez le matin en vous disant que l’avenir sera meilleur,", "J’aimerais bien mourir sur Mars,"];
                    var deuxiemePartie = [" vous pourriez améliorer les choses et", " c’est que vous n’innovez pas", " c’est une belle journée", " mais pas"];
                    var troisiemePartie = [" vous remettre en question.", " assez.", " sinon, ce n’en est pas une.", " pendant l’impact."];
                    break
                }
    
            case 2:
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

        console.log("- " + debut + milieu + fin);
    }
    initialisation();
};


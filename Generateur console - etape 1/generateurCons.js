console.log("bienvenue dans le générateur de citation");

var premierePartie = ["Réfléchissez constamment à la manière dont", "Si vous n’échouez pas,", "Si vous vous levez le matin en vous disant que l’avenir sera meilleur,", "J’aimerais bien mourir sur Mars,"];
var deuxiemePartie = [" vous pourriez améliorer les choses et", " c’est que vous n’innovez pas", " c’est une belle journée", " mais pas"];
var troisiemePartie = [" vous remettre en question.", " assez.", " sinon, ce n’en est pas une.", " pendant l’impact."];

var debut = premierePartie[Math.floor(Math.random() * premierePartie.length)];
var milieu = deuxiemePartie[Math.floor(Math.random() * deuxiemePartie.length)];
var fin = troisiemePartie[Math.floor(Math.random() * troisiemePartie.length)];
console.log("résultat : ")
console.log("- " + debut + milieu + fin);
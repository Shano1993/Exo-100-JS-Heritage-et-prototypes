const Voiture = function (couleur, roues, marque, assurance, proprietaire) {
    Vehicule.call(this, couleur, 2, marque, assurance, proprietaire);
    this.assurance = assurance;
    this.proprietaire = proprietaire;
}

Voiture.passerAuCarWash = function (a) {
    a = "avec de l'eau !"
    return ("J'ai nettoyer mon véhicule " + a);
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.constructor = Voiture;



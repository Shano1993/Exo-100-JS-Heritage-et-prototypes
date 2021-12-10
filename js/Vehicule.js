function Vehicule(couleur, roues, marque) {
    this.couleur = couleur;
    this.roue = roues;
    this.marque = marque;
}

Vehicule.prototype.demarrer = function () {
    return ("La voiture " + this.couleur + " à " + this.roue + " roues" + " de la marque " + this.marque);
}

Vehicule.prototype.arreter = function () {
    console.log("Il faut éteindre le moteur");
}
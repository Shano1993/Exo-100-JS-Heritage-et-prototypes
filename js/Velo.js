const Velo = function (couleur, roues, marque, rayonRoues, typePeinture) {
    Vehicule.call(this, couleur, 2, marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;
}

Velo.monter = function () {
    return ("Je monte sur mon vélo");
}

Velo.prototype = Object.create(Vehicule.prototype);
Velo.constructor = Velo;
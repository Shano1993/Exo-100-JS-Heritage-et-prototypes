const opel = new Voiture("noir", 4, "Opel", "Assurtout", "Stefan");
console.log("La voiture est assurée chez " + opel.assurance + " et appartient à " + opel.proprietaire);
console.log(opel);

const bmx = new Velo("rouge", 2, "Bmx", 50, "métalisée");
console.log("Mon vélo a " + bmx.rayonRoues + " rayons" + " et est de couleur " + bmx.typePeinture);
console.log(bmx);
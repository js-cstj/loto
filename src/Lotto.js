export default class Lotto {
    static factoriel(nombre) {
        var resultat = 1;
        for (let i = 1; i <= nombre; i += 1) {
            resultat *= i;
        }
        return resultat;
    }
    static mauvais(nbTotal, nbPigees) {
        var n1 = 1;
        for (let i = 1; i <= nbTotal; i += 1) {
            n1 *= i;
        }
        var n2 = 1;
        for (let i = 1; i <= nbPigees; i += 1) {
            n2 *= i;
        }
        var n3 = 1;
        for (let i = 1; i <= (nbTotal - nbPigees); i += 1) {
            n3 *= i;
        }
        var resultat = n1 / n2 / n3;
        return resultat;
    }
    static probabilites(nbTotal, nbPigees) {
        var resultat = this.factoriel(nbTotal);
        resultat = resultat / this.factoriel(nbPigees);
        resultat = resultat / this.factoriel(nbTotal - nbPigees);
        return resultat;
    }
    static formater(nombre) {
        nombre = nombre.toString();
        var parties = [];
        while (nombre.length > 0) {
            parties.unshift(nombre.slice(-3));
            nombre = nombre.slice(0, -3);
        }
        var resultat = parties.join(" ");
        return resultat;
    }
}
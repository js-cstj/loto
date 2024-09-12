export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		// Récupérer le formulaire
		var formulaire = document.getElementById("loterie");
		// Ajouter des écouteurs d'événements pour les soumissions
		formulaire.addEventListener("submit", e => {
			e.preventDefault();
			this.calculer();
		});
		// Ajouter des écouteurs d'événements pour les changements
		formulaire.addEventListener("change", e => {
			this.calculer();
		});
		// Ajouter un écouteur d'événement pour le changement de la liste déroulante
		formulaire.predefini.addEventListener("change", e => {
			// Lorsque la liste déroulante change, mettre à jour autres les champs du formulaire
			// Récupérer la valeur de la liste déroulante
			var choix = formulaire.predefini.value;
			// Diviser la chaîne de caractères en deux parties
			var parties = choix.split("/");
			// Mettre à jour les champs du formulaire
			formulaire.nbBoulesPigees.value = parties[0];
			formulaire.nbBoulesTotal.value = parties[1];
		});
	}
	/**
	 * Calcule les probabilités de la loterie en fonction du nombre total de boules et du nombre de boules pigées.
	 * Met à jour le contenu HTML de l'élément avec l'ID "resultat" avec les probabilités formatées.
	 */
	static calculer() {
		// Récupérer les valeurs du formulaire
		var formulaire = document.getElementById("loterie");
		var nbBoulesTotal = formulaire.nbBoulesTotal.valueAsNumber;
		var nbBoulesPigees = formulaire.nbBoulesPigees.valueAsNumber;
		
		// Calculer les probabilités
		var probabilites = this.probabilites(nbBoulesTotal, nbBoulesPigees);
		
		// Mettre à jour le contenu HTML
		var resultat = document.getElementById("resultat");
		resultat.innerHTML = this.formater(probabilites);
	}
	/**
	 * Calcule la factorielle d'un nombre donné.
	 * La factorielle d'un nombre est le produit de tous les entiers positifs inférieurs ou égaux à ce nombre.
	 * @param {number} nombre - Le nombre dont on veut calculer la factorielle.
	 * @returns {number} La factorielle du nombre donné.
	 */
    static factorielle(nombre) {
        var resultat = 1;
        for (let i = 1; i <= nombre; i += 1) {
            resultat *= i;
        }
        return resultat;
    }
	/**
	 * Calcule la factorielle d'un nombre de manière récursive.
	 * Est donnée à titre d'exemple, mais n'est pas utilisée dans ce programme.
	 * @param {number} nombre - Le nombre pour lequel calculer la factorielle.
	 * @returns {number} La factorielle du nombre donné.
	 */
    static factorielle_recursif(nombre) {
		if (nombre <= 1) {
			return 1;
		} else {
			return nombre * this.factorielle_recursif(nombre - 1);
		}
	}
	
	/**
	 * Calcule les probabilités en utilisant la formule de la combinaison.
	 * La formule de la combinaison est le nombre de combinaisons possibles 
	 * de k éléments parmi n éléments : C(n, k) = n! / (k! * (n - k)!).
	 * @param {number} nbTotal - Le nombre total d'éléments.
	 * @param {number} nbPigees - Le nombre d'éléments tirés.
	 * @returns {number} - Le résultat de la combinaison.
	 */
    static probabilites(nbTotal, nbPigees) {
        var resultat = this.factorielle(nbTotal) / (this.factorielle(nbPigees) * this.factorielle(nbTotal - nbPigees));
        return resultat;
    }
	/**
	 * Formate un nombre en une chaîne de caractères avec des espaces tous les trois chiffres.
	 * Exemple: 1234567 devient "1 234 567".
	 * @param {number} nombre - Le nombre à formater.
	 * @returns {string} Le nombre formaté en chaîne de caractères avec des espaces.
	 */
    static formater(nombre) {
		// Transformer le nombre en chaîne de caractères sans décimales
        nombre = nombre.toFixed(0);
		// Chaque partie de trois chiffres sera stockée dans le tableau parties
        var parties = [];
		// Tant que le nombre a des chiffres
        while (nombre.length > 0) {
			// Ajouter les trois derniers chiffres au début du tableau parties
            parties.unshift(nombre.slice(-3));
			// Retirer les trois derniers chiffres du nombre
            nombre = nombre.slice(0, -3);
        }
		// Joindre les parties avec un espace
        var resultat = parties.join(" ");
        return resultat;
    }
}

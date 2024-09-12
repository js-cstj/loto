export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		// Récupérer le formulaire

		// Ajouter des écouteurs d'événements pour les soumissions

		// Ajouter des écouteurs d'événements pour les changements

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
		
		// Calculer les probabilités
		
		// Mettre à jour le contenu HTML
	}
	/**
	 * Calcule la factorielle d'un nombre donné.
	 * La factorielle d'un nombre est le produit de tous les entiers positifs inférieurs ou égaux à ce nombre.
	 * @param {number} nombre - Le nombre dont on veut calculer la factorielle.
	 * @returns {number} La factorielle du nombre donné.
	 */

	/**
	 * Calcule la factorielle d'un nombre de manière récursive.
	 * Est donnée à titre d'exemple, mais n'est pas utilisée dans ce programme.
	 * @param {number} nombre - Le nombre pour lequel calculer la factorielle.
	 * @returns {number} La factorielle du nombre donné.
	 */
	
	/**
	 * Calcule les probabilités en utilisant la formule de la combinaison.
	 * La formule de la combinaison est le nombre de combinaisons possibles 
	 * de k éléments parmi n éléments : C(n, k) = n! / (k! * (n - k)!).
	 * @param {number} nbTotal - Le nombre total d'éléments.
	 * @param {number} nbPigees - Le nombre d'éléments tirés.
	 * @returns {number} - Le résultat de la combinaison.
	 */

	/**
	 * Formate un nombre en une chaîne de caractères avec des espaces tous les trois chiffres.
	 * Exemple: 1234567 devient "1 234 567".
	 * @param {number} nombre - Le nombre à formater.
	 * @returns {string} Le nombre formaté en chaîne de caractères avec des espaces.
	 */
    static formater(nombre) {
		var resultat;
		// Transformer le nombre en chaîne de caractères sans décimales

		// Chaque partie de trois chiffres sera stockée dans le tableau parties

		// Tant que le nombre a des chiffres

			// Ajouter les trois derniers chiffres au début du tableau parties

			// Retirer les trois derniers chiffres du nombre

		// Joindre les parties avec un espace

        return resultat;
    }
}

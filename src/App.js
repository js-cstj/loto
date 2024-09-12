import Lotto from "./Lotto.js";
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		document.getElementById("btnCalculer").addEventListener("click", e => {
			this.calculer();
		});
		document.getElementById("predefini").addEventListener("change", e => {
			var select = e.target;
			var choix = select.value;
			var parties = choix.split("/");
			select.form.nbBoulesPigees.value = parties[0];
			select.form.nbBoulesTotal.value = parties[1];
		});
	}
	static calculer() {
		var loterie = document.getElementById("loterie");
		var nbBoulesTotal = loterie.nbBoulesTotal.valueAsNumber;
		var nbBoulesPigees = loterie.nbBoulesPigees.valueAsNumber;
		var probabilites = Lotto.probabilites(nbBoulesTotal, nbBoulesPigees);
		var resultat = document.getElementById("resultat");
		resultat.innerHTML = Lotto.formater(probabilites);
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();

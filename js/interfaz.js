class Interfaz {
	constructor() {
		//Init app at instance
		this.init();
		//Read result
		this.list = document.getElementById('resultado-eventos');
	}

	// Init app
	init() {
		// Call print categories from rest api
		this.printCategories();
	}
	// print categories
	printCategories() {
		const categoryList = eventBrite.obtainCategories()
			.then(categories => {
				const cats = categories.categories.categories;
				// Select cat list
				const selectCategory = document.getElementById('listado-categorias');

				//Iterate from each item in the obj <option>
				cats.forEach(cat => {
					const option = document.createElement('option');
					option.value = cat.id;
					option.appendChild(document.createTextNode(cat.name_localized));
					selectCategory.appendChild(option);
				});
			})
	}
	//Print messages:
	showMessage(msj, clases) {
		const div = document.createElement('div');
		div.className = clases;
		// Add text
		div.appendChild(document.createTextNode(msj));
		//Search div parent
		const searchDiv = document.querySelector('#buscador');
		searchDiv.appendChild(div);
		//Remove msj
		setTimeout(() => {
			this.cleanMsj()
		}, 2500);
	}
	//remove msj
	cleanMsj() {
		const alert = document.querySelector('.alert');
		if (alert) {
			alert.remove();
		}
	}
}
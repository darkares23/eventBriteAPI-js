const eventBrite = new EventBrite(),
	ui = new Interfaz();

//Listener search
document.getElementById('buscarBtn').addEventListener('click', (e) => {
	e.preventDefault();

	// read text input to search
	const textSearch = document.getElementById('evento').value;
	//Read selected
	const categories = document.getElementById('listado-categorias');
	const selectedCat = categories.options[categories.selectedIndex].value;

	//Review there is something string in the search
	if (textSearch !== '') {
		//Obtain events
		eventBrite.obtainEvents(textSearch, selectedCat)
			.then(events => {
				console.log(events);

			})
	} else {
		// Show alert if text is empty
		ui.showMessage('Write Something in the search bar', 'alert alert-danger mt-4');

	}
})
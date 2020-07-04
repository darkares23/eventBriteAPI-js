class EventBrite {
	constructor() {
		this.token_auth = 'R2KNUXIZ5CK5TCH5O7GY';
		this.order = 'date';
	}
	//Obtain search results
	async obtainEvents(event, category) {
		const responseEvent = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=${this.order}&categories=${category}&token=${this.token_auth}`);

		// wait event res and convert to json
		const even = await responseEvent.json();

		return {
			even
		};
	}
	//obatin categories in init
	async obtainCategories() {
		//Consult API categories
		const responseCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

		//Wait categories response ans convert to json
		const categories = await responseCategories.json();

		// return result
		return {
			categories
		};
	}

}
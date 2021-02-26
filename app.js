const vm = new Vue({
	el: '#app',
	data: {
		products: []
	},
	methods: {
		getAllProducts () {
			fetch('./api/produtos.json')
				.then(response => response.json())
				.then(response => {
					this.products = response
				})		
		}
	},
	created () {
		this.getAllProducts()
	},
})
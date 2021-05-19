const vm = new Vue({
	el: '#app',
	data: {
		products: [],
    selectedProduct: { },
    productModal: false
	},
  filters: {
    formatPriceValue(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
    }
  },
	methods: {
		getAllProducts () {
			fetch('./api/produtos.json')
				.then(response => response.json())
				.then(response => {
					this.products = response
				})		
		},
    getProductById (Id) {
      fetch(`./api/produtos/${Id}/dados.json`)
        .then(response => response.json())
        .then(response => {
          this.selectedProduct = response
        })
        this.productModal = true
    }
	},
	created () {
		this.getAllProducts()
	},
})
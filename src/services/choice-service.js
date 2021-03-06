export default class ChoiceService {
	_apiBase = "http://localhost:8000";

	async getResources(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok){
			throw new Error(`Could not fetch ${url}, 
			received ${res.status}`);
		}
		return await res.json();
	}
	async getAllProducts() {
		const products = await this.getResources('/products');
		return products;
	}
	async getProduct(id) {
		const product = await this.getResources(`/products/${id}`);
		return product;
	}

	async postForm(url, data) {
	 const response = await fetch(url, {
		method: 'POST', 
		headers: {
		  'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(data) 
	  });
	  return await response;
	}
}
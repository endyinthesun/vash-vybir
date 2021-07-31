import api from './config'
import axios from "axios";

export default class ChoiceService {

	getAllProducts = () => api('/products')

	getProduct = (id) => api(`/products/${id}`)

	 postForm(url, data) {

	 const response =  axios.post(url, data);
	  return response;
	}
}

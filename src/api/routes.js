import {api} from './config';
import axios from 'axios';

export const _getProductsByCategory = params =>
  api.get('/Products.php?controller=getProductsByCategory', {params});
export const _getAllProducts = () =>
  api.get('/Products.php?controller=getProducts');
export const _getCategories = params =>
  api.get('/Category.php?controller=getCategories');
export const _getGallery = params =>
  api.get('/Gallery.php?controller=getGallery');

//other api
export const _postFeedbackForm = data =>
  axios.post('https://app.form2chat.io/f/7456d335', data);

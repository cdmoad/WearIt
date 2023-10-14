import axios from "axios"
import { getFromSessionStorage } from "../utils/sessionStorage";

export async function fetchProducts() {
    try {
      const data = await axios.get('/products');
      return data.data.products;

    } catch (error) {
      throw new Error('Error fetching posts');
    }
  }


export async function getProduct(id) {

   
 
    try {
      const data = await axios.get(`/products/${id}`);

      return data.data.product;

    } catch (error) {
      throw new Error('Error fetching posts');
    }

  }

  export async function addProduct({title,stock,price,colors,sizes,categories,description,discount,tags}){
  
  

    console.log('am here in api');
  

    try {
      const data = await axios.post(`/products`,{title,description,price,colors,sizes,stock,discount,tages:tags,user_id:getFromSessionStorage("id")});
   
      return data ;

    } catch (error) {
      throw new Error('Error adding product:',error);
    }

  }



 
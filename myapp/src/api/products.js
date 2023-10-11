import axios from "axios"

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
      console.log(data.data.product.id);
      return data.data.product;

    } catch (error) {
      throw new Error('Error fetching posts');
    }
  }



 
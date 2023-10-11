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

      return data.data.product;

    } catch (error) {
      throw new Error('Error fetching posts');
    }

  }

  export async function addProduct(title,stock,price,description,category,color,size,tags,discount){
  

    try {
      const data = await axios.post(`/products`);
   
      return data.data.product;

    } catch (error) {
      throw new Error('Error adding product');
    }

  }



 
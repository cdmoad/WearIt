

export async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products?sort=desc');
      const data = await response.json();
      return data;

    } catch (error) {
      throw new Error('Error fetching posts');
    }
  }
 
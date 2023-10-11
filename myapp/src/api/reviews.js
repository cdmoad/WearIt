import axios from "axios"

export async function getReviews(id) {
    try {
      const data = await axios.get(`products/${id}/reviews`);
      return data.data.reviews;

    } catch (error) {
      throw new Error('Error fetching reviews');
    }
  }


 


 
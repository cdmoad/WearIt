import { getAverageReview } from "../../utils/calculations/reviews";
import { it,describe, expect } from 'vitest';


describe('getAverageReview', () => {
  
    it('calculates the average review correctly', () => {
      const reviews = [5,4,3,5];
  
      const average = getAverageReview(reviews);
  
      expect(average).toBe(4.25);
    });
  
    it('handles empty review list', () => {
      const reviews = [];
  
      const average = getAverageReview(reviews);
  
       
      expect(average).toBe(0);
    });
  
    it('handles single review', () => {
      const reviews = [3];
  
      const average = getAverageReview(reviews);
   
      expect(average).toBe(3);
    });
  });
 
  
  
  
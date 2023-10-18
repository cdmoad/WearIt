export function getAverageReview(reviews){
   
    let sum = 0;
    if(!reviews ) return 0;
    if(reviews.length === 0) return 0;
    reviews?.forEach(review => {
        sum += review;
    });

    return sum/reviews.length;
}
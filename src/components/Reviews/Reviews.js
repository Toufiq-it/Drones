import React from 'react';
import useReviews from '../../hooks/useReviews';
import AllCarts from '../AllCarts/AllCarts';
import './Reviews.css'

const Reviews = () => {
    const [reviews ,setReviews] = useReviews();
    return (
        <div className='review-container'>
            {
                reviews.map(review=><AllCarts
                    key={review.id}
                    review={review}
                ></AllCarts>)
            }
        </div>
    );
};

export default Reviews;
import React from 'react';
import useCart from '../../hooks/useCart';
import AllCarts from '../AllCarts/AllCarts';
import './Reviews.css'

const Reviews = () => {
    const [reviews ,setReviews] = useCart();
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
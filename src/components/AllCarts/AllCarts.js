import React from 'react';

const AllCarts = (props) => {
    const {name , text , rating} = props.review;
    return (
        <div>
            <div className='review-cart'>
                <h5 className='review-cart-name'>{name}</h5>
                <p>{text}</p>
                <p className='review-rating'>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default AllCarts;
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home-content-style'>
                <div className='product-description'>
                    <h1>Autel Robotics EVO</h1>
                    <p>The EVO from Autel Robotics is clearly copying the DJI Mavic series, but surprisingly this is more than just a subpar clone. Clearly the styling a little different from the Mavic 2 or Mavic Air. Just like the last drone Autel Robotics made (the X-Star Premium) the design of this thing looks very strange in my opinion. It comes in this bright orange color which is great for visibility, but some might argue it looks like a cheesy toy. Other than the color, the general design is pretty good. It folds into a small shape and has a full 3 axis gimbal just like the Mavic</p>
                </div>
                <div className='product-img-sizing'>
                    <img src="https://assets-global.website-files.com/5993a9fb6c6b200001c5318a/5bf38e1b30d045c082b2c57d_Autel%20Evo%20For%20Sale.jpg" alt="" />
                </div>
            </div>
            <div className='home-review-style'>
                <h2>User Reviews</h2>
                <div className='review-container'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <a href="">
                    <button></button>
                </a>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../asset/Group 205.png'
function Products() {
    return (
        <div id='products'>
            <h1>Welcome to Nature</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            <div className='a-container'>
                <Productbox image={pimage1} />
                <Productbox image={pimage1} />
                <Productbox image={pimage1} />
                <Productbox image={pimage1} />
            </div>
        </div>
    )
}

export default Products;

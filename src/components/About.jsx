import React from 'react';
import Aboutbox from './Aboutbox';
import pimage1 from '../asset/Group 39.png';
import pimage2 from '../asset/Group 55.png';
import pimage3 from '../asset/Group 64.png';
function About() {
    return (
        <div id='about'>
            <h1>Proudly presented by</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            <div className='b-container'>
                <Aboutbox image={pimage1} />
                <Aboutbox image={pimage2} />
                <Aboutbox image={pimage3} />
                <Aboutbox image={pimage1} />
            </div>
            
        </div>
    )
}

export default About;

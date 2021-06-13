import React from 'react';
import Standbox from './Standbox';
import pimage1 from '../asset/blog1.jpg';
import pimage2 from '../asset/blog2.jpg';
import pimage3 from '../asset/blog3.jpg';
function Stand() {
    return (
        <div id='blog'>
            <div className='blog-text'>
                <h1>Read Our Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='c-container'>
                <Standbox image={pimage1} title="Blog Post One"/>
                <Standbox image={pimage2} title="Blog Post One"/>
                <Standbox image={pimage3} title="Blog Post One"/>
            </div>
        </div>
    )
}

export default Stand;

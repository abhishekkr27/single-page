import React from 'react';

function Aboutbox(props) {
    return (
        <div className='b-box'>
            <div className='b-a-img'>
                <img src={props.image} alt='' />
            </div>
            <div className='dot'>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
        </div>
        
    )
}

export default Aboutbox;
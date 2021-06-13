import React from 'react';

function Productbox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt='' />
            </div>
        </div>
    )
}

export default Productbox;
import React from 'react';

function Standbox(props) {
    return (
        <div className='c-box'>
            <div className='c-b-img'>
                <img src={props.image} alt='' />
            </div>
            <div className='c-b-text'>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Standbox;
import React from 'react';
import { Link } from 'react-scroll';
import pic from '../asset/girl.png'

function Section() {
    return (
        <div id='section'>
            <div className='small-pic'>
                <Link to='section' className='pic'>
                    <img src={pic} alt='' />
                    <p className="pic-text">Jane Doe</p>
                </Link>
            </div>
            <div>
                <p className="para2">Thank you for all the amazing produce and products you deliver each week…
                    you make my life so easy an bring goodness into our family eating.
                    I’ve been roasting a lot of brussel sprouts and</p>
            </div>
        </div>
    )
}
export default Section;
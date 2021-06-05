import React from 'react';
import './Home.css';
import alphabet from '../../Imgs/alphabet.jpg';
const HomeAside = () => {
    return (
            <div className="border border-3">
                <div className="d-flex justify-content-start p-3">
                    <div>
                        <img style={{ width: '35px' }} src={alphabet} alt="" />
                    </div>
                    <div className='ml-3'>
                        <h4 className='extra-spacing'>James Anderson</h4>
                        <span className='extra-color extra-spacing'>View Your Profile</span>
                    </div>
                </div>
                <div>
                    <p className='text-secondary text-spacing'>Account</p>
                    <p className='text-secondary text-spacing'>Learning Language</p>
                    <p className='text-secondary text-spacing'>Profile</p>
                    <p className='text-secondary text-spacing'>Password</p>
                    <p className='text-secondary text-spacing'>Duolingo Plus</p>
                    <p className='text-secondary text-spacing'>Notifications</p>
                    <div className="background-color">
                        <p className='text-spacing p-2'>Coach</p>
                    </div>
                    <p className='text-secondary text-spacing'>Progress Sharing</p>
                    <p className='text-secondary text-spacing'>Privacy</p>
                </div>
            </div>
    );
};

export default HomeAside;
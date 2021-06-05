import React from 'react';
import cartoonsImg from '../../Imgs/cartoonsImg.png';
import './Home.css'
const MainInterface = () => {
    return (
        <div className='row'>
            <div className="col-md-6">
                <img src={cartoonsImg} alt="" style={{ width: '250px' }} />
            </div>
            <div className="col-md-6">
                <div className="row table">
                    <div className='col-md-6 p-3'>
                        <p className='text-secondary'>Basic</p>
                        <hr />
                        <p className='text-secondary'>Casual</p>
                        <hr />
                        <p className='text-secondary'>Regular</p>
                        <hr />
                        <p className='text-secondary'>Serious</p>
                        <hr />
                        <p className='text-secondary'>Intense</p>
                    </div>
                    <div className="col-md-6 p-3">
                        <p className='text-secondary'>1 XP per day</p>
                        <hr />
                        <p className='text-secondary'>10 XP per day</p>
                        <hr />
                        <p className='text-secondary'>20 XP per day</p>
                        <hr />
                        <p className='text-secondary'>30 XP per day</p>
                        <hr />
                        <p className='text-secondary'>40 XP per day</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-evenly">
                <p className='text-secondary'>ABOUT</p>
                <p className='text-secondary'>BLOG</p>
                <p className='text-secondary'>SCHOOLS</p>
                <p className='text-secondary'>APPS</p>
                <p className='text-secondary'>HELP</p>
                <p className='text-secondary'>CAREERS</p>
                <p className='text-secondary'>GUIDELINES</p>
                <p className='text-secondary'>TERMS</p>
            </div>
            <p className='text-secondary text-center'>Privacy</p>
        </div>
    );
};

export default MainInterface;
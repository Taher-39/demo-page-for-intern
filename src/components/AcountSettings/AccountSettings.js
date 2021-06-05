import React from 'react';
import HomeAside from '../Home/HomeAside';
import Navbar from '../Navbar/Navbar';
import AccountHeading from './AccountHeading';
import button from '../../Imgs/slideButton.png';

const AccountSettings = () => {
    return (
        <div>
            <Navbar />
            <main className='container'>
                <div className="row">
                    <div className="col-md-8">
                        <AccountHeading></AccountHeading>
                        <div className='pt-3'>
                            <div>
                                <p>Username: <input className='form-control w-50 my-2' type="text" name="" id="" placeholder="username" /></p>
                            </div>
                            <div>
                                <p>Email: <input className='form-control w-50 my-2' type="email" name="" id="" placeholder="john@gmail.com" /></p>
                            </div>
                            <p className='text-danger'>Email not verified.<span style={{ textDecoration: "underline"}}>Verify now</span></p>
                            <div>
                                <p>Sound effects <span><img style={{ width: '30px' }} src={button} alt="" /></span></p>
                                <p>Animations <span><img style={{ width: '30px' }} src={button} alt="" /></span></p>
                                <p>Motivational massages <span><img style={{ width: '30px' }} src={button} alt="" /></span></p>
                                <p>Speaking exercises <span><img style={{ width: '30px' }} src={button} alt="" /></span></p>
                                <p>Listening exercises <span><img style={{ width: '30px' }} src={button} alt="" /></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pt-1">
                        <HomeAside></HomeAside>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AccountSettings;
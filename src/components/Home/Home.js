import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import HomeAside from './HomeAside';
import HomeHeading from './HomeHeading';
import MainInterface from './MainInterface';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="container">
                <div className="row">
                    <div className="col-md-8">
                        {/* heading */}
                        <HomeHeading></HomeHeading>
                        {/* main interface */}
                        <div className="pt-3">
                            <MainInterface></MainInterface>
                        </div>
                    </div>
                   {/* aside interface */}
                    <div className="col-md-4 pt-1">
                        <HomeAside></HomeAside>
                    </div>
                </div>
                <hr />
            </main>
        </div>
    );
};

export default Home;
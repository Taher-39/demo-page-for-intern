import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import brazilImg from '../../Imgs/brazilImg.png';
import queenCrown from '../../Imgs/Crown.png';
import fireIcon from '../../Imgs/fireFlatIcon.png';
import benzeneIcon from '../../Imgs/bezeneFlatIcon.png';
import alphabet from '../../Imgs/alphabet.jpg';
import learnIcon from '../../Imgs/learnIcon.png';
import storiesIcon from '../../Imgs/bookFatIcon.png';
import shopIcon from '../../Imgs/shopIcon.png';
import moreIcon from '../../Imgs/moreIcon.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="#"><img style={{ width: '30px' }} src={learnIcon} alt="" /> LEARN</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="#"><img style={{ width: '30px' }} src={storiesIcon} alt="" /> STORIES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5" to="#"><img style={{ width: '30px' }} src={shopIcon} alt="" /> SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="#"><img style={{ width: '30px' }} src={moreIcon} alt="" /> MORE</a>
                            </li>
                            <li className="nav-item icon">
                                <a className="nav-link ms-5" href="#"><img style={{ width: '30px' }} src={brazilImg} alt="" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="#"><img style={{ width: '35px' }} src={queenCrown} alt="" /><span> 0</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="#"><img style={{ width: '35px' }} src={fireIcon} alt="" /><span> 0</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="#"><img style={{ width: '35px' }} src={benzeneIcon} alt="" /><span> 10</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ms-5" href="#"><img style={{ width: '35px' }} src={alphabet} alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
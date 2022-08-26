import React from 'react';
import { Bars4Icon } from '@heroicons/react/24/solid'


const Header = () => {
    return (
        <nav>
            <div>
                <Bars4Icon className='h-7 w-7'></Bars4Icon>
            </div>
            <ul className='md:flex '>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/child">Child</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;
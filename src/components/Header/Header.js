import React, { useState } from 'react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='h-7 w-7 md:hidden'>
                {
                    open ? <XMarkIcon></XMarkIcon> : <Bars4Icon></Bars4Icon>
                }
            </div>
            <ul className={`md:flex text-xl justify-center py-3 bg-purple-300 absolute duration-500 ease-in ${open ? 'top-7' : 'top-[-220px]'} `}>
                <li className='mr-10 '><a href="/home">Home</a></li>
                <li className='mr-10 '><a href="/men">Men</a></li>
                <li className='mr-10 '><a href="/women">Women</a></li>
                <li className='mr-10 '><a href="/child">Child</a></li>
                <li className='mr-10 '><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;
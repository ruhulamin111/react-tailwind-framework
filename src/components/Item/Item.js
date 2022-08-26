import { CreditCardIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const Item = ({ item }) => {
    const { name, price, duration, benefits } = item;


    return (
        <div className='bg-purple-100 p-5 rounded-lg'>
            <h1 className='bg-purple-500 p-3 rounded-lg text-xl font-thin text-white my-3'>{name}</h1>
            <p>
                <span className='text-4xl font-bold text-purple-600'>$ {price}</span>
                <span>/{duration}</span>
            </p>
            <div className='my-5'>
                {
                    benefits.map((benefits, index) => <Benefits
                        key={index}
                        benefits={benefits}
                    ></Benefits>)
                }

            </div>
            <button className='flex bg-purple-500 rounded-lg p-2 text-white float-right'>
                Buy Now <CreditCardIcon className='w-6 h-6 ml-2'></CreditCardIcon>
            </button>

        </div>
    );
};

export default Item;
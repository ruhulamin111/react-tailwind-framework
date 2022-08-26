import React from 'react';

const Item = ({ item }) => {
    const { name, price, duration } = item;


    return (
        <div className='bg-purple-100 p-5 rounded-lg'>
            <h1 className='bg-purple-500 p-5 rounded-lg text-xl '>{name}</h1>
            <p>
                <span>{price}</span>
                <span>/{duration}</span>
            </p>

        </div>
    );
};

export default Item;
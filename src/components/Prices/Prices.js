import React from 'react';
import Item from '../Item/Item';

const Prices = () => {
    const prices = [
        {
            name: 'Free', price: 0, duration: 'month', benefits: [
                'Free item available',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet consectetur',
                'Lorem ipsum dolor sit amet consectetur adipisicing',
                'Ipsum dolor sit amet consectetur adipisicing elit'
            ]
        },
        {
            name: 'Standard', price: 99, duration: 'month', benefits: [
                'Standard item available',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet consectetur',
                'Lorem ipsum dolor sit amet consectetur adipisicing',
                'Ipsum dolor sit amet consectetur adipisicing elit'
            ]
        },
        {
            name: 'Premium', price: 199, duration: 'month', benefits: [
                'Premium item available',
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amet consectetur',
                'Lorem ipsum dolor sit amet consectetur adipisicing',
                'Ipsum dolor sit amet consectetur adipisicing elit'
            ]
        }
    ];

    return (
        <div className='grid md:grid-cols-3 gap-5 bg-purple-300 my-5 p-5'>
            {
                prices.map((item, index) => <Item
                    key={index}
                    item={item}
                ></Item>)
            }

        </div>
    );
};

export default Prices;
import React from 'react';
import Item from '../Item/Item';

const Prices = () => {
    const prices = [
        { name: 'Free', price: 0, duration: 'month' },
        { name: 'Standard', price: 99, duration: 'month' },
        { name: 'Premium', price: 199, duration: 'month' }
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
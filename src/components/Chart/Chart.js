import React from 'react';
import { Bar, BarChart } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Page A',
            price: 4000,
            product: 2400,
            available: 2400,
        },
        {
            name: 'Page B',
            price: 3000,
            product: 1398,
            available: 2210,
        },
        {
            name: 'Page C',
            price: 2000,
            product: 9800,
            available: 2290,
        },
        {
            name: 'Page D',
            price: 2780,
            product: 3908,
            available: 2000,
        },
        {
            name: 'Page E',
            price: 1890,
            product: 4800,
            available: 2181,
        },
        {
            name: 'Page F',
            price: 2390,
            product: 3800,
            available: 2500,
        },
        {
            name: 'Page G',
            price: 3490,
            product: 4300,
            available: 2100,
        },
    ];

    return (
        <div>
            <BarChart width={800} height={400} data={data}>
                <Bar dataKey={'price'}></Bar>
                <Bar dataKey={'product'}></Bar>
                <Bar dataKey={'available'}></Bar>
            </BarChart>

        </div>
    );
};

export default Chart;
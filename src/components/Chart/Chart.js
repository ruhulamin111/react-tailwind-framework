import React from 'react';
import { CartesianGrid, Bar, BarChart, Tooltip, Legend, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: 'Monthy A',
            price: 4000,
            product: 2400,
            available: 2400,
        },
        {
            name: 'Monthy B',
            price: 3000,
            product: 1398,
            available: 2210,
        },
        {
            name: 'Monthy C',
            price: 2000,
            product: 9800,
            available: 2290,
        },
        {
            name: 'Monthy D',
            price: 2780,
            product: 3908,
            available: 2000,
        },
        {
            name: 'Monthy E',
            price: 1890,
            product: 4800,
            available: 2181,
        },
        {
            name: 'Monthy F',
            price: 2390,
            product: 3800,
            available: 2500,
        },
        {
            name: 'Monthy G',
            price: 3490,
            product: 4300,
            available: 2100,
        },
    ];

    return (
        <div>
            <BarChart width={800} height={400} data={data}>
                <CartesianGrid strokeDasharray={'5 5'}></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar fill='#8659ee' dataKey={'price'}></Bar>
                <Bar fill='#dd8931' dataKey={'product'}></Bar>
                <Bar fill='#aa5931' dataKey={'available'}></Bar>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
            </BarChart>

        </div>
    );
};

export default Chart;
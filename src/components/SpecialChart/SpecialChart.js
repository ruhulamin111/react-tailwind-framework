import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie } from 'recharts';

const SpecialChart = () => {
    const [months, setMonths] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const loadedData = (data.data[0].month);
                const getData = loadedData.map(data => {
                    const divided = data.name.split('-')
                    const info = {
                        name: divided[0],
                        value: parseInt(divided[1])
                    }
                    return info;
                })
                setMonths(getData);
            })
    }, [months])

    return (
        <div>
            <PieChart width={800} height={400} >
                <Pie data={months} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#d859e2" ></Pie>
                <Pie data={months} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#9829b2" innerRadius="80" label></Pie>
            </PieChart>

        </div>
    );
};

export default SpecialChart;
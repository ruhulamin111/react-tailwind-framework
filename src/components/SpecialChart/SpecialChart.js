import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

        </div>
    );
};

export default SpecialChart;
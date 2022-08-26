import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'


const Spring = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => set(!flip),
    })

    return (
        <animated.div style={props}>I will fade in</animated.div>
    );
};

export default Spring;
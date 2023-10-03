import React, { useState, useEffect } from 'react';

const ScrollComponent = ({ prob }) => {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
    window.scrollY >= prob ? setNav(true) : setNav(false);
    };

    useEffect(() => {
    const handleScroll = () => {
    changeBackground();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
}, [prob]);

    return nav;
};

export default ScrollComponent;

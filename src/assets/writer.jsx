import React, { useState, useEffect } from "react";

const ReactWriter = ({ text, delay, loop }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
    timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }, delay);
    } else if (loop) {
        setCurrentIndex(0);
        setCurrentText("");
    }

    return () => clearTimeout(timeout);
}, [currentIndex, delay, loop, text]);

    return currentText;
};

export default ReactWriter;

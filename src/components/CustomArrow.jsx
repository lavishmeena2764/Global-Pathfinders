import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
            onClick={onClick}
        >
            <FaArrowLeft />
        </div>
    );
};

export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'black', borderRadius: '50%' }}
            onClick={onClick}
        >
            <FaArrowRight />
        </div>
    );
};

import React from 'react';

const Div = () => {
    // Use map to create an array of JSX elements
    const divElements = Array.from({ length: 587 }, (_, i) => (
        <div key={i} className={`Hex${i + 1}`}>
        </div>
    ));

    return (
        <div className="map">
            {/* Render the array of div elements */}
            {divElements}
        </div>
    );
};

export default Div;

import React from 'react';

function Container({children, style, className}) {
    return (
        <div style={{...style}} className={className}>
            {children}
        </div>
    );
}

export default Container;
import React from 'react';

function Wrapper({children, style, className}) {
    return (
        <div style={{...style}} className={className}>
            {children}
        </div>
    );
}

export default Wrapper;
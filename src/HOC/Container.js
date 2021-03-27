import React from 'react';

function Container({children, style, classNames = []}) {
    const classes = classNames.length ? classNames.join(' ') : ''
    return (
        <div style={{...style}} className={classes}>
            {children}
        </div>
    );
}

export default Container;
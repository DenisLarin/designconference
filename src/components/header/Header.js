import React from 'react';
import classes from './header.module.scss'

function Header({children, fontSize, color="#000"}) {
    return (
        <h1 className={classes.h1} style={{fontSize, color}}>
            {children}
        </h1>
    );
}

export default Header;
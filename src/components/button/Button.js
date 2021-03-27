import React from 'react';
import classes from './button.module.scss'
function Button({children, onClick, className}) {
    return (
        <div  onClick={onClick} className={[classes.button, className].join(' ')}>
            {children}
        </div>
    );
}

export default Button;
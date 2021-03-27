import React from 'react';
import classes from './postHeader.module.scss'

const PostHeader = ({children, color = "#000", fontSize}) => {
    return (
        <p className={classes.p} style={{color, fontSize}}>
            {children}
        </p>
    );
}

export default PostHeader;
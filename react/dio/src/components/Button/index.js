import React from 'react';

import './button.css';

const Button = ({title,variant = "primary", onClick}) => {
    return(
        <button className="button" variant={variant} onClick={onClick}>{title}</button>
    )
}

export { Button }
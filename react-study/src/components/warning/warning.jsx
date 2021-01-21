import React from 'react';
import './warning.css';

export default function Warning(props) {
    return (
        <div className='warning'>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </div>
    );
}

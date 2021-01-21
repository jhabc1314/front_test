import React from 'react';
import './link.css';

export default function Link(props) {
    return (
        <a href={props.href} className='link' target='_self'>{props.children}</a>
    );
}

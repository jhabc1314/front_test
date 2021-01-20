import './logo.css';
import React from 'react';
import img from './logo192.png';

function Logo(props) {
    let className = 'logo logo-default';
    if (props.size) {
        className = `logo logo-` + props.size;
    }
    return <div className={className}>
        <img src={props.src ? props.src : img} className='logoImg' />
        <span className='logoName'>{props.name ? props.name : 'React'}</span>
    </div>;
}


export default Logo;

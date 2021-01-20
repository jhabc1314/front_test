import React from 'react';
import './header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header className='header-default'>
            {this.props.children}
        </header>
    }
}

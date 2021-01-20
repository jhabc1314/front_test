import React from 'react';
import './nav.css';
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }
    
    render() {
        return <ul className='nav'>
            {this.props.children}
        </ul>;
    }
}

function Item(props) {
    let url = new URL(location.href);
    console.log(url);
    return <li className={url.pathname === props.router ? 'active' : ''}><a href={props.router}>{props.children}</a></li>
}

function ItemSearch(props) {
    return <li className='header-search'><input placeholder='搜索' onSubmit={e=>console.log(e)} /></li>
}
let n = Nav;
n.Item = Item;
n.ItemSearch = ItemSearch;
export default n;

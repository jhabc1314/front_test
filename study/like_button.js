'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked:false};
    }
    render() {
        if (this.state.liked) {
            return 'You liked number '+ this.props.commentID;
        }
        return <button></button>
        return e('button', {onClick:() => this.setState({liked:true})}, 'Like');
    }
    change = () => {
        
    }

}

const app = document.querySelector("#app");
ReactDOM.render(e(LikeButton,{commentID: 12}), app);

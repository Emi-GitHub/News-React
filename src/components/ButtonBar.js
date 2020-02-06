import React, { Component } from 'react';
import LoadMore from './LoadMore';
import '../styles/MyStyle.css';

class ButtonBar extends Component {
    state = {
        show: false,
        topHeadlines: false
    }
    onButtonClick = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        return (
            <div>
                <button className="loadMoreButton fluid ui button" onClick={this.onButtonClick}>Load more</button>
                {this.state.show && <LoadMore news={this.props.news} topHeadlines={this.state.topHeadlines} />}
                {this.state.show=false ? this.onButtonClick : null}
            </div>
        )
    }
}

export default ButtonBar;
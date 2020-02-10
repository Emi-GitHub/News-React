import React, { Component } from 'react';
import LoadMore from './LoadMore';
import '../styles/ButtonBar.css';

class ButtonBar extends Component {
    state = {
        show: false,
        topHeadlines: false
    }
    onButtonClick = () => {
        this.setState({
            show: true
        })
    }
    render() {
        return (
            <div>
                <button className="loadmore-button fluid ui button" onClick={this.onButtonClick}>Load more</button>
                {this.state.show && <LoadMore news={this.props.news} topHeadlines={this.state.topHeadlines} />}
                {!this.state.show ? this.onButtonClick : null}
            </div>
        )
    }
}

export default ButtonBar;
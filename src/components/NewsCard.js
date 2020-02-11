import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NewsCard.css';

class NewsCard extends Component {
    render(){
        let backgroundImgStyle = {
            backgroundImage: 'url(' + this.props.pic + ')'
        }
        const PictureCard = () => {
            if(this.props.pic === "null") return null
            else return <div style={backgroundImgStyle} className="card-photo"/> 
        }
        return (
            <div className="card-style" key={this.props.item.url}>
                {PictureCard()}
                <h3 className="card-header">{this.props.item.title}</h3>
                <div className="card-description">{this.props.item.description}</div>
                <button className="article-button ui black basic button">
                    <Link 
                        to={{pathname:'/article', 
                        state: {from: this.props.item}}} 
                        className="article-link">
                            Read full article
                    </Link>
                </button>
            </div>
        )
    }
}
export default NewsCard;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyStyle.css';

class NewsCard extends Component {
    render(){
        let backgroundImgStyle = {
            backgroundImage: 'url(' + this.props.pic + ')'
        }
        /*const CardStyle = {
            height: "460px",
            float: "left",
            marginLeft:"24px",
            marginRight:"24px",
            marginBottom:"25px",
            backgroundColor:"white",
            paddingLeft:"10px"
        }*/
        const PictureCard = () => {
            if(this.props.pic==="null") return null
            else return <div style={backgroundImgStyle} className="cardPhoto"/> 
        }
        return (
            <div className="cardStyle mt-0 " key={this.props.item.url}>
                {PictureCard()}
                <h3>{this.props.item.title}</h3>
                <div className="cardDescription">{this.props.item.description}</div>
                <button 
                    className="readFullArticleButton ui black basic button" 
                    style={{marginTop:"50px"}}>
                        <Link 
                            to={{pathname:'/article', 
                            state: {from: this.props.item}}} 
                            className="linkToArticle">
                                Read full article
                        </Link>
                </button>
            </div>
        )
    }
}
export default NewsCard;
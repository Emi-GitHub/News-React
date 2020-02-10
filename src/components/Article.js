import React, { Component } from 'react';
import '../styles/Article.css';

class Article extends Component {
     render() {
         const PictureCard = () => {
            var articleImage = this.props.location.state.from.urlToImage;
            if(articleImage ==="null") return null
            else return (
                <div>
                    <img 
                        className="ui fluid image article-image" 
                        src={articleImage} 
                        alt="not found"
                    /> 
                </div>
            )
        }
        const Title = () => {
            var articleTitle = this.props.location.state.from.title;
            if(articleTitle ==="null") return null
            else return (
                <div>
                    <h1 className="header-article">{articleTitle}</h1>
                    <div className="ui divider"></div>
                </div>
            )
        }
        const Author = () => {
            var articleAuthor = this.props.location.state.from.author;
            if( articleAuthor ==="null") return null
            else return(
                <div className="article-light">
                    By: 
                    {' ' + articleAuthor}
                    <br/>
                </div>
            )
        }
        const Description = () => {
            var articleDesc = this.props.location.state.from.description;
            if(articleDesc === "null") return null
            else return (
                <div>
                    <b className="article-desc">{articleDesc}</b>
                    <br/><br/>
                </div>
            )
        }
        const Content = () => {
            var articleContent = this.props.location.state.from.content;
            if(articleContent === "null") return null
            else return(
                <div className="article-content">
                    {articleContent}
                    <br/><br/>
                </div>
            )
        }
        const functionForPublished = () => {
            var output = this.props.location.state.from.publishedAt.split('');
            var i = 0;
            var publishedDate = '';
            while(output[i]!=='T') {
                publishedDate = publishedDate + output[i]
                i++
            }
           return publishedDate
        }
        const Published = () => {
            var articlePublished = this.props.location.state.from.publishedAt;
            if(articlePublished ==="null") return null;
            else return (
                <div className="article-light">
                    Published at:
                    {' ' + functionForPublished()}
                    <br/>
                </div>
            )
        }
        const Source = () => {
            var articleSource = this.props.location.state.from.source.name;
            if(articleSource === "null") return null;
            else return(
                <div className="article-light">
                     Source:
                    {' ' + articleSource}
                    <br/> <br/>
                </div>
            )
        }
         return (
            <div className="ui container background-article">
                <div className="ui container">
                    {Title()}  
                    {PictureCard()} 
                    {Source()}
                    {Description()} 
                    {Content()} 
                    {Author()}
                    {Published()}
                </div>
            </div>
        )
    }
}

 export default Article;
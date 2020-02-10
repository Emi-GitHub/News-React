import React, { Component } from 'react';
import '../styles/MyStyle.css';

class Article extends Component {
     render() {
         const PictureCard = () => {
            if(this.props.location.state.from.urlToImage==="null") return null
            else return (
                <div>
                    <img 
                        className="ui fluid image" 
                        style={{maxWidth:"800px", marginLeft:"auto", marginRight:"auto"}} 
                        src={this.props.location.state.from.urlToImage} 
                    /> 
                </div>
            )
        }
        const Title = () => {
            if(this.props.location.state.from.title==="null") return null
            else return (
                <div>
                    <h1 className="headerArticle">{this.props.location.state.from.title}</h1>
                    <div className="ui divider"></div>
                </div>
            )
        }
        const Author = () => {
            if(this.props.location.state.from.author==="null") return null
            else return(
                <div style={{opacity:"0.5"}}>
                    By: 
                    {' '+this.props.location.state.from.author}
                    <br/>
                </div>
            )
        }
        const Description = () => {
            if(this.props.location.state.from.description==="null") return null
            else return (
                <div>
                    <b style={{fontSize:"20px"}}>{this.props.location.state.from.description}</b>
                    <br/><br/>
                </div>
            )
        }
        const Content = () => {
            if(this.props.location.state.from.content==="null") return null
            else return(
                <div style={{fontSize:"15px"}}>
                    {this.props.location.state.from.content}
                    <br/><br/>
                </div>
            )
        }
        const functionForPublished = () => {
            var output =  this.props.location.state.from.publishedAt.split('');
            var i = 0;
            var pomocna = '';
            while(output[i]!=='T') {
                pomocna = pomocna + output[i]
                i++
            }
           return pomocna
        }
        const Published = () => {
            if(this.props.location.state.from.publishedAt==="null") return null
            else return (
                <div style={{opacity:"0.5"}}>
                    Published at:
                    {' '+functionForPublished()}
                    <br/>
                </div>
            )
        }
        const Source = () => {
            if(this.props.location.state.from.source.name==="null") return null
            else return(
                <div style={{opacity:"0.5"}}>
                     Source:
                    {' ' + this.props.location.state.from.source.name}
                    <br/> <br/>
                </div>
            )
        }
         return (
            <div className=" backgroundArticle ui inverted segment" >
                <div className="ui container" style={{marginTop:"10px"}}>
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
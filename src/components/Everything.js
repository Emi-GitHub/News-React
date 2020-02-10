import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewsList from './NewsList';
import ButtonBar from './ButtonBar';
import SearchBarEverything from './SearchBarEverything';
import axios from 'axios';
import "../styles/MyStyle.css";

class Everything extends Component { 
    state = {
        news: [],
        zapamtiTerm:'',
        checkRadio: true,
        showError: false,
        showErrorQ: false,
        radio1: true,
        radio2: false,
        radio3: false,
        backgroundClass: 'ui text loader', 
        div1: 'moja ui segment',
        div2: 'ui active inverted dimmer',
        forSearch: 'mojaSearch',
        forHeader: 'mojaSearch'
    }
    EverythingApi = term => {
        this.setState({
            radio1: true,
            radio2: false,
            radio3: false
        })
        const BASE_URL = 'https://newsapi.org/v2/everything?';
        const API_KEY = 'apiKey=a9c0ed9d6b6e492db95b5b87b686b064';
        const q=term; 
        const url = BASE_URL + 'q=' + q + '&'+ API_KEY;
        if(q===''){
            this.setState({
                showErrorQ: true
            })
        }
        axios.get(url).then(response => {
            this.setState({
                news: response.data.articles,
                checkRadio: true,
                zapamtiTerm: q,
                backgroundClass: 'background',
                div1: 'nothing',
                div2: 'nothing',
                forSearch: 'nothing',
                forHeader: 'TopHeadlinesCard'
            })
            if(this.state.news.length===0){
                this.setState({
                    showError: true
                })
            }
            console.log("EverythingApi",response.data.articles)
        })  
    }
    EverythingApiCheck = ( term, radio ) => {
        var sortBy;
        if(radio === "radio1") {
            this.setState({
                radio1: true,
                radio2: false,
                radio3: false
            })
            sortBy='populartiy';
        }
        else if(radio === "radio2") {
            this.setState({
                radio1: false,
                radio2: true,
                radio3: false
            })
            sortBy='relevance';
        }
        else if(radio === "radio3") {
            this.setState({
                radio1: false,
                radio2: false,
                radio3: true
            })
            sortBy='publishedAt';
        }
        const BASE_URL = 'https://newsapi.org/v2/everything?';
        const API_KEY = 'apiKey=a9c0ed9d6b6e492db95b5b87b686b064';
        const q=term; 
        const url = BASE_URL + 'q=' + q + '&sortBy='+ sortBy +'&'+ API_KEY;
        if(q===''){
            this.setState({
                showErrorQ: true
            })
        }
        axios.get(url).then(response => {
            this.setState({
                news: response.data.articles,
                checkRadio: true,
                zapamtiTerm: q
            })
            if(this.state.news.length===0){
                this.setState({
                    showError: true
                })
            }
            console.log("EverythingApiCheck",response.data.articles)
        })  
    }
    render() {
        if(this.state.showError || this.state.showErrorQ){
            return (
                <div>
                    <h1 style={{fontSize:"50px", textAlign:"center", marginTop:"50px"}}>Not found!</h1>
                </div>
            )
        }
        return (
           <div className={this.state.div1}>
               <div className={this.state.div2}>
                    <div className={this.state.backgroundClass}>
                        <div className={this.state.forSearch}>
                            <SearchBarEverything 
                                EverythingApi={this.EverythingApi} 
                                EverythingApiCheck={this.EverythingApiCheck} 
                                checkRadio={this.state.checkRadio} 
                                zapamtiTerm={this.state.zapamtiTerm} 
                                radio1={this.state.radio1} 
                                radio2={this.state.radio2} 
                                radio3={this.state.radio3}
                                firstTerm = {this.props.location.state.term}
                            />
                        </div>
                        <div className={this.state.forSearch}>
                            <div className="TopHeadlinesCard">
                                <div className="myTransparentDiv" >
                                    <Link to="/" onClick={this.onHomeClick} className="goBack">
                                        <i className="left chevron icon"/>
                                        Go back to home page
                                    </Link>
                                    <div className="header-top">Search for...</div>
                                    <NewsList news={this.state.news} />
                                    <ButtonBar news={this.state.news} /> 
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default Everything;
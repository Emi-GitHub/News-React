import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NewsList from './NewsList';
import ButtonBar from './ButtonBar';
import SearchBarEverything from './SearchBarEverything';
import '../styles/Home.css';
import '../styles/Everything.css';

class Everything extends Component { 
    state = {
        news: [],
        rememberTerm:'',
        selectedOption: 'option1',
        background: 'ui text loader', 
        loaded: 'loaded-api',
        loading: 'ui active inverted dimmer',
        forSearch: 'hide-app',
        forHeader: 'hide-app'
    }
    EverythingApi = term => {
        this.setState({
            selectedOption: 'option1'
        })
        const BASE_URL = 'https://newsapi.org/v2/everything?';
        const API_KEY = 'apiKey=' + process.env.REACT_APP_API_KEY;
        const q = term; 
		const sortBy = 'popularity';
        const url = BASE_URL + 'q=' + q + '&sortBy=' + sortBy + '&' + API_KEY;
        axios.get(url).then(response => {
            this.setState({
                news: response.data.articles,
                rememberTerm: q,
                background: 'background',
                loaded: 'nothing',
                loading: 'nothing',
                forSearch: 'nothing',
                forHeader: 'topheadlines-card'
            })
        })
        .catch(error => console.error('Api error', error)) 
    }
    EverythingApiCheck = ( term, radio ) => {
        var sortBy;
        if(radio === "option1") {
            this.setState({
                selectedOption: radio
            })
            sortBy = 'populartiy';
        }
        else if(radio === "option2") {
            this.setState({
                selectedOption: radio
            })
            sortBy = 'relevance';
        }
        else if(radio === "option3") {
            this.setState({
                selectedOption: radio
            })
            sortBy = 'publishedAt';
        }
        const BASE_URL = 'https://newsapi.org/v2/everything?';
        const API_KEY = 'apiKey=' + process.env.REACT_APP_API_KEY;
        const q = term; 
        const url = BASE_URL + 'q=' + q + '&sortBy=' + sortBy + '&' + API_KEY;
        axios.get(url).then(response => {
            this.setState({
                news: response.data.articles,
                rememberTerm: q
            })
        })
        .catch(error => console.error('Api error', error))  
    }
    render() {
        const notFound = () =>{
            return (
                <div className="not-found"> 
                    <p>Your search - <b>{this.state.rememberTerm}</b> - did not match any documents.</p>
                    <p>Suggestions:</p> 
                    <li>Make sure that all words are spelled correctly.</li>
                    <li>Try different keywords.</li>
                    <li>Try more general keywords.</li>
                    <li>Try fewer keywords.</li>
                </div>
            )
        }
        return (
           <div className={this.state.loaded}>
               <div className={this.state.loading}>
                    <div className={this.state.background}>
                        <div className={this.state.forSearch}>
                            <SearchBarEverything 
                                EverythingApi={this.EverythingApi} 
                                EverythingApiCheck={this.EverythingApiCheck} 
                                rememberTerm={this.state.rememberTerm} 
                                selectedOption={this.state.selectedOption}
                                firstTerm = {this.props.location.state.term}
                            />
                        </div>
                        <div className={this.state.forSearch}>
                            <div className="topheadlines-card">
                                <div className="transparent-div">
                                    <Link to="/" className="go-back">
                                        <i className="left chevron icon"/>
                                        Go back to home page
                                    </Link>
                                    <div className="header-top">Search for...</div>
                                    <NewsList news={this.state.news} />
                                    {this.state.news.length === 0 ? notFound() : <ButtonBar news={this.state.news} /> }
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
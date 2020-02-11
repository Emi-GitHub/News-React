import React, { Component } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import ButtonBar from './ButtonBar';
import SearchBarHome from './SearchBarHome';
import '../styles/Home.css';

class Home extends Component {
    state = {
        headlines: [],
        background: 'ui text loader', 
        loaded: 'loaded-api',
        loading: 'ui active inverted dimmer',
        forSearch: 'hide-app',
        forHeader: 'hide-app'
    }
    TopHeadlinesApi = () => {
        const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
        const API_KEY = 'apiKey=' + process.env.REACT_APP_API_KEY;
        const url = BASE_URL + 'country=us&' + API_KEY;
        axios.get(url).then(response => {
            this.setState({
                headlines: response.data.articles,
                background: 'background',
                loaded: 'nothing',
                loading: 'nothing',
                forSearch: 'nothing',
                forHeader: 'topheadlines-card'
            })
        })
        .catch(error => console.error('Api error', error))  
    }
    componentDidMount(){
        this.TopHeadlinesApi()
    }
    render() {
        return (
            <div className={this.state.loaded} >
                <div className={this.state.loading}>
                    <div className={this.state.background}>
                        <div className={this.state.forSearch}>
                            <SearchBarHome />
                        </div>
                        <div className={this.state.forHeader}>
                            <div className="transparent-div">
                                <div className="header-top">Top headlines</div>
                                <NewsList news={this.state.headlines} />
                                <ButtonBar news={this.state.headlines} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
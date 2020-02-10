import React, { Component } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import ButtonBar from './ButtonBar';
import SearchBarHome from './SearchBarHome';
import "../styles/MyStyle.css";

class Home extends Component {
    state = {
        headlines: [],
        backgroundClass: 'ui text loader', 
        div1: 'moja ui segment',
        div2: 'ui active inverted dimmer',
        forSearch: 'mojaSearch',
        forHeader: 'mojaSearch'
    }
    TopHeadlinesApi = () => {
        const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
        const API_KEY = 'apiKey=a9c0ed9d6b6e492db95b5b87b686b064';
        const url = BASE_URL + 'country=us&' + API_KEY;
        axios.get(url).then(response => {
            this.setState({
                headlines: response.data.articles,
                backgroundClass: 'background',
                div1: 'nothing',
                div2: 'nothing',
                forSearch: 'nothing',
                forHeader: 'TopHeadlinesCard'
            })
        console.log("TopHeadlinesApi in Home.js",response.data.articles)
        })  
    }
    componentDidMount(){
        this.TopHeadlinesApi()
    }
    render() {
        return (
            <div className={this.state.div1} >
                <div className={this.state.div2}>
                    <div className={this.state.backgroundClass}>
                        <div className={this.state.forSearch}>
                            <SearchBarHome />
                        </div>
                        <div className={this.state.forHeader}>
                            <div className="myTransparentDiv">
                                <div className="HeaderTop">Top headlines</div>
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
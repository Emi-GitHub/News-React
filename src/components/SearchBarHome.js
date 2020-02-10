import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "../styles/SearchBar.css";

class SearchBarHome extends Component {
    state = {
        term: '',
        showEverything: false
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.setState({
            showEverything: true,
        })
    }
    onInputChange = event => {
        this.setState({
            term: event.target.value
        })
    }
    render() {
        return(
            <div>
                <form className="ui form container" onSubmit={this.onFormSubmit}>
                    <div className="field" >
                        <div className="ui search">
                            <div className="ui icon input focus home-search">
                                <input
                                    type="text" 
                                    placeholder="Search news..."
                                    onChange={this.onInputChange}
                                    value={this.state.term}
                                />
                                <span onClick={this.onFormSubmit} className="search-icon">
                                    <i className="search icon"/>
                                </span>
                            </div>
                            {this.state.showEverything ? <Redirect to={{pathname:'/everything', state: {term: this.state.term}}} /> : null} 
                        </div>
                    </div>
                </form>
            </div>
        )   
    }
}

export default SearchBarHome;
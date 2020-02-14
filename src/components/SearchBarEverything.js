import React, { Component } from 'react';
import "../styles/SearchBarEverything.css";
import "../styles/SearchBar.css";

class SearchBarEverything extends Component {
    state = {
        term: ''
    }
    componentDidMount= () => {
        this.props.EverythingApi(this.props.firstTerm);
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.EverythingApi(this.state.term);
    }
    onInputChange = event => {
        this.setState({
            term: event.target.value,
        })
    }
    handleOptionChange = event => {
        this.props.EverythingApiCheck(this.props.rememberTerm, event.target.value);
    }
    render() {
        const searchForOptions = () => {
            return(
                <div className="radio-button">
                    <div className="inline fields sort-section">
                        <label className="label-sort"> Sort by section: </label>
                        <div className="field">
                            <div className="ui radio checkbox popularity-radio" >
                                <input 
                                    type="radio" 
                                    name="radio1" 
                                    value="option1" 
                                    checked={this.props.selectedOption === 'option1'}  
                                    onChange={this.handleOptionChange}
                                />
                                <label className="sort-radio">Popularity</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox relevance-radio" >
                                <input 
                                    type="radio" 
                                    name="radio2"  
                                    value="option2" 
                                    checked={this.props.selectedOption === 'option2'}  
                                    onChange={this.handleOptionChange}
                                />
                                <label className="sort-radio">Relevance</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox publiched-radio">
                                <input 
                                    type="radio" 
                                    name="radio3" 
                                    value="option3" 
                                    checked={this.props.selectedOption === 'option3'}  
                                    onChange={this.handleOptionChange}
                                />
                                <label className="sort-radio">Published date</label>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div>
                <form className="ui form container search-sort" onSubmit={this.onFormSubmit}>
                    <div className="field" >
                        <div className="ui search" >
                            <div className="ui icon input focus home-search" >
                                <input
                                    type="text" 
                                    value={this.state.term}
                                    placeholder="Search news..."
                                    onChange={this.onInputChange}
                                />
                                <span onClick={this.onFormSubmit} className="search-icon">
                                    <i className="search icon"/>
                                </span>
                            </div>
                        </div>
                        { searchForOptions() }
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBarEverything;
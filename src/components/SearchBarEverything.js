import React, { Component } from 'react';
import "../styles/MyStyle.css";

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
        this.props.EverythingApiCheck(this.props.zapamtiTerm, event.target.value);
    }
    render() {
        const searchForOptions = () => {
            return(
                <div className="radioButton">
                    <div className="inline fields sortBySection">
                        <label  className="labelSort">Sort by section:</label>
                        <div className="field setRadio">
                            <div className="ui radio checkbox" >
                                <input 
                                    type="radio" 
                                    name="radio1" 
                                    value="radio1" 
                                    checked={this.props.radio1}  
                                    onChange={this.handleOptionChange}
                                    className="radio-input"
                                />
                                <label style={{color:"white"}}> Popularity</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox" >
                                <input 
                                    type="radio" 
                                    name="radio2"  
                                    value="radio2" 
                                    checked={this.props.radio2}  
                                    onChange={this.handleOptionChange}
                                    className="radio-input"
                                />
                                <label style={{color:"white"}}>Relevance</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui radio checkbox">
                                <input 
                                    type="radio" 
                                    name="radio3" 
                                    value="radio3" 
                                    checked={this.props.radio3}  
                                    onChange={this.handleOptionChange}
                                    className="radio-input"
                                />
                                <label style={{color:"white"}}>Published date</label>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    return(
        <div>
            <form 
                className="ui form container" style={{/*background: "rgba(6, 6, 7, 0.58)",*/ marginTop:"10px"}} onSubmit={this.onFormSubmit}>
                <div className="field" >
                    <div className="SearchBar">
                        <div className="ui search" >
                                <div className="ui icon input focus" style={{marginTop:"10px", opacity: "0.9"}}>
                                    <input 
                                        className="SearchBar"
                                        type="text" 
                                        value={this.state.term}
                                        placeholder="Search news..."
                                        onChange={this.onInputChange}
                                    />
                                    <i className="search icon"/>
                                </div>
                        </div>
                    </div>
                    {this.props.checkRadio ? searchForOptions() : null}
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBarEverything;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "../styles/MyStyle.css";


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
            <form className="ui form container segment" style={{background: "rgba(212, 212, 226, 0.18)", marginTop:"10px"}} onSubmit={this.onFormSubmit}>
                <div className="field" >
                    <div className="SearchBar">
                        <div className="ui search" >
                                <div className="ui icon input focus" style={{marginTop:"10px", opacity: "0.9"}}>
                                    <input 
                                        className="SearchBar"
                                        type="text" placeholder="Search news..."
                                        onChange={this.onInputChange}
                                        value={this.state.term}
                                    />
                                    <i className="search icon"/>
                                </div>
                                {this.state.showEverything ? <Redirect to={{
                                                            pathname:'/everything' , 
                                                            state: {term: this.state.term}
                                                        }} /> : null} 
                        </div>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBarHome;
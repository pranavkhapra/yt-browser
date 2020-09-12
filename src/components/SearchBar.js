import React, { Component } from 'react'

class SearchBar extends Component {
    state={
        searchText:''
    }
    searchTextChange=(event)=>(
        this.setState({
            searchText:event.target.value
        })
    )
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchText)
    }
    render() {
        return (
            <div className='search-bar ui segment'>
               <form className='ui form' onSubmit={this.onFormSubmit}>
                  <div className='field'>
                    <label>Video Search</label>
                   <input
                   type='text'
                   value={this.state.searchText}
                   onChange={this.searchTextChange}
                   />
                    </div>
               </form>
            </div>
        )
    }
}

export default SearchBar

import React from "react";
export default class Search extends React.Component{
  state = {
    search: 'panda',
    type: 'all'
  }

  handleKey = (e) => {
    if(e.key === 'Enter'){
      this.props.searchMovie(this.state.search, this.state.type)
    }
  }

  handleFilter = (e) => {
    this.setState(() => ({type: e.target.dataset.type}), () => {
      this.props.searchMovie(this.state.search, this.state.type)
    })
  }

  render() {
    return(
      <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
           id="email_inline" 
           placeholder="Search" 
           type="search" 
           className="validate"
           value={this.state.search}
           onChange={(e) => this.setState({search: e.target.value})}
           onKeyDown={this.handleKey}
           />
           <button
            className="btn search-btn" 
            onClick={() => this.props.searchMovie(this.state.search, this.state.type)} >
            Search Movies
           </button>
       </div>
      </div>
      <div>
      <label>
      <input
       className="with-gap" 
       name="type" 
       type="radio" 
       data-type="all" 
       onChange={this.handleFilter}
       checked={this.state.search === 'all'}
        />
      <span>All</span>
      </label>

      <label>
      <input
       className="with-gap" 
       name="type" 
       type="radio" 
       data-type="movie" 
       onChange={this.handleFilter} 
       checked={this.state.search === 'movie'}
       />
      <span>Movies only</span>
      </label>

      <label>
      <input
       className="with-gap" 
       name="type" 
       type="radio" 
       data-type="series" 
       onChange={this.handleFilter}
       checked={this.state.search === 'series'}   
       />
      <span>Series on</span>
      </label>
      </div>
    </div>
    )
  }
}
import React from 'react';
import './SearchBar.css';





class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        location: '',
        sortBy: 'best_match',
      }
    // in the event of things not working this could cause me issues
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count' 
     }  
  }

    // reeturns the current CSS class for a sorting option, provides user visual feedback
    getSortByClass(sortByOption){
       if (sortByOption === this.state.sortBy){
         return 'active';
       } else {
         return '';
       }
    }

   //sets the state of the sorting option

   handleSortByChange(sortByOption) {
     this.setState({
       sortBy: sortByOption
     });
   }

   handleTermChange(event) {
    this.setState({
      term: event.target.value
    })
   }

   handleLocationChange(event) {
    this.setState({
       location: event.target.value
    })
   }

   handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
   }

  // dynamically creates the list items neededto display the sort options against the potential changes to the API  
    renderSortByOptions() { 
       return Object.keys(this.sortByOptions).map(sortByOption => {
         let sortByOptionValue = this.sortByOptions[sortByOption];
         return (
            <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick= {this.handleSortByChange.bind(this, sortByOptionValue)}>
          
            {sortByOption}
          
           </li>)  
       });
      }  

  render() {
      return (
        <div className="SearchBar">
             <div className="SearchBar-sort-options">
                <ul>
                     {this.renderSortByOptions()}
                </ul>
             </div>
                <div className="SearchBar-fields">
                     <input placeholder="Search Businesses"  onChange={this.handleTermChange}/>
                     <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                     <div className="SearchBar-submit">
                         <a onClick={this.handleSearch} >Let's Go</a>
                     </div>
        </div>
      )
  }     
}

export default SearchBar;
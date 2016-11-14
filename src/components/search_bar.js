import React, { Component } from 'react';

// define a new class Searchbar and give it access to all
// the functionaly that React.Component class hass
class SearchBar extends Component {
  // every React component that is class based must have render
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;

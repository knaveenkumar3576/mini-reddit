import React from 'react'

const SearchBar = ({handleSearch}) => {

    let searchRef = React.createRef();
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchRef.value)
        }}>

        <input type='text' ref={(element) => searchRef=element} />
        <input type='submit' value='Search' />
        
        </form>
    )
}

export default SearchBar;
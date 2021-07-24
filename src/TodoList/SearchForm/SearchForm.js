import React from 'react'
import './SearchForm.css'

const SearchForm = ({searchText, setSearchText}) => {
    return (
            <input type='text' placeholder='Search' value={searchText} onInput={e => setSearchText(e.target.value)} />
    )
}
export default SearchForm
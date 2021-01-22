import React from 'react'
import "./search-box.component.css"

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className = "search"
        aria-label="Search box"
        type="search" 
        placeholder={placeholder}
        onChange = {handleChange} />
)
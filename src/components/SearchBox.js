import React from 'react'
import Turnstone from 'turnstone'

const SearchBox = () => {

  const listbox = {
    displayField: 'characters',
    data: async (query) => {
      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=${process.env.REACT_APP_MARVEL_APIKEY}`
      );
      const data = await res.join()
      return data.data.results
    },
    searchType: 'startsWith'
  }

  return (
    <Turnstone 
      id= 'search'
      name='search'
      autoFocus = {true}
      typeahead = {true}
      clearButton={true}
      debounceWait={250}
      listboxIsImmutable={true}
      maxItems={6}
      noItemsMessage="We couldn't find any character that matches your search"
      placeholder='Search for any character in the MCU'
    />
  )
}

export default SearchBox
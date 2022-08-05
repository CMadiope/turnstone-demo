import React from "react";
import Turnstone from "turnstone";

const SearchBox = () => {
  const listbox = {
    displayField: "characters",
    data: async (query) => {
      const res = await fetch(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=${process.env.REACT_APP_MARVEL_APIKEY}`
      );
      const data = await res.join();
      return data.data.results;
    },
    searchType: "startsWith",
  };

  const styles = {
    input: "w-full border py-2 px-4 text-lg outline-none rounded-md",
    listbox: "bg-neutral-900 w-full text-slate-50 rounded-md",
    highlightedItem: "bg-neutral-800",
    query: "text-oldsilver-800 placeholder:text-slate-600",
    typeahead: "text-slate-500",
    clearButton:
      "absolute inset-y-0 text-lg right-0 w-10 inline-flex items-center justify-center bg-netural-700 hover:text-red-500",
    noItems: "cursor-default text-center my-20",
    match: "font-semibold",
    groupHeading: "px-5 py-3 text-pink-500",
  };

  return (
    <Turnstone
      id='search'
      name='search'
      autoFocus={true}
      typeahead={true}
      clearButton={true}
      debounceWait={250}
      listboxIsImmutable={true}
      maxItems={6}
      noItemsMessage="We couldn't find any character that matches your search"
      placeholder='Search for any character in the MCU'
      listbox={listbox}
      styles={styles}
    />
  );
};

export default SearchBox;

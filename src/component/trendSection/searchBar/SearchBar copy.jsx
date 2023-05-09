import React, { useState } from "react";
import SearchBarStyle from "./SearchBar.module.scss";
import { FiSearch } from 'react-icons/fi';
import { searchData } from "../../data/SearchData";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    // Our api to fetch the search result
    console.log('search', searchTerm);
  }
  return (
    <div className={SearchBarStyle.search_Bar}>
      <div className={SearchBarStyle.inner_Search_Bar}>
        <button onClick={() => onSearch(value)}>
            <FiSearch />
        </button>
        <input type="search" placeholder="Search Twitter " value={value} onChange={onChange} />
      </div>
      <div className={SearchBarStyle.dropdown}>
        {searchData.filter(item => {
            const searchTerm = value.toLowerCase();
            const firstName = item.firstName.toLowerCase();

            return searchTerm && firstName.startsWith(searchTerm) && firstName !== searchTerm;
        }).slice(0, 10).map((item) => (
            <div key={item.id} onClick={() => onSearch(item.firstName)} className={SearchBarStyle.dropdown_row}>
                {item.firstName}
                {item.lastName}
            </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

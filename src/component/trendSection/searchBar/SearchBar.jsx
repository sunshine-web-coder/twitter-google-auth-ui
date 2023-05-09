import React, { useEffect, useRef, useState } from "react";
import SearchBarStyle from "./SearchBar.module.scss";
import { FiSearch } from 'react-icons/fi';
import { searchData } from "../../data/SearchData";

const SearchBar = ({theme}) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    // Our api to fetch the search result
    console.log('search', searchTerm);
  }

  const handleClearButtonClick = () => {
    setValue("");
    inputRef.current.value = "";
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setValue("");
        inputRef.current.value = "";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className={theme === "light" ? SearchBarStyle.light_theme : SearchBarStyle.dark_theme}>
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
              const fullName = item.fullName.toLowerCase();

              return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
          }).slice(0, 10).map((item) => (
              <div key={item.id} onClick={() => onSearch(item.fullName)} className={SearchBarStyle.dropdown_row}>
                  <div className={SearchBarStyle.inner_items}>
                    <div className={SearchBarStyle.avatar}>
                      <img src={item.avatar} alt="" />
                    </div>
                    <div className={SearchBarStyle.user_details}>
                      <p>{item.fullName}</p>
                      <p>@{item.username}</p>
                      <p><svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-tbmifm r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-16eto9q"><g><path d="M17.863 13.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44zM12 2C9.791 2 8 3.79 8 6s1.791 4 4 4 4-1.79 4-4-1.791-4-4-4z"></path></g></svg>
                        {item.follow_or_not}
                      </p>
                    </div>
                  </div>
              </div>
          ))}
        </div>
      </div>  
    </div>
    
  );
};

export default SearchBar;

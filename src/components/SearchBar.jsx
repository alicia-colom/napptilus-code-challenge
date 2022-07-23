import React from 'react';
import { FlexBox } from 'react-styled-flex';
import '../styles/SearchBar.scss';

function SearchBar({ term, setTerm }) {
  const handleInputChange = (ev) => {
    setTerm(ev.target.value);
  };

  const handleInputEnter = (ev) => {
    if (ev.keyCode === '13') ev.preventDefault();
  };

  return (
    <form>
      <FlexBox className="searchBox">
        <i className="fa fa-search searchBox__icon" aria-hidden="true" />
        <input
          id="search"
          name="search"
          type="text"
          className="searchBox__textArea"
          title="Escribe tu término de búsqueda"
          placeholder="Search..."
          value={term}
          required
          onChange={handleInputChange}
          onKeyPress={handleInputEnter}
        />
        <button
          type="button"
          title="Borrar búsqueda"
          className="cancelButton"
          onClick={() => setTerm('')}
        >
          <i className="fa fa-times" aria-hidden="true" />
        </button>
      </FlexBox>
    </form>
  );
}

export default SearchBar;

import React from 'react';
import PropTypes from 'prop-types';
import { BiFilter } from 'react-icons/bi';
import { GiEmerald } from 'react-icons/gi';
import '../sass/components/SearchBar.css';

function SearchBar({ hideOrDisplay }) {
  return (
    <section>
      <section className={ hideOrDisplay }>
        <div className="SearchBar-name-container">
          <div className="SearchBar-filter-icon">
            <BiFilter />
          </div>
          <input
            id="name-filter"
            name="nameSearch"
            className="SearchBar-name"
            type="text"
            data-testid="name-filter"
            placeholder="Nome da carta"
            onChange={ ({ target }) => onInputChange(target.value, 'name') }
          />
        </div>
        <select
          id="rarity-filter"
          name="raritySearch"
          className="SearchBar-rarity"
          data-testid="rare-filter"
          onChange={ ({ target }) => onInputChange(target.value, 'rarity') }
          defaultValue="todas"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label className="SearchBar-trunfo-label" htmlFor="trunfo-filter">
          <div className="SearchBar-trunfo-icon">
            <GiEmerald />
          </div>
          <span>Super Trunfo</span>
          <input
            id="trunfo-filter"
            name="trunfoSearch"
            className="SearchBar-trunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ ({ target }) => onInputChange(target.checked, 'trunfo') }
          />
        </label>
      </section>
    </section>
  );
}

SearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  hideOrDisplay: PropTypes.string.isRequired,
};

export default SearchBar;

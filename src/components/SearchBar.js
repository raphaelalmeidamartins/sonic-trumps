import PropTypes from 'prop-types';
import React from 'react';
import { BiFilter } from 'react-icons/bi';
import { GiEmerald } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateFilters } from '../redux/actions';
import '../sass/components/SearchBar.css';

function SearchBar({ hideOrDisplay }) {
  const { regExp, rarity, trunfo } = useSelector((state) => state.cardFilters);

  const dispatch = useDispatch();

  const handleFilterCards = ({ target }) => {
    const value = target.name === 'trunfo' ? target.checked : target.value;
    dispatch(actionUpdateFilters(target.name, value));
  };

  return (
    <section>
      <section className={ hideOrDisplay }>
        <div className="SearchBar-name-container">
          <div className="SearchBar-filter-icon">
            <BiFilter />
          </div>
          <input
            id="name-filter"
            name="regExp"
            className="SearchBar-name"
            type="text"
            data-testid="name-filter"
            placeholder="Nome da carta"
            value={ regExp }
            onChange={ handleFilterCards }
          />
        </div>
        <select
          id="rarity-filter"
          name="rarity"
          className="SearchBar-rarity"
          data-testid="rare-filter"
          onChange={ handleFilterCards }
          value={ rarity }
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
            name="trunfo"
            className="SearchBar-trunfo"
            type="checkbox"
            data-testid="trunfo-filter"
            checked={ trunfo }
            onChange={ handleFilterCards }
          />
        </label>
      </section>
    </section>
  );
}

SearchBar.propTypes = {
  hideOrDisplay: PropTypes.string.isRequired,
};

export default SearchBar;

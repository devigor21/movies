import { useState } from "react";

const Search = (props) => {
  const {
    searchWith = Function.prototype
  } = props;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchWith(search, type)
    }
  }

  const handleFilter = (event) => {
    searchWith(search, event.target.dataset.type);
    setType(event.target.dataset.type);
  };

  return (
    <div className='input-field'>
      <input
        placeholder="Search"
        type="search"
        className="validate"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKey}
      />
      <button
        onClick={() => searchWith(search, type)}
        className="waves-effect waves-light btn search-btn indigo lighten-1"
      >Search</button>
      <div>
        <label>
          <input className="with-gap" name="type" type="radio" data-type="all" onChange={handleFilter} checked={type === "all"} />
          <span>All</span>
        </label>
        <label>
          <input className="with-gap" name="type" type="radio" data-type="movie" onChange={handleFilter} checked={type === "movie"} />
          <span>Movies only</span>
        </label>
        <label>
          <input className="with-gap" name="type" type="radio" data-type="series" onChange={handleFilter} checked={type === "series"} />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
};

export { Search };

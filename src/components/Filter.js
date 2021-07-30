import React, { useState } from 'react';
import './styles/Filter.css';

function Filter({ searchQueries, setSearchQueries, setPage }) {
  const [queries, setQueries] = useState(searchQueries);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchQueries(queries);
    setPage(1);
  };

  const handleChange = (e) => {
    setQueries({ ...queries, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="filter">
      <input
        name="name"
        type="text"
        value={queries.name}
        onChange={handleChange}
        placeholder="Enter a name"
      />

      <select name="gender" value={queries.gender} onChange={handleChange}>
        <option key="" value="">
          Select a gender
        </option>
        <option key="female" value="female">
          Female
        </option>
        <option key="male" value="male">
          Male
        </option>
        <option key="genderless" value="genderless">
          Genderless
        </option>
        <option key="unknown" value="unknown">
          Unknown
        </option>
      </select>

      <select name="status" value={queries.status} onChange={handleChange}>
        <option key="" value="">
          Select a status
        </option>
        <option key="alive" value="alive">
          Alive
        </option>
        <option key="dead" value="dead">
          Dead
        </option>
        <option key="unknown" value="unknown">
          Unknown
        </option>
      </select>

      <input type="submit" value="Search" />
    </form>
  );
}

export default Filter;

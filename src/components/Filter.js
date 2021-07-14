import React, { useState } from "react";
import "./styles/Filter.css";


function Filter({baseApiUrl,setApiUrl}) {
  const [queries, setQueries] = useState({
    name: '',
    gender: '',
    status: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Run this block if some queries fields exists.
    if(Object.values(queries).some(q => q.length > 0)) {
      const query = Object.keys(queries).reduce(
        (acc, curr, i, arr) => {
          if (queries[curr]) {
            //if current query has value add it to accumulator string.
            // ex. name=rick&
            acc += `${curr}=${queries[curr]}&`;
          }
          if (!arr[i + 1]) {
            // If it is in the last element of the array
            // remove the & at the end of the string.
            acc = acc.substr(0, acc.length - 1);
          }
          return acc;
        }, "");

      setApiUrl(`${baseApiUrl}?${query}`);
    } else {
      setApiUrl(baseApiUrl);
    } 
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
        <option key="" value="">Select a gender</option>
        <option key="female" value="female">Female</option>
        <option key="male" value="male">Male</option>
        <option key="genderless" value="genderless">Genderless</option>
        <option key="unknown" value="unknown">Unknown</option>
      </select>

      <select name="status" value={queries.status} onChange={handleChange}>
        <option key="" value="">Select a status</option>
        <option key="alive" value="alive">Alive</option>
        <option key="dead" value="dead">Dead</option>
        <option key="unknown" value="unknown">Unknown</option>
      </select>

      <input type="submit" value="Search"/>
    </form>
  );
}

export default Filter;


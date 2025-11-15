import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  // const [searchFilter, setSearchFilter] = useState("")

  return (
    <div className="Filter">
      <input onChange={onSearchChange} value={search} type="text" name="search" placeholder="Search..." /> {/*search bar*/}
      <select name="filter" onChange={onCategoryChange} >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
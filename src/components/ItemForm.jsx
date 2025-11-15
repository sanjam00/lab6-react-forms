import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {
  const [item, setItem] = useState({ category: "Produce" })

  function handleSubmit(e) {
    e.preventDefault(); //prevents reload upon submission
    onItemFormSubmit({ ...item, id: uuid(), e })
    console.log("submitted item:", item);
  }

  function handleChange(e) {
    setItem((previous) => {
      return { ...previous, [e.target.name]: e.target.value }
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
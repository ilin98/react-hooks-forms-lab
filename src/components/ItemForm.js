import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({ onAddItem }) {

  const [itemName, setItemName] = useState("")
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleNameChange(e) {
    setItemName(e.target.value)
  }

  function handleCatChange(e){
    setItemCategory(e.target.value)
  }


  function onItemFormSubmit(e){
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onAddItem(newItem)
    setItemCategory("")
    setItemName("")
  }

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange} value={itemCategory}>
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

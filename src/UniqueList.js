import React, { useState } from "react";
import "../src/styles/UniqueList.scss";

const UniqueList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    const isUnique = !items.includes(inputValue) && inputValue !== "";

    if (isUnique) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = () => {
    const hasItemInList = items.includes(inputValue);
    if (hasItemInList) {
      setItems(items.filter((item) => item !== inputValue));
      setInputValue("");
    }
  };

  const clearList = () => {
    setItems([]);
    setInputValue("");
  };

  return (
    <>
      <div className='list-container'>
        <div className='list-input-container'>
          <input
            className='item-input'
            type='text'
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addItem();
              }
            }}
          />
          <div className='button-container'>
            <button className='add-button' onClick={addItem}>
              Add Item
            </button>
            <button className='add-button' onClick={removeItem}>
              Remove Item
            </button>
            <button className='add-button' onClick={clearList}>
              Clear List
            </button>
          </div>
        </div>
        <ul className='items'>
          {items
            ? items.map((item) => {
                return <li key={item}>{item}</li>;
              })
            : null}
        </ul>
      </div>
    </>
  );
};

export default UniqueList;

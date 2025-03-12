import React, { useState } from 'react'
import menu from '../assets/Menu'

const MenuComponent = () => {
  //open category is a object of categorie state
  const [openCategories, setOpenCategories] = useState({})

  //storing the state of catgory if is open or not
  //when toggle category is clicked an entry is made in the openCategories object 
  // containg the category name as key and state as value.
  const toggleCategory = (category) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      //setting the state of the cagtegory based on the previous state
      [category]: !prevState[category]
    }))
    console.log(openCategories)
  }

  return (
    <div>
      <h1>Menu</h1>
      {Object.entries(menu).map(([category, items]) => (
        <div key={category}>
          <h2
            className="font-bold border-2 bg-red-300 cursor-pointer"
            onClick={() => toggleCategory(category)}
          >
            {category}
          </h2>
          {openCategories[category] && (
            <ul>
              {items.map((item) => (
                <li key={item.CODE}>
                  {item.ITEM} - ₹{item.RATE}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default MenuComponent

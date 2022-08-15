import React from 'react'
import { FiSearch } from "react-icons/fi";

const RenderForm = (props) => {
    const {setSearchInputData, setInputData, searchInputData} = props

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputData(searchInputData);
      };
  return (
    <form onSubmit={handleSubmit}>
          <div className="icon ">
            <span>
              <FiSearch />
            </span>
          </div>
          <input
            style={{ width: "94%" }}
            className="ps-4 py-2 rounded "
            type="text"
            placeholder="Search for a movie..."
            onChange={(e) => setSearchInputData(e.target.value)}
          />
        </form>
  )
}

export default RenderForm
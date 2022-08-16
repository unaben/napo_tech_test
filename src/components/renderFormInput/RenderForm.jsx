import React from "react";
import { FiSearch } from "react-icons/fi";

const RenderForm = (props) => {
  const { setSearchInputData, setInputData, searchInputData } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData(searchInputData);
  };
  return (
    <>
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
      <p className="mt-3" style={{width: "94%", fontSize:'1.3rem'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit nemo
        voluptate vitae aliquid, dolore, ipsa suscipit quasi perspiciatis, qui
        officia. Itaque ratione eum non sunt minus necessitatibus libero totam
        dolorum repellendus similique fugit aperiam sint sit nisi, optio dolore
        perferendis. Laudantium, repellat consequuntur.
      </p>
    </>
  );
};

export default RenderForm;

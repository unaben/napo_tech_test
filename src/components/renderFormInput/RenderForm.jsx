import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const RenderForm = (props) => {
  const { setSearchInputData, setInputData, searchInputData } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData(searchInputData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          // label="Search for a movie..."
          type="text"
          size="small"
          placeholder="Search for a movie..."
          onChange={(e) => setSearchInputData(e.target.value)}
          sx={{ width: "94%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />      
      </form>
      <p className="mt-3" style={{ width: "94%", fontSize: "1.3rem" }}>
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

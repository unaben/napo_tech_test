import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const RenderForm = (props) => {
  const { setSearchInputData, setInputData, searchInputData } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData(searchInputData);
    setSearchInputData("");
  };

  return (
    <div style={{ marginLeft: "3.5rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          className="textField-input"
          type="text"
          size="small"
          placeholder="Search for movies..."
          onChange={(e) => setSearchInputData(e.target.value)}
          sx={{ width: "94%", background: "inherit", borderColor: "inherit" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
      <p className="my-4 desciption-text" style={{ width: "94%", fontSize: "1.3rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit nemo
        voluptate vitae aliquid, dolore, ipsa suscipit quasi perspiciatis, qui
        officia. Itaque ratione eum non sunt minus necessitatibus libero totam
        dolorum repellendus similique fugit aperiam sint sit nisi, optio dolore
        perferendis. Laudantium, repellat consequuntur.
      </p>
    </div>
  );
};

export default RenderForm;

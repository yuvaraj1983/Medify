import { Button, Stack, TextField } from '@mui/material'
import React, { useState, useMemo } from 'react'
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ list, filterList }) => {
    const [inputText, setInputText] = useState("");

    const filteredList = useMemo(() => {
        if (!inputText.trim()) return list;
        console.log("list", list)
        return list.filter((item) =>
          item["Hospital Name"]
            .toLowerCase()
            .includes(inputText.trim().toLowerCase())
        );
      }, [inputText, list]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("filteredList", filteredList)
        filterList(filteredList);

      };

  return (
   <form  onSubmit={handleSubmit}>
    <Stack direction={'row'} spacing={2}>
        <TextField 
         type="text"
         label="Search By Hospital"
          variant="outlined"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        fullWidth
        />
        <Button type='submit' variant='contained'  size="large"
         startIcon={<SearchIcon />}
        >Saerch</Button>
    </Stack>
   </form>
  )
}

export default SearchBar
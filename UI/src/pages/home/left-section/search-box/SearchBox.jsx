import { IconButton, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox() {
  return (
    <OutlinedInput
      size="small"
      className="my-3 mx-1"
      placeholder="Search"
      endAdornment={
        <IconButton aria-label="attachment icon">
          <SearchIcon></SearchIcon>
        </IconButton>
      }
    />
  );
}
export default SearchBox;

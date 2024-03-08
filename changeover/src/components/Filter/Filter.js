import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FilterListIcon from "@mui/icons-material/FilterList";
import { UrlProvider } from "../../provider/domainUrl000000000000000000000000000000000000000000000000000000Provider";

export default function Filter(props) {
  const filterItems = ["Low to High", "High to Low"];
  const [filter, setFilter] = React.useState("");
  const handleChange = async (event) => {
    let filterParam = "";
    console.log(event.target.dataset.value);
    setFilter(event.target.dataset.value);
    if (filter === "Low to High") {
      filterParam = "Price_HighToLow";
    } else if (filter === "High to Low") {
      filterParam = "Price_LowToHigh";
    }
    let response = await fetch(
      new UrlProvider().getDomainUrl() + "/filter/" + filterParam
    );
    const filterResponse = await response.json();
    props.handleCallBack(filterResponse);
  };

  return (
    <div class="cat-filter">
      <Box sx={{ minWidth: 190 }}>
        <Select
          displayEmpty
          renderValue={() => {
            return (
              <Box sx={{ display: "flex", gap: 1 }}>
                <FilterListIcon />
              </Box>
            );
          }}
        >
          {filterItems.map((filter) => (
            <MenuItem value={filter} onClick={handleChange}>
              {filter}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </div>
  );
}

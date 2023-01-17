import { Stack } from "@mui/material";

import { categories } from "../../utils/constants";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sm: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {}}
        style={{
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ marginRight: "15px" }}>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;

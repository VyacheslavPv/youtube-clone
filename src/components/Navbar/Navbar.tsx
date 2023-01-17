import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/YouTube_full-color_icon_2017.svg";
import SearchBar from "../SearchBar";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#0f0f0f",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          height: "20px",
          width: "146px",
        }}
      >
        <div className="logoImage">
          <Logo width="100%" height="100%" viewBox="0 0 160 110" />
        </div>
        <span className="logoText">YouTubeClone</span>
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;

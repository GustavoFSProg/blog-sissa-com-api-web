import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import DensitySmallOutlinedIcon from "@mui/icons-material/DensitySmallOutlined";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <div style={{ marginLeft: "-100px" }}>
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DehazeOutlinedIcon
          style={{
            fontSize: "34px",

            color: "#206040",
            height: "30px",
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem style={{ marginTop: "8px" }} onClick={handleClose}>
          <Link style={{ textDecoration: "none" }} to="/">
            Página Inicial
          </Link>
        </MenuItem>
        {/* <MenuItem style={{marginTop: '8px'}} onClick={handleClose}>Minha História</MenuItem> */}
        <MenuItem
          style={{ marginTop: "8px", marginBottom: "8px" }}
          onClick={handleClose}
        >
          <Link style={{ textDecoration: "none" }} to="/receitas">
            Receitas
          </Link>
        </MenuItem>

        {/* <MenuItem
          style={{ marginTop: "8px", marginBottom: "8px" }}
          onClick={handleClose}
        >
          <Link style={{ textDecoration: "none" }} to="/post-register">
            Cadastro de Post
          </Link>
        </MenuItem> */}
        {/* <MenuItem style={{marginTop: '8px', marginBottom: '8px'}} onClick={handleClose}>Vendas</MenuItem> */}
      </Menu>
    </div>
  );
}

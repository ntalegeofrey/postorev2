import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledAppBar, StyledToolBar } from "../Styles/styledAppBar";
import { StyledLogo } from "../Styles/styledLogo";
import { StyledNavButton } from "../Styles/styledNavButton";
import StyledLangButton from "../Styles/styledLangDropdown";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem } from "@mui/material";

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const renderMobileNav = () => {
    return (
      <>
        <StyledLogo variant="h3">POPSTORE</StyledLogo>
        <IconButton
          onClick={handleMenuClick}
          aria-controls="mobile-menu"
          aria-haspopup="true"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="mobile-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#fff",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>
            <StyledNavButton variant="text" size="medium" active={false}>
              Home
            </StyledNavButton>
          </MenuItem>
          <MenuItem>
            <StyledNavButton variant="text" size="medium" active={true}>
              Dashboard
            </StyledNavButton>
          </MenuItem>
          <MenuItem>
            <StyledNavButton variant="text" size="medium" active={false}>
              Contact
            </StyledNavButton>
          </MenuItem>
          <MenuItem>
            <StyledNavButton variant="text" size="medium" active={false}>
              Login
            </StyledNavButton>
          </MenuItem>
          <MenuItem>
            <StyledLangButton />
          </MenuItem>
        </Menu>
      </>
    );
  };

  const renderDesktopNav = () => {
    return (
      <>
        <StyledLogo variant="h3">POPSTORE</StyledLogo>
        <StyledNavButton variant="text" size="medium" active={false}>
          Home
        </StyledNavButton>
        <StyledNavButton variant="text" size="medium" active={true}>
          Dashboard
        </StyledNavButton>
        <StyledNavButton variant="text" size="medium" active={false}>
          Contact
        </StyledNavButton>
        <StyledNavButton variant="text" size="medium" active={false}>
          Login
        </StyledNavButton>
        <StyledLangButton />
      </>
    );
  };

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <StyledToolBar>
        {isMobile ? renderMobileNav() : renderDesktopNav()}
      </StyledToolBar>
    </StyledAppBar>
  );
};

export default Navigation;

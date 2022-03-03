import {
  NavbarContainer,
  Menu,
  MenuItem,
  Logo,
  CartIcon,
  LogoContainer,
} from "./NavBar.styles";
import { DropDown } from "../dropDown/DropDown";
import Cart from "../../icons/emptyCart.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <NavbarContainer>
      <div>
        <Menu>
          <MenuItem>
            <Link to="/">Women</Link>
          </MenuItem>
          <MenuItem active>
            <Link to="/">Men</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/">Kids</Link>
          </MenuItem>
        </Menu>
      </div>
      <LogoContainer>
        <Logo src={process.env.PUBLIC_URL + "/a-logo.svg"} />
      </LogoContainer>
      <div>
        <Menu>
          <DropDown />
          <CartIcon src={Cart} />
        </Menu>
      </div>
    </NavbarContainer>
  );
};

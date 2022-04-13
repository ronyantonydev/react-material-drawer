import { useContext } from "react";
import AlertContext from "../contextProvider/contextProvider";
import NavbarStyle from "./navbarStyle";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar: React.FC<{}> = (props) => {
  const { open } = useContext(AlertContext);

  return (
    <NavbarStyle>
      <div className="largeView">
        <div className="icon">InnoGenio</div>
        <div className="options">
          <div className="option">HOME</div>
          <div className="option">SERVICES</div>
          <div className="option">PORTFOLIO</div>
        </div>
      </div>
      <div
        className="sidebarIcon"
        onClick={() =>
          open({
            title: "INNOGENIO",
            open: true,
            callback: null
          })
        }
      >
        <MenuIcon />
      </div>
    </NavbarStyle>
  );
};
export default NavBar;

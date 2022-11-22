import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useAuth } from "../../AuthContext";

export default function Burger() {
  const { logout, user } = useAuth();
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }

  var styles = {
    bmBurgerButton: {
      position: "absolute",
      width: "36px",
      height: "30px",
      left: "10px",
      top: "17px",
    },
    bmBurgerBars: {
      background: "white",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "35px",
      width: "35px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0px",
    },
    bmMenu: {
      background: "black",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "white",
      padding: "0.8em",
    },
    bmItem: {
      display: "flex",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <Menu styles={styles} className="relative">
      <a id="home" className="menu-item my-[10px]" href="/">
        Home
      </a>
      <Link to="/about" id="about" className="menu-item my-[10px]">
        About Us
      </Link>
      {user?.displayName && (
        <Link to="/quizcategory" id="category" className="menu-item my-[10px]">
          Categories
        </Link>
      )}
      {user?.displayName && (
        <Link to="/history" id="category" className="menu-item my-[10px]">
          History
        </Link>
      )}
      {user?.displayName && <button onClick={handleSignOut}> Sign Out</button>}
      {user?.displayName && (
        <p className="absolute bottom-[10px] text-[80%]">
          Player: {user?.displayName}{" "}
        </p>
      )}
    </Menu>
  );
}


import React from 'react';

import { slide as Menu } from 'react-burger-menu';
import { useAuth } from "../../AuthContext";

export default function Burger(){
  const {logout,user}=useAuth();
    async function handleSignOut(){
        try{
         
        await logout();
       
      
        }
        catch(error){
            console.log(error);
        }
    }


  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '30px',
      top: '10px'
    },
    bmBurgerBars: {
      background: "white"
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '35px',
      width: '35px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: "black",
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: 'white',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return(
    <Menu styles={styles} className="bg-pink-300 relative">
         <a id="home" className="menu-item my-[10px]" href="/">Home</a>
        <a id="about" className="menu-item my-[10px]" href="/about">About Us</a>
        {user?.displayName && <button onClick={handleSignOut}> Sign Out</button>}
        {user?.displayName && <p className="absolute bottom-[10px] text-[80%]">Player: {user?.displayName} </p>}
      </Menu>
      
  )
}
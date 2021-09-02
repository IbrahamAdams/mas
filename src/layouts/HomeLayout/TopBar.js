import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { OutlinedInput } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FaStore } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
export default class Menu extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <div className="navBar">
          <div className="navLogoButton order1">
            <ul>
              <li>
                <Link to="/home">
                  <img src="/images/logo-beta.png" className="logo" alt="logo" />
                </Link>
              </li>
            </ul>
            <button onClick={this.Toggle}>
              <FaAlignRight />
            </button>
          </div>

          <ul
            className={
              this.state.toggle ? "nav-links show-nav" : "nav-links order2"
            }
          >
            <li className="userAddress">
              <img src="images/user-profile.png" alt=""  />
              <Link to="/profile">Wallet address Wallet address </Link>
            </li>
          </ul>

          <ul
            className={
              this.state.toggle ? "nav-links show-nav" : "nav-links order3"
            }
          >
            <li>
             <Link to="/auctionpage"> <FaStore style={{color:"#000",}} /></Link>
            </li>
            <li> 
             <Link to="/chat"> <BsChat style={{color:"#000",}} /></Link>
            </li>
            <li className="searchInput">
           <Link to="/SearchResult">
           <OutlinedInput
                type="text"
                className="seachInput"
                placeholder="search for a MAS or wallet address"
                variant="outlined"
                startAdornment={
                  <InputAdornment position="start">
                    <AiOutlineSearch />
                  </InputAdornment>
                }
              /></Link>
              {/* <img src={search} className="search" alt="search" /> */}
            </li>
          </ul>
        </div>
      </>
    );
  }
}

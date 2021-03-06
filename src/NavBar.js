import React from "react";
import { NavLink /* Link */ } from "react-router-dom";


function NavBar(props) {
  const { currentUser, onSignOut } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <div className="navbar-brand" href="/">Auctioneer.com</div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"> <NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item active"> <NavLink to="/new_auction" className="nav-link">New Auction</NavLink></li>
            <li className="nav-item active"> <NavLink to="/auctions" className="nav-link">Open Auctions</NavLink></li>

            {!currentUser && (<li className="nav-item active"><NavLink to="/sign_in" className="nav-link">Sign In</NavLink></li>)}

            {currentUser && (
              <>
                <li className="nav-link nav-item active"> Hello {currentUser.first_name} {currentUser.last_name}</li>
                <li className="nav-link nav-item active"> <a href="#boo" onClick={handleSignOutClick}>
                  Sign Out </a>
                </li>
              </> )}
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default NavBar;

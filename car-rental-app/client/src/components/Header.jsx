import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../utils/Tokens";

function Header() {
  const [isToken, setIsToken] = useState(false);
  //gettoken
  const token = getToken();
  //getuser

  function logOut() {
    //clear the token
    localStorage.removeItem("token");
    token = false;
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          My Car Rentals |
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/bookings">
                Bookings
              </Link>
            </li>
          </ul>
          <div class="navbar-text">
            {token ? (
              <div>
                <span>{}</span>
                <Link class="btn btn-secondary text-white" onClick={logOut}>
                  Logout
                </Link>
              </div>
            ) : (
              <Link class="btn btn-secondary text-white" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

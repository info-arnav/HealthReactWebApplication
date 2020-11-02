import React, { FunctionComponent, useEffect, useState } from "react";

const Navigator = (params) => {
  let { username } = params;
  const [data, finder] = useState({
    name: "",
    about: "",
    followers: "",
    username: "",
    profession: "",
  });
  const [datac, finderc] = useState({
    name: "",
    about: "",
    followers: [],
    username: "",
    following: [],
    profession: "",
    approved: "",
  });
  useEffect(() => {
    fetch(`/active/profile`).then((e) => e.json().then((e) => finder(e)));
  }, []);
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
      <div className="container">
        <a className="navbar-brand logo" href="/index">
          MEDCARE
        </a>
        <button
          data-toggle="collapse"
          className="navbar-toggler"
          data-target="#navbarNav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/index">
                Home
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
            {data.profession == "doctor" ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/edit">
                  Appointments
                </a>
              </li>
            ) : data.profession == "patient" ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/edit">
                  Make Appointment
                </a>
              </li>
            ) : (
              <div></div>
            )}
            {username ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/profile">
                  Profile
                </a>
              </li>
            ) : (
              <div></div>
            )}
            {username ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/logout">
                  requests
                </a>
              </li>
            ) : (
              <div></div>
            )}
            {username ? (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/logout">
                  Logout - {username}
                </a>
              </li>
            ) : (
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;

import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Hacker News Search App</h1>
        <hr className="my-4" />
        <p className="lead">
          Using the Javascript framework of your choice, build an application
          that has two pages users can navigate to:
        </p>

        <p>
          “/search” lets the user search the Hacker News Algolia API and
          displays a list of results <b>https://hn.algolia.com/api</b>{" "}
        </p>
        <p>
          “/history” shows the users a list of their past searches from this
          session (these do not need to persist through refresh).
        </p>
        <div className="spacing">
          <Link
            className="btn btn-dark btn-lg"
            role="button"
            exact
            to="/search"
          >
            Search
          </Link>
          <Link
            className="btn btn-dark btn-lg space-button-history"
            role="button"
            exact
            to="/history"
          >
            History
          </Link>
        </div>
      </div>
      <div>
        <img
          className="search-logo"
          src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-8.png"
          alt="..."
        ></img>
      </div>
    </>
  );
};

export default Home;

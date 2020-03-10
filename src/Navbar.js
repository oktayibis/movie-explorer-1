import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark ">
          <a href='./' className="navbar-brand">The Great Movie Database</a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Movie"
              aria-label="Search"
              onChange={e => this.props.handleChange(e)}
            />
            <button onClick={e=>this.props.handleSearch(e)} className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default Navbar;

import React from 'react';
import "./searchbar.css"

export default function SearchBar() {
  return (
    <>
      {/* <div className="homeContainer"> */}
        <div className="header">
          <form>
            <h1>growr</h1>
            <h3>Connecting green thumbs in your community.</h3>
              <div className="form-box">
                <input type="test" className="search-field" placeholder="Where Do You Live?" />
                <button className="search-btn" type ="submit">Search</button>
              </div>
          </form>
        </div>
      {/* </div> */}
    </>
  );
}
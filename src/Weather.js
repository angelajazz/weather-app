import React from "react";

export default function Weather() {
  return (
    <div className="container">
      <form className="container-input">
        <div className="row mt-3">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter City"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

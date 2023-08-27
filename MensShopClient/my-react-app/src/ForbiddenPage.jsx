import React from 'react';

const ForbiddenPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
            <br></br>
            <br></br>
            <br></br>
          <h1 className="display-4">403 Forbidden</h1>
          <p className="lead">Oops! You are not authorized to access this page.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-center">
          <img
            src="https://via.placeholder.com/300"
            alt="403 Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;

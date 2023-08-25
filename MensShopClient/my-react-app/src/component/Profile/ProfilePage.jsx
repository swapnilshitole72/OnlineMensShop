import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left-side navigation */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/profile" className="nav-link active">Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/messages" className="nav-link">Messages</Link>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {/* Your profile content goes here */}
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;

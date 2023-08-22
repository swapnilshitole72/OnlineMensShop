import React from 'react';

const ForgotPassword = () => {
  const handleOTPClick = () => {
    // Handle OTP logic here
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <div className="card-body">
          <h4 className="card-title">Forgot Password</h4>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input id="email" className="form-control" type="email" />
            </div>
            <div className="form-group">
              <label>OTP:</label>
              <input id="OTPemail" className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label>New Password:</label>
              <input className="form-control" type="password" />
            </div>
            <button type="button" className="btn btn-primary btn-block" onClick={handleOTPClick}>
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

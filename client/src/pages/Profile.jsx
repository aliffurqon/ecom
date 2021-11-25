import React from "react";

const Profile = () => {
  return (
    <div className="container mt-4 mb-3">
      <div className="row">
        <div className="col-3">
          <ul className="list-unstyled text-start fw-light">
            <li className="mt-2">
              <a href="#" className="text-dark">
                My Account
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-dark">
                Edit Password
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-dark">
                Order History
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-dark">
                Product Reminder History
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-dark">
                My Voucher
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="text-dark">
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="col-7">
          <h2>My Account</h2>
          <form className="box">
            <div className="mt-4">
              <label className="label">Name</label>
              <div className="controls">
                <input type="text" className="input" placeholder="Name" />
              </div>
            </div>
            <div className="mt-4">
              <label className="label">Email</label>
              <div className="controls">
                <input type="text" className="input" placeholder="Email" />
              </div>
            </div>
            <div className="mt-4">
              <label>Gender</label>
              <div className="controls">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">
                    Laki-laki
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">
                    Perempuan
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="label">Address</label>
              <div className="controls">
                <input type="text" className="input" placeholder="Address" />
              </div>
            </div>
            <div className="mt-4">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

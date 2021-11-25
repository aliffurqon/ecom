import React from "react";
import toko from "../img/toko.jpg";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-3 mt-3">
            <div className="card-body">
              <h2 className="text-center">LOGIN KAOS KU</h2>
              <div className="container">
                <div className="">
                  <form className="box">
                    <p className="text-center"></p>
                    <div className="mt-5">
                      <label className="label">Email or Username</label>
                      <div className="controls">
                        <input type="text" className="input" placeholder="Username" />
                      </div>
                    </div>
                    <div className="mt-5">
                      <label className="label">Password</label>
                      <div className="controls">
                        <input type="password" className="input" placeholder="******" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <h8 className="fw-light">
                        Belum Punya Akun Kaos Ku? Daftar <a href="/register">Disini</a>
                      </h8>
                    </div>
                    <div className="mt-3">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={toko} alt="toko" />
        </div>
      </div>
    </div>
  );
};

export default Login;

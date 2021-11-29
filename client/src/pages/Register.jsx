import React from "react";
import toko from "../img/toko.jpg";
//import hook useState from react
// import { useState } from "react";
//import axios
// import axios from "axios";
//import hook history dari react router dom
// import { useHistory } from "react-router-dom";

const Register = () => {
  //state
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");
  // const [address, setAddress] = useState("");
  // const [type, setType] = useState("");

  // //state validation
  // const [validation, setValidation] = useState({});

  // //history
  // const history = useHistory();

  // const registerUser = async (e) => {
  //   e.preventDefault();

  //   //send data to server
  //   await axios
  //     .post("http://localhost:3001/users/register", {
  //       name: name,
  //       email: email,
  //       password: password,
  //       gender: gender,
  //       address: address,
  //       type: type,
  //     })
  //     .then(() => {
  //       //redirect
  //       history.push("/login");
  //     })
  //     .catch((error) => {
  //       //assign validation on state
  //       setValidation(error.response.data);
  //     });
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-3 mt-3">
            <div className="card-body">
              <h2 className="text-center">REGISTER KAOS KU</h2>
              <form className="box">
                <p className="text-centere"></p>
                <div className="mt-5">
                  <label className="label">Name</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Name" />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Email" />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder="******" />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="label">Confirm Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder="******" />
                  </div>
                </div>
                <div className="mt-5">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-5">
          <img src={toko} alt="toko" />
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from 'react'
import toko from '../img/toko.jpg'


const Register = () => {
    
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
                                        <input type="text" className="input" placeholder="Name"
                                         />
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
                    <img src={toko} alt="toko"/>
                </div>
            </div>
        </div>
    )
}

export default Register

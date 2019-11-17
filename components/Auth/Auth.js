import React from 'react';

const Auth = props => {
    const {enter, changeLogin, login, changePassword, password} = props;

    return (
        <form onSubmit={enter}>
            <div className="input-group form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Enter login"
                       onChange={changeLogin}
                       value={login}
                       id="exampleInputLogin"
                       aria-describedby="loginHelp"
                />

            </div>
            <div className="input-group form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                </div>
                <input type="password" className="form-control" placeholder="Password"
                       onChange={changePassword}
                       value={password}
                       id="exampleInputPassword"
                />
            </div>

            <div className="form-group">
                <input style={{backgroundColor: '#e9ecef'}} type="submit" value="Login"
                       className="btn float-right login_btn mb-3"/>
            </div>
        </form>

    );
};


export default Auth;

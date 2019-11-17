import React, {Component} from 'react';
import Auth from '../Auth/Auth';

class AuthShell extends Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            isAuth: false,
        };
    }

    enter = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('username', this.state.login);
        data.append('password', this.state.password);

        let response = await fetch(
            `https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=AnnMgerian`,
            {
                method: 'POST',
                body: data,
            }
        );
        let responseData = await response.json();
        localStorage.setItem('token', responseData.message.token);
        localStorage.getItem('token') &&
        localStorage.getItem('token') !== 'undefined'
            ? this.setState({isAuth: true})
            : this.setState({isAuth: false});
        if (responseData.status === 'error') {
            alert('Invalid login or password');
        }

    };

    changeLogin = e => {
        this.setState({login: e.target.value});
    };

    changePassword = e => {
        this.setState({password: e.target.value});
    };

    componentDidMount() {
        localStorage.getItem('token') &&
        localStorage.getItem('token') !== 'undefined'
            ? this.setState({isAuth: true})
            : this.setState({isAuth: false});
    }

    render() {
        return (
            <div>
                {this.state.isAuth ? (

                    <button
                        onClick={() => {
                            this.setState({isAuth: false});
                            localStorage.setItem('token', '');
                        }}
                        type="button"
                        style={{backgroundColor: '#e9ecef'}}
                        className="btn float-right login_btn mb-3"
                    >
                        Logout
                    </button>
                ) : (
                    <Auth
                        enter={this.enter}
                        changeLogin={this.changeLogin}
                        login={this.state.login}
                        changePassword={this.changePassword}
                        password={this.state.password}
                    />
                )}
            </div>
        );
    }
}

export default AuthShell;

import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'shuvo',
            password: '1',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) { 
        //console.log(this.state);

        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
        
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.name);

    //     this.setState(
    //         {
    //             [event.target.name] : event.target.value
    //         }
    //     )

        
    // }


    // handlePasswordChange(event) {
    //     console.log(event.target.value);

    //     this.setState(
    //         {
    //             password: event.target.value
    //         }
    //     )
    // }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {/*this.state.showSuccessMessage && <div>Login sucessful</div>*/}
                    User Name: <input type="text" name = "username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div> 
        )
    }


    loginClicked() {
        //shuvo, dummy
        if(this.state.username === 'shuvo' && this.state.password === 'dummy') {
            //console.log('successful')
            this.props.history.push(`/welcome/${this.state.username}`)
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed:false})
        }
        else{
            //console.log('failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
        //console.log("loging clicked")
    }
}

export default LoginComponent
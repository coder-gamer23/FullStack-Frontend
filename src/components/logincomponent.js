import React, { Component } from "react";
import Button from '@mui/material/Button';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super()
        this.state = {
            email: '',
            password:'',
            role:'',
        }
       
    }
    
    
    render() {
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            if(this.state.role==="user")
            {
            try{
                
                var response = await axios.post('https://book-backend-project.herokuapp.com/register/login', {
                    password: this.state.password,
                    email: this.state.email
                })
                if(response.data) {
                    await localStorage.setItem('token',response.data);
                    this.props.history.push('/book');
                }
            } catch(err) {
                console.warn(err)
            }
         }
         if(this.state.role==="admin")
            {
            try{
                
                 response = await axios.post('https://book-backend-project.herokuapp.com/register/Adminlogin', {
                    password: this.state.password,
                    email: this.state.email
                })
                if(response.data) {
                    await localStorage.setItem('token',response.data);
                    this.props.history.push('/bookAdmin');
                }
            } catch(err) {
                console.warn(err)
            }
         }
        }
        return (
            <div className="App" style={{padding:"10%"}}>
                <div className="auth-wrapper">
                    <div className="auth-inner">
            <form onSubmit={(e) => handleSubmit(e)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label><br></br>
                    <input type="email" className="form-control" placeholder="Enter email" required value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})}/><br></br>
                </div>

                <div className="form-group">
                    <label>Password</label><br></br>
                    <input type="password" className="form-control" placeholder="Enter password" required value={this.state.password} onChange={(e)=> this.setState({password: e.target.value})}/><br></br>
                </div>
                <div className="form-group">
                                <label>Role</label><br></br>
                                <input type="text" className="form-control" placeholder="Enter admin or user" required value={this.state.role} onChange={(e)=> this.setState({role: e.target.value})} />
                            </div><br></br>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />&nbsp;
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label><br></br>
                    </div>
                </div><br></br>

                <button type="submit" className="btn btn-primary btn-block">Submit</button><br></br>
                <p className="forgot-password text-right">
                    
                </p>
                <p>
                    Not a registered user?
                    <Button onClick={(e)=>this.props.history.push('/sign-up')}>Signup</Button>
                </p>
            </form>
            </div>
            </div>
            </div>
        );
    }
}

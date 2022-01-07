import React, { Component } from "react";
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            name: '',
            address: '',
            phone: '',
            role: '',
        }
    }
    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();

            if (this.state.role === "user")
             {
                try
                 {
                     var response = await axios.post('https://book-backend-project.herokuapp.com/register/signup',{
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email,
                        name: this.state.name,
                        address: this.state.address,
                        phone: this.state.phone,
                        role: this.state.role
                    })
                        if (response.data)
                         {
                                await localStorage.setItem('token',response.data);
                                console.log("success");
                                this.props.history.push('/sign-in');
                        }
                 } catch (err) {
                    console.warn(err)
                }
            }
            if (this.state.role === "admin")
             {
                try 
                {
                     response = await axios.post('https://book-backend-project.herokuapp.com/register/Adminsignup', {
                        username: this.state.username,
                        password: this.state.password,
                        email: this.state.email,
                        name: this.state.name,
                        address: this.state.address,
                        phone: this.state.phone,
                        role: this.state.role
                    })
                    if (response.data) 
                    {
                        await localStorage.setItem('token',response.data);
                        console.log("success");
                        this.props.history.push('/sign-in');
                    }
                } catch (err) {
                    console.warn(err)
                }
            }
        }

            return (
                <div className="App" style={{ padding: "5%" }}>
                    <div className="auth-wrapper">
                        <div className="auth-inner" style={{ padding: "1%" }}>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <h3>Sign Up</h3>

                                <div className="form-group">
                                    <label>UserName</label><br></br>
                                    <input type="text" className="form-control" placeholder="UserName" minLength={4} maxLength={15} required value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Email address</label><br></br>
                                    <input type="email" className="form-control" placeholder="Enter email" required minLength={6} maxLength={50} value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Name</label><br></br>
                                    <input type="text" className="form-control" placeholder="Name" required minLength={4} maxLength={50} value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Location</label><br></br>
                                    <input type="text" className="form-control" placeholder="Chennai or Hyderabad Location" minLength={5} maxLength={50} required value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Phone</label><br></br>
                                    <input type="text" className="form-control" placeholder="00000" maxLength={10} required value={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Password</label><br></br>
                                    <input type="password" className="form-control" placeholder="Enter password" minLength={8} maxLength={10} required value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Role</label><br></br>
                                    <input type="text" className="form-control" placeholder="Enter admin or user" required value={this.state.role} onChange={(e) => this.setState({ role: e.target.value })} />
                                </div><br></br>

                                <button type="submit" className="btn btn-primary btn-block">Sign Up</button><br></br>
                                <p className="forgot-password text-right">
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }

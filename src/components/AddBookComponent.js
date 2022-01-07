import React, { Component } from "react";
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default class AddBook extends Component {
    constructor(props) {
        super()
        this.state = {
            bookname: '',
            authorname: '',
            published: '',
            link: '',
            
        }
    }
    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token');
             var decodedToken = jwt.decode(token);
             if (decodedToken.exp * 1000 <= Date.now()) {
               this.props.history.push('/');
            } else {
             try 
                {
                    var response = await axios.post('http://book-backend-project.herokuapp.com/book/addbook', {
                        bookname: this.state.bookname,
                        authorname: this.state.authorname,
                        published: this.state.published,
                        link: this.state.link
                },
                {
                    headers: {
                        'access-token': token
                    }
                        
                    })
                    if (response.data) 
                    {
                        console.log("success");
                        this.props.history.push('/bookAdmin');
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
                                <h3>Add Book</h3>

                                <div className="form-group">
                                    <label>BookName</label><br></br>
                                    <input type="text" className="form-control" placeholder="BookName" minLength={2}  required value={this.state.bookname} onChange={(e) => this.setState({ bookname: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Author Name</label><br></br>
                                    <input type="text" className="form-control" placeholder="Authorname" required minLength={5} value={this.state.authorname} onChange={(e) => this.setState({ authorname: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Published</label><br></br>
                                    <input type="number" className="form-control" placeholder="Name" required minLength={4}  value={this.state.published} onChange={(e) => this.setState({ published: e.target.value })} />
                                </div><br></br>

                                <div className="form-group">
                                    <label>Link</label><br></br>
                                    <input type="text" className="form-control" placeholder="www.somethig.com"   required value={this.state.link} onChange={(e) => this.setState({ link: e.target.value })} />
                                </div><br></br>

                                <button type="submit" className="btn btn-primary btn-block">Upload</button><br></br>  
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
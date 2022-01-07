import React, { Component } from "react";
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default class DeleteBook extends Component {
    constructor(props) {
        super()
        this.state = {
            bookname: ''
        }
    }
    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            const token = localStorage.getItem('token');
             var decodedToken = jwt.decode(token);
             console.log(decodedToken);
             if (decodedToken.exp * 1000 <= Date.now()) {
               this.props.history.push('/');
            }else {
            try 
                {
                    var response = await axios.delete('https://book-backend-project.herokuapp.com/book/deletebook', {
                        bookname: this.state.bookname
                },
                {
                    headers: {
                        'access-token': token
                    }
                    })
                    if (response.data) 
                    {
                        console.log("Deleted");
                        this.props.history.push('/bookAdmin');
                    }
                } catch (err) {
                    console.log(err)
                }
            }
        }
        return (
            <div className="App" style={{ padding: "5%" }}>
                <div className="auth-wrapper">
                    <div className="auth-inner" style={{ padding: "1%" }}>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <h3>Delete Book</h3>

                            <div className="form-group">
                                <label>BookName</label><br></br>
                                <input type="text" className="form-control" placeholder="BookName" minLength={2}  required value={this.state.bookname} onChange={(e) => this.setState({ bookname: e.target.value })} />
                            </div><br></br>

                           <button type="submit" className="btn btn-primary btn-block">Delete</button><br></br>  
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

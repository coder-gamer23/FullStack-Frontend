import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


import Login from "./components/logincomponent";
import SignUp from "./components/signupcomponent";
import Home from "./components/Homecomponent";
import Book from "./components/BookComponent";
import BookAdmin from "./components/BookAdminComponent";
import AddBook from "./components/AddBookComponent";
import DeleteBook from "./components/DeleteBookComponent";

function App() {
  return (
    <>
        <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/book" component={Book}/>
            <Route exact path="/bookAdmin" component={BookAdmin}/>
            <Route exact path="/createbook" component={AddBook}/>
            <Route exact path="/deletebook" component={DeleteBook}/>
          </Switch>
        </BrowserRouter>
      </div>

      

    </>
  );
}

export default App;




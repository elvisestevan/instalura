import React, { Component } from "react";
import {Route, Redirect} from "react-router-dom";

class PrivateRoute extends Component {

  render() {
    return (
        <Route
          render={props =>
            this.isAuthenticated() ? (
              <this.props.component {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/"
                }}
              />
            )
          }
        />
      
      
    );    
  }

  isAuthenticated() {
    return localStorage.getItem("auth-token") !== null;
  }

}

export default PrivateRoute;
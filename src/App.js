import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthenticatedRount from "./services/AuthenticatedRoute";
import Login from "./views/Pages/Login";
import Dashboard from "./views/Dashboard";
import Layout from "./views/hoc/layout";
import CallBack from "./services/callback";
import "./App.css";
import NotizenEmail from "./views/Email/NotizenEmail";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);



// Pages

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Layout>
            <Switch>
              <Route exact path="/login" name="Login Page" component={Login} />
              <Route exact path="/" name="home" component={CallBack} />
              <AuthenticatedRount
                exact
                path="/qsales"
                name="home"
                render={(props) => <Dashboard {...props} />}
              />
            </Switch>
          </Layout>
        </React.Suspense>
      </BrowserRouter>
                 

    );
  }
}

  
export default App;

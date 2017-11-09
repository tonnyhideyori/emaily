import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: "0 10px", padding: "0px" }}>
            Credits:{this.props.auth.credits}
          </li>,
          <li key="2">
            <button className="waves-effect waves-light btn red">
              <a href="/api/logout">Logout</a>
            </button>
          </li>
        ];
    }
  }

  render() {
    return (
      <div style={{ marginBottom: "0px" }}>
        <nav className="navbar navbar-inverse ">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link
                to={this.props.auth ? "/survey" : "/"}
                className="brand-logo navbar-left"
              >
                S-APP
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                {this.renderContent()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

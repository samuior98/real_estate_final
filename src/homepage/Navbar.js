import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Link } from "react-router-dom";
import logo from '../images/logo.png';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse">
                            <Link to="/" className="nav-link navbar-brand">
                                <img src={logo} width="75" height="75" alt=""/>
                            </Link>

                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to="/agents" className="nav-link">Agents</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to="/houses" className="nav-link">Houses</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Outlet />
            </div>
        );
    }
}

export default Navbar;
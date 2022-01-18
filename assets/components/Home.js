import * as React from "react";
import {Routes, Route, Link, Outlet} from "react-router-dom";
import Users from './Users';

export default function App(){
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="users" element={<Users/>}/>
                    </Route>
                </Routes>
            </div>
        );
}

function Layout(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className={"navbar-brand"} to="/"> Wyszukiwarka Wydarzeń </Link>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className={"nav-link"} to="/users"> Users </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}

function Home(){
    return (
        <div className="row container">
            <div className="col-12">
                <h1>Wyszukiwarka Wydarzeń</h1>
            </div>
        </div>
    );
}
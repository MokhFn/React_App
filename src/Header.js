/**
 * Created by Mokh on 17/01/2017.
 */
import React from 'react';
class Header extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render () {
        return (
            <div className="page-header navbar navbar-fixed-top">
                <div className="page-header-inner">
                    <div className="page-logo">
                        <a href='#' className="navbar-left"/>
                            <img src="/logo.png" alt="logo" className="logo-default" height="50" width="90"/>
                    </div>
                    <div className="top-menu">
                        <ul className="nav navbar-nav pull-right">
                            <li className="dropdown">
                                Hello Caroline
                            </li>
                            <li className="dropdown dropdown-user">
                                <a href="" className="dropdown-toggle">
                                    <img alt="avatar" className="img-circle" src="/avatar.png">
                                    </img>
                                </a>
                            </li>

                            <li>
                                <div className="menu-toggler sidebar-toggler">
                                    <span></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header
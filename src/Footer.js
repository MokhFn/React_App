/**
 * Created by Mokh on 17/01/2017.
 */

import React from 'react';
class Footer extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="page-footer">
                <div className="page-footer-inner">
                    <div className="container text-center">
                        <a href="">About us</a>
                        &nbsp;|&nbsp;
                        <a href="">FAQ</a>
                        &nbsp;|&nbsp;
                        <a href="">Privacy</a>
                        &nbsp;|&nbsp;
                        <a href="">Contact</a>
                        &nbsp;|&nbsp;
                        <a href="">Terms</a>
                    </div>
                </div>
                <div className="pull-right">
                        <a href="#"><i className="fa fa-facebook">

                        </i>
                        </a>
                        <a href="#"><i className="fa fa-twitter">

                        </i>
                        </a>
                        <a href="#"><i className="fa fa-instagram">

                        </i>
                        </a>
                        <a href="#"><i className="fa fa-youtube">

                        </i>
                        </a>
                    </div>
            </div>

        );
    }
}

export  default Footer
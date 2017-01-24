/**
 * Created by Mokh on 17/01/2017.
 */

import React from 'react';
//import EmailInput from './components/EmailInput'
//require('css/stylesheet.css');

class ProfileHeader extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render () {

        return (
            <div className="center-block">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="portlet light card card-3">
                            <div className="portlet-body">
                                <div className="row">
                                    <div className="col-sm-5">
                                        <h1 >Caroline</h1>
                                        <h1 >CHJ Interiors</h1>
                                    </div>
                                    <div className="col-sm-7">
                                        <div className="pull-right">
                                            <div className="row">
                                                <div className="col-sm-6 pull-left">
                                                    <p>
                                                        <b>
                                                            BLOGGER NAME
                                                        </b><br/>
                                                        <b>
                                                            LIVES IN
                                                        </b><br/>
                                                        <b>
                                                            FROM
                                                        </b><br/>
                                                        <b>
                                                            SPEAKS
                                                        </b><br/>
                                                        <b>
                                                            AGE
                                                        </b><br/>
                                                        <b>
                                                            AGENCY
                                                        </b>
                                                    </p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <img src="/user.png" className="img-thumbnail" alt="Cinque Terre" width="150" height="100"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export  default ProfileHeader
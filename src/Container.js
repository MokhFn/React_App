/**
 * Created by Mokh on 18/01/2017.
 */

import React from 'react';
import ProfileHeader from './ProfileHeader'
import SMStats from './SMStats'
import InfoContainer from './InfoContainer'
class Container extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render () {
        return (
            <div className="page-container center-block">
                <ProfileHeader/>
                <SMStats/>
                <div className="row">
                    <InfoContainer />
                    <div className="col-md-7">
                        <div className="row">
                            <div className="portlet light card card-3">
                                <div className="portlet-body">
                                    <h2>
                                        Activity and Topics
                                    </h2>
                                    <h2>
                                        Defined
                                    </h2>
                                    <h2>
                                        CHJ Interiors
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="portlet light card card-3">
                                <div className="portlet-body">
                                    <h2>
                                        Activity and Topics
                                    </h2>
                                    <h2>
                                        Defined
                                    </h2>
                                    <h2>
                                        CHJ Interiors
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export  default Container
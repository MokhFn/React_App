/**
 * Created by Mokh on 18/01/2017.
 */

import React from 'react';

class InfoContainer extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render () {
        return (
            <div className="col-md-3 col-md-offset-1">
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
        );
    }
}

export  default InfoContainer
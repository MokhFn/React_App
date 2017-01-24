/**
 * Created by Mokh on 17/01/2017.
 */

import React from 'react';

class SMStats extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render () {
        const style = {"background-color" : "yellow"};
        const style_info = {"margin " : "auto","padding" : "10px", "border-right": "1px solid #000000"};
        const style_padding = {"margin " : "auto","padding" : "10px"};
        return (
            <div className="center-block">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="portlet light card card-3" style={style}>
                            <div className="portlet-body">
                                <div className="row text-center">
                                    <i className="fa fa-facebook" />
                                    <b style={style_info}>
                                        Facebook : 50000
                                    </b>
                                    <i className="fa fa-instagram" style={style_padding}/>
                                    <b style={style_info}>
                                        IINSTAGRAM : 50000
                                    </b>
                                    <i className="fa fa-twitter" style={style_padding}/>
                                    <b>
                                        TWITTER : 50000
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export  default SMStats
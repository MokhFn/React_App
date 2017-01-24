/**
 * Created by Mokh on 17/01/2017.
 */

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
//import EmailInput from './components/EmailInput'
//require('css/stylesheet.css');
class Wrapper extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render () {
        return(
            <div className="page-wrapper">
                <Header />
                <div className="clearfix">

                </div>
                <Container/>
                <Footer/>
            </div>
        );


    }
}

export  default Wrapper
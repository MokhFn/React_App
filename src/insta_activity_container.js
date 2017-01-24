/**
 * Created by Mokh on 18/01/2017.
 */

import React from 'react';
import { render } from 'react-dom';
//import EmailInput from './components/EmailInput'
//require('css/stylesheet.css');

class insta_activity_container extends React.Component {

    constructor() {
        super();
        this.state = {
            valid: false,
            value : "",
            text : ""
        };
    }

    render () {
        const {
            value
        } = this.state.value;
        return (
            <span>
        <span>Email: </span><br />
        <input type='text' value={value} onChange={this.handleChange.bind(this)} /><br />
          <span>{this.state.text}</span>
      </span>
        );
    }
}

export  default insta_activity_container
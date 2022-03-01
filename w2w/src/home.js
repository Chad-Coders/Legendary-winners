import React from "react";
import './stylesheet/style.css';
const reactStringReplace = require('react-string-replace')

export default class Item extends React.Component {

    render() {
        return (
            <div>
                <img alt="erlich" src={require('./img/erlich.jpg')}>
                </img>
            </div>
        )
    }
}
import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return (
            <>
                <span className="icon-message">
                    <span className="text-white font-size-15">
                    <img src={require('../../images/login/Group1.png')} style={{ width: "100%" }} alt="" />
                    </span>
                </span>
            </>
        );
    }
}

export default Icon;

import React from 'react';
import "./SignLayout.scss";

function SignLayout(props) {
    return (
        <div id="sign-page" className="container-fluid">
            <div className="sign-wrapper">
                {props.children}
            </div>
        </div>
    );
}

export default SignLayout;

import React from "react";

function Alert(props) {
    return (
        <>{

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {/* <strong>{props.alert.type}</strong>: */}
            {props.alert.msg}
            <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" aria-hidden="true"/>
        </div>
        }
        </>
    )
}

export default Alert;
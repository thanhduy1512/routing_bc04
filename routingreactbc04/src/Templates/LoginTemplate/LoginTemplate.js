import { Route } from "react-router-dom";

import React, { Fragment } from "react";
import Header from "../../Components/Header/Header";

export default function HomeTemplate(props) { //object, array, string, number, function
    //chèn hook HOC Higher order component

    // const { component, path } = props;

    return (
        <Fragment>
            <Route path={props.path} render={(propsRoute) => {
                return <Fragment>
                    <div className="row">
                        <div className="col-6">
                            <img src="https://picsum.photos/1000" style={{ height: "100vh", width: "97%" }} />
                        </div>
                        <div className="col-6 d-flex flex-column align-item-center justify-content-center">
                            <props.component {...propsRoute} />
                        </div>
                    </div>
                </Fragment>
            }} />
        </Fragment>
    )
}
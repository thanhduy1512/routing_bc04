import { Route } from "react-router-dom";

import React, { Fragment, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";

export default function HomeTemplate(props) {

    //Lấy loading từ reducer về
    const { isLoading } = useSelector(state => state.LoadingReducer);


    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'HIDE_LOADING' });
        }, 1000);
        return () => {
            dispatch({ type: 'DISPLAY_LOADING' });
        }
    }, [isLoading]);

    const renderLoading = () => {
        if (isLoading) {
            return <div style={{ position: 'fixed', zIndex: 10, width: '100%', height: '100%', top: 0, left: 0, backgroundColor: 'rgba(0,0,0,.5)' }}>
                <div className="d-flex flex-column align-item-center justify-content-center w-100 h-100 text-center text-white">
                    Loading...
                </div>
            </div>
        }
    }

    // const { component, path, exact } = props;

    return (
        <Fragment>
            {/* <Header />
            <Route path={path} component={component} /> */}

            <Route path={props.path} exact render={(propsRoute) => {
                return <Fragment>
                    <Header {...propsRoute} />
                    <props.component {...propsRoute} />
                </Fragment>
            }} />
        </Fragment>
    )
}
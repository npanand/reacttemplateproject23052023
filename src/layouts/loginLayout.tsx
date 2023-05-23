import React, { Component, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';


const Login = lazy(() => import('../components/auth/login/login.component'));

class LoginLayout extends Component<any, any> {

    static propTypes: { match: PropTypes.Validator<any>; };


    render() {

        const { match } = this.props;

        return (
            <>

                <div className="SG360CSlayoutContainer">

                    <div className="top-right-corner-bg"></div>

                    <Switch>

                        <Route
                            exact path={`${match.path}/login`}
                            render={(props) => <Login />} />

                        <Route path="*" component={Login} />


                    </Switch>

                    <div className="bottom-left-corner-bg"></div>

                </div>


            </>
        )
    }
}



LoginLayout.propTypes = {
    match: PropTypes.any.isRequired
}

export default LoginLayout;
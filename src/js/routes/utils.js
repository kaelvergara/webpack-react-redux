import React from 'react';
import {Route} from 'react-router-dom';

export function asyncComponent(getComponent) {
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = {Component: AsyncComponent.Component};

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(Component => {
                    AsyncComponent.Component = Component;
                    this.setState({Component});
                });
            }
        }

        render() {
            const {Component} = this.state;

            if (Component) {
                return <Component {...this.props} />;
            }

            return null;
        }
    };
}

export const RouteWithSubRoutes = (route) => {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )} />
    );
};

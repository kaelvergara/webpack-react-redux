import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {RouteWithSubRoutes} from 'shared/route.util';

export default class NestedRoute extends React.Component {
    render() {
        return (
            <div>
                <h2>Nested Route</h2>
                <ul>
                    <li><Link to="/nested-route/form">Form</Link></li>
                    <li><Link to="/nested-route/table">Table</Link></li>
                </ul>
                {this.props.routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        );
    }
}

NestedRoute.defaultProps = {
    routes: []
};

NestedRoute.propTypes = {
    routes: PropTypes.array
};

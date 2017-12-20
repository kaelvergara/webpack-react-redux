import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import {RouteWithSubRoutes} from 'shared/route.util';
import {Switch} from 'react-router';

export default class Base extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <div className="content">
                    <div className="container-fluid">
                        <div className="col-xs-12">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <Switch>
                                        {this.props.routes.map((route, i) => (
                                            <RouteWithSubRoutes key={i} {...route} />
                                        ))}
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

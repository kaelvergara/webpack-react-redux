import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import {RouteWithSubRoutes} from 'routes/utils';
import list from 'routes/list';
import LintError from './pages/LintError';

export default function App() {
    return (
        <div>
            <Header />
            <Sidebar />

            <div className="content">
                <div className="container-fluid">
                    <div className="col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                {list.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <LintError /> */}
        </div>
    );
}

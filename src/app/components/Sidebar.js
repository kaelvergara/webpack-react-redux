import React from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__navigation-links">
                    <span className="sidebar__link-header">Links</span>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/nested-route">Nested Route</Link></li>
                        <li><Link to="/redux-example">Redux Example</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

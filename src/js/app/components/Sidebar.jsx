
import React from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__navigation-links">
                    <span className="sidebar__link-header">Links</span>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                    </ul>
                    <span className="sidebar__link-header">Routes</span>
                    <ul>
                        <li><Link to="/path-param/exist">Path Param</Link></li>
                        <li><Link to="/nested-route">Nested Route</Link></li>
                    </ul>
                    <span className="sidebar__link-header">Redux form</span>
                    <ul>
                        <li><Link to="/redux-form">Simple Form</Link></li>
                    </ul>
                    <span className="sidebar__link-header">Performance</span>
                    <ul>
                        <li><Link to="/random-render">Random Render</Link></li>
                    </ul>
                    <span className="sidebar__link-header">Scoreboard</span>
                    <ul>
                        <li><Link to="/score-board">Scoreboard</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

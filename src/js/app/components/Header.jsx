import React from 'react';

import ReactLogo from 'img/react.png';

export default class Header extends React.PureComponent {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">
                            <img alt="Brand" src={ReactLogo} className="header__brand-icon" />
                        </a>
                        <p className="navbar-text header__brand-text">React - The Good Parts</p>
                    </div>
                </div>
            </nav>
        );
    }
}

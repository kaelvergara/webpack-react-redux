import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Stats players={this.props.players} />
                <h1>Scoreboard</h1>
                <Stopwatch />
            </div>
        );
    }
}

Header.propTypes = {
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        score: React.PropTypes.number
    }))
};

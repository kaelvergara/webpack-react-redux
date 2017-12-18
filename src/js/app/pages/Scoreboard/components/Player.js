import React from 'react';

import Counter from './Counter';

export default class Player extends React.Component {
    render() {
        return (
            <div className="player">
                <div className="player-name">
                    <a className="remove-player" onClick={this.props.onRemove} role="button" tabIndex="0">✖</a>
                    {this.props.name}
                    {/* this.props.score === 55 ? ' - Cool!' : ' - Not Cool1'*/}
                </div>
                <div className="player-score">
                    <Counter onChange={this.props.onScoreChange} score={this.props.score} />
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    onScoreChange: React.PropTypes.func.isRequired
};

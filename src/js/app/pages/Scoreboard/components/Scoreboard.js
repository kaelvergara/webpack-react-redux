import React from 'react';

import Player from './Player';
import Header from './Header';
import AddPlayerForm from './AddPlayerForm';

import '../styles/scoreboard.scss';

export default class Scoreboard extends React.PureComponent {
    onScoreChange = (index, delta) => {
        this.props.onScoreChange({index, delta});
    }

    onAddPlayer = (name) => {
        this.props.onAddPlayer({name});
    }

    onRemovePlayer = (index) => {
        this.props.onRemovePlayer({index});
    }

    render() {
        return (
            <div className="scoreboard">
                <Header players={this.props.players} />
                <div className="players">
                    {this.props.players.map((player, index) => {
                        return (
                            <Player
                                name={player.name}
                                score={player.score}
                                key={player.name}
                                onScoreChange={(delta) => this.onScoreChange(index, delta)}
                                onRemove={() => this.onRemovePlayer(index)} />
                        );
                    })}
                </div>
                <AddPlayerForm onAdd={this.onAddPlayer} />
            </div>
        );
    }
}

Scoreboard.defaultProps = {
    players: []
};

Scoreboard.propTypes = {
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string,
        score: React.PropTypes.number
    })),
    onAddPlayer: React.PropTypes.func,
    onRemovePlayer: React.PropTypes.func,
    onScoreChange: React.PropTypes.func
};


import React from 'react';

export default class Stats extends React.Component {
    render() {
        const playerCount = this.props.players.length;
        const totalPoints = this.props.players.reduce((total, player) => {
            return total + player.score;
        }, 0);

        console.log(totalPoints);

        return (
            <table className="stats">
                <tbody>
                    <tr>
                        <td>Players:</td>
                        <td>{playerCount}</td>
                    </tr>
                    <tr>
                        <td>fsfsdfl Points:</td>
                        <td>{totalPoints}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

Stats.propTypes = {
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
        score: React.PropTypes.number
    }))
};

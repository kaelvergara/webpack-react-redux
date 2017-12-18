import React from 'react';

export default class Counter extends React.PureComponent {
    render() {
        return (
            <div className="counter" >
                <button className="counter-action decrement" onClick={() => this.props.onChange(-1)}>
                -
                </button>
                <div className="counter-score"> {this.props.score} </div>
                <button className="counter-action increment" onClick={() => this.props.onChange(1)}>
                +
                </button>
            </div>
        );
    }
}

Counter.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    score: React.PropTypes.number.isRequired
};

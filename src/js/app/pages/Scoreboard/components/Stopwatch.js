import React from 'react';

const MILLISECOND_IN_A_SECOND = 1000;

export default class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            previouseTime: 0,
            elapsedTime: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.onTick);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onStart = () => {
        this.setState({
            running: true,
            previousTime: Date.now()
        });
    }

    onStop = () => {
        this.setState({
            running: false
        });
    }

    onReset = () => {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now()
        });
    }

    onTick = () => {
        if (this.state.running) {
            const now = Date.now();

            this.setState({
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
                previousTime: Date.now()
            });
        }
    }

    render() {
        const seconds = Math.floor(this.state.elapsedTime / MILLISECOND_IN_A_SECOND);
        let button;

        if (this.state.running) {
            button = <button onClick={this.onStop}>Stop</button>;
        } else {
            button = <button onClick={this.onStart}>Start</button>;
        }

        return (
            <div className="stopwatch" >
                <h2>Stopwatch</h2>
                <div className="stopwatch-time"> {seconds} </div>
                {button}
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}



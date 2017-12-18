import React from 'react';
import classnames from 'classnames';

export default class RandomRender extends React.Component {
    render() {
        return (
            <div>
                Random Render
                <button type="button" className="btn btn-default" onClick={this.props.reRender}>Re-Render Random item</button>
                <div>
                    {
                        this.props.numbers.entrySeq().map((i) => {
                            return <Row rowNumbers={i[1]} />;
                        })
                    }
                </div>
            </div>
        );
    }
}

class Row extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.rowNumbers !== this.props.rowNumbers;
    }

    render() {
        return (
            <div>
                {
                    this.props.rowNumbers.entrySeq().map((v) => {
                        return (
                            <Label text={v[1]} />
                        );
                    })
                }
            </div>
        );
    }
}

class Label extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.text !== this.props.text;
    }

    render() {
        const displayClass = classnames({
            highlight: this.props.text === 'X'
        });

        return (
            <span className={displayClass}>{this.props.text} </span>
        );
    }
}

// Quick Notes
/*
<span>
    <span>
        <span>
            <span>
                <span>
                    <span>
                        <span>
                            <span>
                                <span>
                                    <span>{this.props.text} </span>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
            </span>
        </span>
    </span>
</span>
*/

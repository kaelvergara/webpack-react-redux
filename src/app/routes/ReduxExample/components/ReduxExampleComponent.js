import React from 'react';
import PropTypes from 'prop-types';

export default class ReduxExampleComponent extends React.Component {
    constructor() {
        super();
    }

    onBlur(event) {
        this.props.onEditText(event.target.value);
    }

    render() {
        return (
            <div>
                <h2>Redux Example</h2>
                <input style={{'marginBottom': '10px'}} type="text" onChange={this.onBlur.bind(this)}/>
                <br/>
                Output: {this.props.text}
            </div>
        );
    }
}

ReduxExampleComponent.propTypes = {
};

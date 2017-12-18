import React from 'react';

// experimental
export default class PrivateRoute extends React.Component {
    render() {
        return (
            <div> Private Route
                {this.props.render()}
            </div>
        );
    }
}

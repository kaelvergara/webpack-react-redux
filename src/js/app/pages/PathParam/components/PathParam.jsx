import React from 'react';

export default class PathParam extends React.Component {
    render() {
        const id = this.props.match.params.id;

        return (
            <div>
                <h2>Path Param: {id}</h2>
            </div>
        );
    }
}

PathParam.defaultProps = {
    match: {
        params: {}
    }
};

PathParam.propTypes = {
    match: React.PropTypes.shape({
        params: React.PropTypes.shape({
            id: React.PropTypes.string
        })
    })
};

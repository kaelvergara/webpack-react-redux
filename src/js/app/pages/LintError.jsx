import React from 'react';
import get from 'lodash/get';

export default class LintErrors extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState(null)
    }

    componentWillMount() {
        // empty function
    }

    render() {
        const a = "a";
        return (
            <div>
                <div></div>
                <div class="hello">
                    <span>World</span>
                  <label for="firstName"> First Name </label>
                <input id="firstName" type="text"/>

                </div>
            </div>
        );
    }
}

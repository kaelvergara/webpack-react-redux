import React, {Component} from 'react';
import SimpleForm from './components/SimpleForm';

export default class Index extends Component {

    handleSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <SimpleForm onSubmit={this.handleSubmit} />
        );
    }
}



import React from 'react';
import {Field, reduxForm} from 'redux-form';

class SimpleForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="form-horizontal">
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="firstName">First Name</label>
                    <div className="col-sm-10">
                        <Field
                            id="firstName"
                            name="firstName"
                            className="form-control"
                            component="input"
                            type="text"
                            placeholder="First Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="lastName">Last Name</label>
                    <div className="col-sm-10">
                        <Field name="lastName" className="form-control" component="input" type="text" placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Email</label>
                    <div className="col-sm-10">
                        <Field name="email" className="form-control" component="input" type="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Sex</label>
                    <div className="col-sm-10">
                        <label><Field name="sex" component="input" type="radio" value="male" /> Male</label>
                        <label><Field name="sex" component="input" type="radio" value="female" /> Female</label>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Favorite Color</label>
                    <div className="col-sm-10">
                        <Field name="favoriteColor" component="select">
                            <option />
                            <option value="ff0000">Red</option>
                            <option value="00ff00">Green</option>
                            <option value="0000ff">Blue</option>
                        </Field>
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label" htmlFor="employed">Employed</label>
                    <div className="col-sm-10">
                        <Field name="employed" id="employed" component="input" type="checkbox" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-sm-2 control-label">Notes</label>
                    <div className="col-sm-10">
                        <Field name="notes" className="form-control" component="textarea" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'simple'  // a unique identifier for this form
})(SimpleForm);

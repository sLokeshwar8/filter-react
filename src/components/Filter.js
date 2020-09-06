import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';


class Filter extends Component {
    render() {
        console.log(this.state)
        const checkedNameHandler = (event) => {
            this.props.namefilter(event)
        } 
        const checkedDobHandler = (event) => {
            this.props.dobfilter(event)

        } 
        return (
        <div className="checkboxes">
            <Checkbox
                checked={this.props.namefilterStatus}
                onChange={(e) => checkedNameHandler(e.target.checked)}
            />
            <label>Name</label>
            <Checkbox
                checked={this.props.dobfilterStatus}
                onChange={(e) => checkedDobHandler(e.target.checked)}
            />
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;
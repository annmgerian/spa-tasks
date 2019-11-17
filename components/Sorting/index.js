import React, {Component} from 'react';
import {connect} from 'react-redux';
import {sortBy, setDirection} from '../../redux/actions/index';

import Sorting from './Sorting';

class SortingShell extends Component {
    setSort = e => {
        this.props.sortBy(e.target.value);
    };

    setSortDirection = e => {
        // console.log(e.target.checked);
        this.props.setDirection(e.target.checked);
    };

    render() {
        return (
            <div>
                <Sorting
                    setSort={this.setSort}
                    setSortDirection={this.setSortDirection}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    sortBy: filter => dispatch(sortBy(filter)),
    setDirection: filter => dispatch(setDirection(filter)),
});

export default connect(
    null,
    mapDispatchToProps
)(SortingShell);

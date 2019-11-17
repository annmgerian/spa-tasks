import React, {Component } from 'react';
import { connect } from 'react-redux';
import { setPage } from '../../redux/actions/index';
import Pagination from './Pagination';

class PaginationShell extends Component {
    prev = () => {
        this.props.setPage(this.props.app.currentPage - 1);
    };

    next = () => {
        if (
            this.props.app.currentPage <
            Math.ceil(this.props.app.pages / this.props.app.pagesNumber)
        )
            this.props.setPage(this.props.app.currentPage + 1);
    };

    render() {
        const { currentPage, pages, pagesNumber } = this.props.app;

        return (
            <div>
                <Pagination
                    currentPage={currentPage}
                    pages={pages}
                    pagesNumber={pagesNumber}
                    prev={this.prev}
                    next={this.next}
                    setPage={this.props.setPage}
                />
            </div>
        );
    }
}

const mapStateToProps = store => ({
    app: store.app,
});

const mapDispatchToProps = dispatch => ({
    setPage: page => dispatch(setPage(page)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginationShell);

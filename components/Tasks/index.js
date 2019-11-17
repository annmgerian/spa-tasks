import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTasks} from '../../redux/actions/index';
import Tasks from './Tasks';

class TasksShell extends Component {
    updateTasks = async () => {
        let response = await fetch(
            `https://uxcandy.com/~shapoval/test-task-backend/v2/?sort_field=${
                this.props.app.sortBy
            }&sort_direction=${this.props.app.direction}&page=${
                this.props.app.currentPage
            }&developer=AnnMgerian`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        let data = await response.json();

        this.props.setTasks(data.message.tasks, data.message.total_task_count);

    };

    componentDidMount = () => {
        this.updateTasks();
    };

    componentDidUpdate = prevProps => {
        if (prevProps.app.sortBy !== this.props.app.sortBy) {
            this.updateTasks();
        }
        if (prevProps.app.direction !== this.props.app.direction) {
            this.updateTasks();
        }
        if (prevProps.app.currentPage !== this.props.app.currentPage) {
            this.updateTasks();
        }
        if (prevProps.app.currentPage !== this.props.app.currentPage) {
            this.updateTasks();
        }
    };

    render() {
        const {tasks} = this.props.app;

        return (
            <div>
                <Tasks tasks={tasks}/>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    app: store.app,
});

const mapDispatchToProps = dispatch => ({
    setTasks: (tasks, pages) => dispatch(setTasks(tasks, pages)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksShell);

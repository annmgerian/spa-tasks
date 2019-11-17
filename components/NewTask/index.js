import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTasks} from '../../redux/actions/index';
import NewTask from '../NewTask/NewTask';

class NewTaskShell extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            email: '',
            text: '',
        };
    }

    createTask = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('username', this.state.username);
        data.append('email', this.state.email);
        data.append('text', this.state.text);

        let prevRespons=await fetch(
            `https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=AnnMgerian`,
            {
                method: 'POST',
                body: data,
            }
        );
        let prevResponsData= await prevRespons.json();
        if(prevResponsData.status==='error'){
            alert('Invalid email')
        }
        else
            alert('Successfully added')
        let response = await fetch(
            `https://uxcandy.com/~shapoval/test-task-backend/v2/?sort_field=${
                this.props.app.sortBy
            }&page=${this.props.app.currentPage}&developer=AnnMgerian`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        let responseData = await response.json();
        this.setState({username: '', email: '', text: ''});
        this.props.setTasks(
            responseData.message.tasks,
            responseData.message.total_task_count
        );

    };
    changeUsername = e => {
        this.setState({username: e.target.value});
    };

    changeEmail = e => {
        this.setState({email: e.target.value});
    };

    changeText = e => {
        this.setState({text: e.target.value});
    };

    render() {
        return (
            <div>
                <NewTask
                    username={this.state.username}
                    email={this.state.email}
                    text={this.state.text}
                    changeUsername={this.changeUsername}
                    changeEmail={this.changeEmail}
                    changeText={this.changeText}
                    createTask={this.createTask}
                />
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
)(NewTaskShell);

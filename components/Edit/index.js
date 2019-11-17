import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTasks} from '../../redux/actions/index';
import Edit from './Edit';

class EditShell extends Component {
    constructor() {
        super();

        this.state = {
            isClicked: false,
            task: '',
            status: 0,
        };
    }

    click = () => {
        this.setState({isClicked: !this.state.isClicked});
    };

    writeTask = e => {
        this.setState({task: e.target.value});
    };

    changeStatus = e => {
        if (e.target.checked) {
            this.setState({status: 10});
        } else {
            this.setState({status: 0});
        }
    };

    edit = async (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('token', localStorage.getItem('token'));

        data.append('text', this.state.task);
        data.append('status', this.state.status);

        let response = await fetch(
            `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${
                this.props.id
            }?developer=AnnMgerian`,
            {
                method: 'POST',
                body: data,
            }
        )
        let responseData = await response.json();
        if (responseData.status === 'error') {
            alert(
                'You must authorize before editing'
            );
            this.setState({isClicked: false, task: ''});
        } else {
            let newResponse = await fetch(
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
            let newResponseData = await newResponse.json();
            this.props.setTasks(
                newResponseData.message.tasks,
                newResponseData.message.total_task_count
            );
            if(this.state.task!=='') {
                // var id = this.props.id
                var request = new Request(`/api/addId`, {
                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({id:this.props.id}),
                });
                await fetch(request);
            }
        }
    };


render()
{
    return (
        <div>
            <Edit
                isClicked={this.state.isClicked}
                click={this.click}
                task={this.state.task}
                writeTask={this.writeTask}
                edit={this.edit}
                changeStatus={this.changeStatus}
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
)(EditShell);

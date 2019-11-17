import React, {Component} from 'react';
import EditShell from "../Edit";

class Task extends Component {
    constructor() {
        super();
        this.state = {
            edit: "",

        };
    }

    componentDidMount = async () => {
        var request = new Request(`/api/getId`, {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({id: this.props.id}),
        });
        let response = await fetch(request);
        let data = await response.json();

        data[this.props.task.id] !== undefined ? this.setState({edit: ', edited by admin'}) : this.setState({edit: ""})
    };

    render() {
        const {id, username, email, text, status} = this.props.task;
        const {edit} = this.state;
        return (

            <div
                className='task card mb-3'
            >
                <div
                    className=' ml-3'
                >{status === 10 ? 'Completed' + edit : 'Uncompleted' + edit
                }</div>
                <div className="d-flex">
                    <div className="card-body">
                        <div className="d-flex">
                            <i className="fas fa-address-card" style={{lineHeight: 1.7}}/>
                            <h5 className="card-title ml-3">{username}</h5></div>
                        <div className="d-flex">
                            <i className="fas fa-pen-square" style={{lineHeight: 1.7}}/>
                            <p className="card-text ml-3">{text}</p></div>
                        <div className="d-flex">
                            <i className="fas fa-envelope" style={{lineHeight: 1.7}}/>
                            <p className="card-text ml-3">
                                <small className="text-muted">{email}</small>
                            </p></div>

                    </div>
                    <EditShell id={id}/>
                </div>

            </div>


        );
    }
};

export default Task;

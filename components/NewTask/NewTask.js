import React from 'react';

const NewTask = props => {
    const {
        username,
        email,
        text,
        changeUsername,
        changeEmail,
        changeText,
        createTask,
    } = props;

    return (
        <form className="mt-5 mb-5" onSubmit={createTask}>
            {/*<h5>Add task</h5>*/}
            <div className="input-group mb-3">
                <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-address-card"/>
          </span>
                </div>
                <input
                    value={username}
                    onChange={changeUsername}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    // aria-describedby="basic-addon1"
                    required
                />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon2"> <i className="fas fa-envelope"/></span>
                </div>
                <input
                    value={email}
                    onChange={changeEmail}
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    aria-label="Your email"
                    // aria-describedby="basic-addon2"
                    required
                />
                <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            @example.com
          </span>
            </div>
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                </div>
                <textarea
                    value={text}
                    onChange={changeText}
                    className="form-control"
                    aria-label="Task's description"
                    required
                />
            </div>

            <button type="submit" style={{backgroundColor: '#e9ecef'}} className="btn float-right login_btn mb-3 mt-3">
                Add task
            </button>
        </form>
    );
};

export default NewTask;

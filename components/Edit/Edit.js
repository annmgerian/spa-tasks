import React from 'react';

const Edit = props => {
    const {isClicked, click, edit, task, writeTask, changeStatus} = props;

    return (
        <div>
            {isClicked ? (
                <form onSubmit={edit}>
                    <div className="edit form-row align-items-center">
                        <div className="col-auto my-1">
                            <label
                                className="mr-sm-2 sr-only"
                                htmlFor="inlineFormCustomSelect"
                            >
                                Preference
                            </label>
                            <textarea value={task} onChange={writeTask}/>
                        </div>
                        <div className="col-auto my-1">
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input
                                    onChange={changeStatus}
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customControlAutosizing"
                                    style={{color: '#000000', backgroundColor: '#e9ecef'}}

                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customControlAutosizing"
                                >
                                    Completed
                                </label>
                            </div>
                        </div>
                        <div className="col-auto my-1">

                            <input type="submit" className="btn btn-primary mr-3" value="Send"
                                   style={{color: '#000000', backgroundColor: '#e9ecef'}}/>
                            <button onClick={click} className="btn btn-primary"
                                    style={{color: '#000000', backgroundColor: '#e9ecef'}}>
                                Close
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <button onClick={click} className="btn btn-primary"
                        style={{color: '#000000', backgroundColor: '#e9ecef'}}>
                    Edit
                </button>
            )}
        </div>
    );
};

export default Edit;

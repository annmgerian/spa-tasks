import React from 'react';
import Task from '../Task/Task';

const Tasks = props => {

    const { tasks } = props;

    return (
        <div>
            <h4>Tasks</h4>
            {tasks.map(task => {
                return <Task task={task} key={Math.random()} />;
            })}
        </div>
    );
};

export default Tasks;

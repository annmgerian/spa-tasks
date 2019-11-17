import AuthShell from "../components/Auth";
import NewTaskShell from "../components/NewTask";
import SortingShell from "../components/Sorting";
import TasksShell from "../components/Tasks";
import PaginationShell from "../components/Pagination";

import Head from 'next/head';
import {Provider} from 'react-redux';
import React from 'react';
import {store} from '../redux/store/index';
import Pagination from "../components/Pagination/Pagination";

const Index = () => (
    <Provider store={store}>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossorigin="anonymous"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                  crossOrigin="anonymous"/>
            <title>Tasks</title>
        </Head>
        <div className="m-5">
            <AuthShell/>
            <NewTaskShell/>
            <SortingShell/>
            <TasksShell/>
            <PaginationShell/>
        </div>
    </Provider>
);

export default Index;

import { useEffect, useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton } from "../components";

function Home() {

    const initialTaskState = {
        id: 0,
        labelId: 0,
        title: '',
        description: ''
    };

    const [myTasks, setMyTasks] = useState();
    const [newTask, setNewTask] = useState(initialTaskState);

    useEffect(() => {
        getTaskData();
    }, []);

    const contents = myTasks === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {myTasks.map(myTask =>
                    <tr>
                        <td>{myTask.title}</td>
                        <td>{myTask.description}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (

        <ContainerWrapper maxWidth="800px" heading="Menadżer zadań">
            <Form onSubmit={handleSubmit}>
                <div className="d-flex mb-3 gap-3" style={{flexWrap: "wrap"}}>
                <InputWrapper
                    controlId="formTitle"
                    title="Title"
                    type="text"
                    placeholder="Enter title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="flex-fill"
                />
                <InputWrapper
                    controlId="formDescription"
                    title="Description"
                    type="text"
                    placeholder="Enter description"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="flex-fill"
                />
                </div>
                <CustomButton title="Add Task" />
            </Form>
            {contents}
        </ContainerWrapper>
    )

    async function getTaskData() {
        const response = await fetch('https://localhost:7021/api/MyTasks');
        //const response = await fetch('weatherforecast');
        const data = await response.json();
        setMyTasks(data);
    }

    async function handleSubmit() {
        const response = await fetch('https://localhost:7021/api/MyTasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask),
        });
    }
}

export default Home
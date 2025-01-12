
import { useEffect, useState } from 'react';
import { Form, Modal } from "react-bootstrap";
import { ContainerWrapper, InputWrapper, CustomButton, IconButton } from "../components";

function Home() {

    const initialTaskState = {
        id: 0,
        labelId: 0,
        title: '',
        description: ''
    };

    const [myTasks, setMyTasks] = useState();
    const [newTask, setNewTask] = useState(initialTaskState);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleModalToggle = () => setShowModal(!showModal);

    useEffect(() => {
        getTaskData();
    }, []);

    const handleEditTask = (task) => {
        setNewTask(task);
        setIsEditing(true);
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await fetch(`https://localhost:7021/api/MyTasks/${newTask.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
        } else {
            await fetch('https://localhost:7021/api/MyTasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
        }

        await getTaskData(); // Odśwież listę zadań
        handleModalToggle();
    };

    const handleDeleteTask = async (id) => {
        await fetch(`https://localhost:7021/api/MyTasks/${id}`, {
            method: 'DELETE',
        });
        await getTaskData();
    };

    const contents = myTasks === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {myTasks.map(myTask =>
                    <tr>
                        <td>{myTask.title}</td>
                        <td>{myTask.description}</td>
                        <td>
                          <IconButton
                               onClick={() => handleEditTask(myTask)}
                               iconClass="bi bi-pencil"
                           />
                          <IconButton
                               onClick={() => handleDeleteTask(myTask.id)}
                               iconClass="bi bi-trash"
                           />
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (

        <ContainerWrapper maxWidth="800px" heading="Menadżer zadań">
            <CustomButton title="Popup" onClick={handleModalToggle} />
            <Modal show={showModal} onHide={handleModalToggle} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
            </Modal>
            {contents}
        </ContainerWrapper>
    )

    async function getTaskData() {
        const response = await fetch('https://localhost:7021/api/MyTasks');
        //const response = await fetch('weatherforecast');
        const data = await response.json();
        setMyTasks(data);
    }
    
}

export default Home
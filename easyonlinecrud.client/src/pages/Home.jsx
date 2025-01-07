
import { useEffect, useState } from 'react';
import { Container} from "react-bootstrap";

function Home() {

    const [myTasks, setMyTasks] = useState();

    useEffect(() => {
        populateMyTaskData();
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
        <Container className="mt-5" style={{ maxWidth: "800px" }}>
            <h1 className="mb-3">Menadżer zadań</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </Container>
    )

    async function populateMyTaskData() {
        const response = await fetch('https://localhost:7021/api/MyTasks');
        //const response = await fetch('weatherforecast');
        const data = await response.json();
        setMyTasks(data);
    }
}

export default Home
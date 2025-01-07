
import { useEffect, useState } from 'react';

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
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    )

    async function populateMyTaskData() {
        const response = await fetch('https://localhost:7021/api/MyTasks');
        //const response = await fetch('weatherforecast');
        const data = await response.json();
        setMyTasks(data);
    }
}

export default Home
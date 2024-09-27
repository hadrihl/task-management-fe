import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import TaskList from "../components/task/TaskList";

const Tasks = () => {

    return (
        <div className="App">
            <Navbar />

            <div>
                <TaskList />
            </div>

            <Footer />
        </div>
    )

}

export default Tasks;
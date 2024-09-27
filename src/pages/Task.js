import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import TaskDetails from "../components/task/TaskDetails";

const Task = () => {

    return(
        <div className="App">
            <Navbar />

            <div class="App-header">
                <TaskDetails />
            </div>

            <Footer />
        </div>
    )

}

export default Task;
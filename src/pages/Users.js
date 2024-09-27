import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import UserList from "../components/user/UserList";
import UserForm from "../components/user/UserForm";

const Users = () => {

    return (
        <div className="App">
            <Navbar />

            <div className="App-header">
                <UserForm />
                
                <UserList />
            </div>

            <Footer />
        </div>
    )
}

export default Users;
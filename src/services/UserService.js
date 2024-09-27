import axios from "axios";

const API_URL = "http://localhost:8080/api/users"

const UserService = () => {

    registerUser: async (user) => {
        try {
            const response = await axios.post(API_URL, post);
            console.log(reponse.data);
        } catch (error) {
            console.error("Error: " + error);
        }
    };

}

export default UserService;
//unfinished
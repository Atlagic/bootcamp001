import axios from "axios";

const requestUrl = "https://api.github.com/search/users?q=marko";

class Users {
    constructor() { }

    getUsers(notifyGetUsers) {
        axios.get(requestUrl).then((response) => {
            notifyGetUsers(response.data.items);
        });
    }
}

export default Users;

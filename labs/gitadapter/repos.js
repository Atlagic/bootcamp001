import axios from "axios";

const requestUrl = "https://api.github.com/search/repositories?q=explore&per_page=10";

class Repos {
    constructor() { }

    getRepos(notifyGetRepos) {
        axios.get(requestUrl).then((response) => {
            notifyGetRepos(response.data.items);
        });
    }
}

export default Repos;

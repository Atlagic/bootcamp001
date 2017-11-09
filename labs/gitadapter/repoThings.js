import Repos from "./repos";
import Thing from "./thing";

class RepoThings {
    constructor() { }

    getThings(onGetThings) {
        const repos = new Repos();

        repos.getRepos((items) => {
            const things = [];
            items.forEach((item) => {
                const name = item.name;
                const avatarUrl = item.owner.avatar_url;

                const thing = new Thing(name, avatarUrl, "Repo");

                things.push(thing);
            });

            onGetThings(things);
        });
    }
}

export default RepoThings;

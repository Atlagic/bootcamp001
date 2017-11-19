import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./common/header";
import PostList from "./posts/postList";
import PostDetails from "./posts/postDetails";
import ComposePostPage from "./posts/new/composePostPage";
import About from "./about/about";
import AuthorDetailsPage from "./authors/authorsDetails";
import AuthorList from "./authors/authorList";
import Footer from "./common/footer";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={PostList} />
                    <Route path='/posts/:id' component={PostDetails} />
                    <Route path='/compose' component={ComposePostPage} />
                    <Route path='/authors' component={AuthorList} />
                    <Route path='/authors/:id' component={AuthorDetailsPage} />
                    <Route path='/about' component={About} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;

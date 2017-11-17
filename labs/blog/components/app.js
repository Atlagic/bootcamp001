import React from "react";
import Header from "./header";
import Footer from "./footer";
import PostListPage from "./postListPage";
import PostDetailsPage from "./postDetailsPage";
import About from "./about";
import ComposePage from "./composePage";

import {Switch, Route} from "react-router-dom";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={PostListPage} />
                    <Route path='/post/:id' component={PostDetailsPage} />
                    <Route path='/about' component={About} />
                    <Route path='/compose' component={ComposePage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
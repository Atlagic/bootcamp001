import React from "react";
import Header from "./header";
import Footer from "./footer";
import MainContent from "./mainContent";
import About from "./about";

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
                    <Route exact path='/' component={MainContent} />
                    <Route path='/' component={About} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
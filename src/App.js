import React from 'react';
import './App.css'
// import Cards from "./components/cards/cards"
import Header from "./components/header/Header"
import MovieDetail from "./pages/movieDetail/movie"
import MovieListPage from "./pages/movieListPage/movieListPage"
import Home from "./pages/home/home"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                 <Switch>
                <Route exact path="/TvMovie/"><Home /></Route>
                <Route path="/TvMovie/movie/:id"><MovieDetail /></Route>
                <Route path="/TvMovie/movies/:type"><MovieListPage /></Route>
                <Route path="/TvMovie/:anything"><Redirect to="/"></Redirect></Route>
                </Switch> 
            </Router>
        </div>
    )
}

export default App;

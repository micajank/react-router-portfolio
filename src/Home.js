import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Blog from './Blog';
import Projects from './Projects';
import About from './About';

function Home(props) {
    

    return (
        <Router>
            <div>
                <h1>Welcome to Mac's Portfolio!</h1>
                <p>Thanks for stopping by, feel free to check out my projects and blog, and if you want more information, my about page has some great stories...</p>
                <ul>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                    <Route path="/blog" component={Blog} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/about" component={About} />
            </div>
        </Router>
    )
}

export default Home;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = (props) => <h2>{props.title}</h2> ;

    // class Hello extends Component
    // {
    //     render()
    //     {
    //         return <h2>{this.props.title}</h2>;
    //     }
    // }

 class App extends Component
 {
    render()
    {
        return (< div className="App" >
            < header className="App-header" >
                < img src={logo}
                    className="App-logo"
                    alt="logos" />
                <Hello title='Hello wordl' />

                < p>
                    Edit < code > src / App.js </code>  reload.
        </p> <a className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    Learn React >
                </a> </header >
            <p></p>
        </div>
        );
    }
 }
// function App() {
    
// }

export default App;
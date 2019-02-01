import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const data = {
    users: [
        {
            id: 1,
            name: 'Pawel',
            sex: 'male',
            age: 31
        },
        {
            id: 2,
            name: 'Zosia',
            sex: 'female',
            age: 4.5
        },
        {
            id: 3,
            name: 'Brian',
            sex: 'male',
            age: 87
        },
        {
            id: 4,
            name: 'Nika',
            sex: 'female',
            age: 56
        }
    ]
}

ReactDOM.render(<App data={data} />, document.getElementById('root'));
>>>>>>> 40a2d56927bb2bf38d65dfd1235d6c3a31a680ea

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

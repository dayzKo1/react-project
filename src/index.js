import "lodash";
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App'
import 'normalize.css/normalize.css'
import './styles/index.less'
import './css/bootstrap.css'
ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
)